import { gql } from '@apollo/client';

export const projetosQuery = gql`
  {
    projects(sort: "Date:desc") {
      data {
        attributes {
          slug
          Date
          Project {
            id
            title
            subtitle
            content
            linkImagem
          }
        }
      }
    }
  }
`;
