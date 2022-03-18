import Head from 'next/head';
import matter from 'gray-matter';
import md from 'markdown-it';
import apolloClient from '../../../apollo/apolloClient';
import { projetoItemQuery } from '../../../apollo/queries/projtoItemQuery';
import BannerProjeto from '../../../components/BannerProjeto';
import { IProjectResponse, IProjeto } from '../../../types/Projet';
import { ProjetoContainer } from './styles';

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projetos({ projeto }: ProjetoProps) {
  return (
    <ProjetoContainer>
      <Head>
        <title>{projeto.title} | Leandrovboas</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />
      <main>
        <div
          dangerouslySetInnerHTML={{ __html: md().render(projeto.description) }}
        />
        <button type="button">
          <a href="/projetos">Ver todos projeto</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

export async function getServerSideProps(context) {
  try {
    const { data } = await apolloClient.query<IProjectResponse>({
      query: projetoItemQuery,
      variables: {
        slug: context.query.slug
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

    return {
      props: { projeto }
    };
  } catch (err) {
    console.error('Error fetching project', err);

    return {
      props: {}
    };
  }
}
