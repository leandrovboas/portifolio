import { gql } from '@apollo/client';

export const projetoItemQuery = gql`
  query ($slug: String!) {
    projects(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          Project {
            id
            Title
            SubTitle
            Content
            Banner {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
