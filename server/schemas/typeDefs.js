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
    users: [User]
    user(username: String!): User
    services: [Service]
    service(name: String!): Service
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addService(
      name: String!
      description: String!
      individualPrice: Int!
      smallPrice: Int!
      mediumPrice: Int!
      largePrice: Int!
      imageUrls: [String]!
    ): Service
    removeService(_id: ID!): Service
    updateService(
      _id: ID!
      name: String!
      description: String!
      individualPrice: Int!
      smallPrice: Int!
      mediumPrice: Int!
      largePrice: Int!
      imageUrls: [String]!
    ): Service
  }
`;

// export the typeDefs
module.exports = typeDefs;
