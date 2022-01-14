const { AuthenticationError } = require('apollo-server-express');
const { User, Service } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('service');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('service');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Service.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Service.findOne({ _id: serviceId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }    
  }
};

module.exports = resolvers;
