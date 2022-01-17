import { gql } from "@apollo/client";

export const ADD_SERVICE = gql`
  mutation addService(
    $name: String!
    $description: String!
    $individualPrice: Int!
    $smallPrice: Int!
    $mediumPrice: Int!
    $largePrice: Int!
    $imageUrls: [String]!
  ) {
    addService(
      name: $name
      description: $description
      individualPrice: $individualPrice
      smallPrice: $smallPrice
      mediumPrice: $mediumPrice
      largePrice: $largePrice
      imageUrls: $imageUrls
    ) {
      name
      description
      individualPrice
      smallPrice
      mediumPrice
      largePrice
      imageUrls
    }
  }
`;

// UPDATE_SERVICE mutation that will update the service with the given id
export const UPDATE_SERVICE = gql`
  mutation updateService(
    $_id: ID!
    $name: String!
    $description: String!
    $individualPrice: Int!
    $smallPrice: Int!
    $mediumPrice: Int!
    $largePrice: Int!
    $imageUrls: [String]!
  ) {
    updateService(
      _id: $_id
      name: $name
      description: $description
      individualPrice: $individualPrice
      smallPrice: $smallPrice
      mediumPrice: $mediumPrice
      largePrice: $largePrice
      imageUrls: $imageUrls
    ) {
      name
      description
      individualPrice
      smallPrice
      mediumPrice
      largePrice
      imageUrls
    }
  }
`;

export const REMOVE_SERVICE = gql`
  mutation removeService($_id: ID!) {
    removeService(_id: $_id) {
      _id
    }
  }
`;

// export const UPDATE_SERVICE = gql``;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
