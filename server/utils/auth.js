const jwt = require("jsonwebtoken");
//set token secret and expiration time
const secret = "mysecretssshhhhhhh";
const expiration = "2h";
//this function will generate a token for the user and return it to the client side application to be stored in the local storage of the client
//the token will be sent to the client side application to be used for authentication and authorization of the user to access the protected routes

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  authMiddleware: function ({ req }) {
    //allows token to be sent via req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop.trip();
    }

    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
      return res.status(400).json({ message: "invalid token!" });
    }

    // send to next endpoint
    return req;
  },
};
