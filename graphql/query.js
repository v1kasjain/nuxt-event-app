import gql from "graphql-tag";
export const allEventQuery = gql`
  query Events {
    events {
      data {
        id
        attributes {
          title
          date
          image {
            data {
              attributes {
                name
                url
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const eventQuery = gql`
  query event($id: ID!) {
    event(id: $id) {
      data {
        id
        attributes {
          title
          date
          description
          image {
            data {
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;
