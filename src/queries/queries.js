import { gql } from "@apollo/client";

export const GET_ALL_SERVICES = gql`
  query {
    services {
      data {
        attributes {
          title
          description
          urlSlug
          content
        }
      }
    }
  }
`;

export const GET_SERVICE = gql`
  query ($slugUrl: String!) {
    services(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          description
          content
        }
      }
    }
  }
`;
