import { gql } from '@apollo/client';

export const projetosQuery = gql`
  {
    projects {
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
