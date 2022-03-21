import apolloClient from '../apollo/apolloClient';
import { projetosQuery } from '../apollo/queries/projetosQuery';
import { projetoItemQuery } from '../apollo/queries/projtoItemQuery';
import {
  IProjectResponse,
  IProjectResponseCollection,
  IProjeto
} from '../types/Projet';

export const ProjetosService = {
  get: async () => {
    try {
      const { data } = await apolloClient.query<IProjectResponseCollection>({
        query: projetosQuery
      });
      const projetos: IProjeto[] = data.projects.data?.map(projeto => ({
        id: projeto.attributes.Project.id,
        slug: projeto.attributes.slug,
        title: projeto.attributes.Project.title,
        type: projeto.attributes.Project.subtitle,
        description: projeto.attributes.Project.content,
        thumbnail: projeto.attributes.Project.linkImagem
      }));

      return projetos;
    } catch (err) {
      console.error('Error fetching data apolloClient projects', err);
      return {};
    }
  },

  find: async (slug: string) => {
    try {
      const { data } = await apolloClient.query<IProjectResponse>({
        query: projetoItemQuery,
        variables: {
          slug
        }
      });

      const projeto: IProjeto = {
        id: data.projects.data[0].attributes.Project.id,
        slug: data.projects.data[0].attributes.slug,
        title: data.projects.data[0].attributes.Project.title,
        type: data.projects.data[0].attributes.Project.subtitle,
        description: data.projects.data[0].attributes.Project.content,
        thumbnail: data.projects.data[0].attributes.Project.linkImagem
      };

      return projeto;
    } catch (err) {
      console.error('Error fetching project', err);

      return {};
    }
  }
};
