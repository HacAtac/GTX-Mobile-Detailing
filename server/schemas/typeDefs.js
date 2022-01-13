// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Service {
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
    me: User
    users: [User]
    user(username: String!): User
    services: [Service]
    service(_id: ID!): Service
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    newService(
      _id: String!
      name: String!
      description: String!
      individualPrice: Int!
      smallPrice: Int!
      mediumPrice: Int!
      largePrice: Int!
      imageUrls: [String]!
    ): User
    removeService(_id: String!): User
    updateService(
      _id: String!
      name: String!
      description: String!
      individualPrice: Int!
      smallPrice: Int!
      mediumPrice: Int!
      largePrice: Int!
      imageUrls: [String]!
    ): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
