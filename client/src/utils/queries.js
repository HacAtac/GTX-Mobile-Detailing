import { gql } from "@apollo/client";

export const QUERY_SERVICES = gql`
  query {
    services {
      _id
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
