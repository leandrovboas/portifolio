import { gql } from '@apollo/client';

export const projetoItemQuery = gql`
  query ($slug: String!) {
    projects(filters: { slug: { eq: $slug } }) {
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
