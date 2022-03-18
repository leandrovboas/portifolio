import {
  ProjectEntityResponse,
  ProjectEntityResponseCollection
} from '../graphql';

export type IProjeto = {
  id: string;
  slug: string;
  title: string;
  type: string;
  description: string;
  link?: string;
  thumbnail: string;
};

export type IProjectResponseCollection = {
  projects: ProjectEntityResponseCollection;
};

export type IProjectResponse = {
  projects: ProjectEntityResponse;
};
