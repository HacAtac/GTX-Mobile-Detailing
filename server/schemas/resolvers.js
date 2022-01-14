const { User, Service } = require("../models");
// const User = require("../models/User");
// const Service = require("../models/service");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  //this is the root query for our graphql server and it returns the user object if the user is logged in
  //if the user is not logged in it returns null and throws an error to the client to handle it
  //basically this is like using monogoose findOne() method to find a user in the database and returning it
  Query: {
    users: async () => {
      return User.find().populate("Service");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("Service"); //this is the same as User.findOne({username: username})
      //what is ('service') is the name of the field in the User model that we want to populate
    },
    services: async () => {
      return Service.find();
    },
    service: async (parent, { serviceId }) => {
      return Service.findOne({ _id: serviceId });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, args) => {
      const user = await User.findOne({
        $or: [{ username: args.username }, { email: args.email }],
      });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(args.password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addService: async (parent, args) => {
      const service = await Service.create(args);
      return { service };
    },
    removeService: async (parent, args) => {
      return Service.findOneAndDelete({ _id: _id });
    },
    // updateService: async (parent, args) => {
    //   const service = await Service.findOneAndUpdate({ _id: _id });
    // },
  },
};

module.exports = resolvers;
