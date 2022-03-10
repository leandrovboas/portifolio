import { gql } from '@apollo/client';

export const projetosQuery = gql`
  {
    projects {
      data {
        attributes {
          Project {
            id
            Banner {
              data {
                attributes {
                  url
                }
              }
            }
            Title
            SubTitle
            Content
          }
        }
      }
    }
  }
`;
