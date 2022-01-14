// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type service {
    _id: ID
    name: String
    description: String
    individualPrice: Int
    smallPrice: Int
    mediumPrice: Int
    largePrice: Int
    imageUrls: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    services: [service]
    service(_id: ID!): service
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addService(
      _id: ID!
      name: String!
      description: String!
      individualPrice: Int!
      smallPrice: Int!
      mediumPrice: Int!
      largePrice: Int!
      imageUrls: [String]!
    ): service
    removeService(_id: ID!): service
    updateService(
      _id: ID!
      name: String!
      description: String!
      individualPrice: Int!
      smallPrice: Int!
      mediumPrice: Int!
      largePrice: Int!
      imageUrls: [String]!
    ): service
  }
`;

// export the typeDefs
module.exports = typeDefs;
