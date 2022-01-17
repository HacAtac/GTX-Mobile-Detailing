const { User, Service } = require("../models");
// const User = require("../models/User");
// const Service = require("../models/service");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username }).populate("Service");
    // },
    services: async () => {
      return Service.find();
    },
    service: async (parent, { _id }) => {
      return Service.findOne({ _id: _id });
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
    // _id is the id of the service that is being updated
    // ({_id: _id}) is the object that is being updated in the database and the id is the id of the service that is being updated
    removeService: async (parent, { _id }) => {
      return Service.findOneAndDelete({ _id: _id });
    },
    updateService: async (parent, args) => {
      const { _id, ...rest } = args;
      const service = await Service.findOneAndUpdate(_id, rest);
      console.log(service);
      return { service };
    },
  },
};

module.exports = resolvers;
