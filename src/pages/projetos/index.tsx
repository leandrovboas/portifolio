import React from 'react';
import Tilt from 'react-vanilla-tilt';
import Head from 'next/head';
import apolloClient from '../../apollo/apolloClient';
import { projetosQuery } from '../../apollo/queries/projetosQuery';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from './styles';
import { IProjeto, IProjectResponseCollection } from '../../types/Projet';

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
  return (
    <ProjetosContainer
      hasProject={projetos === undefined || projetos.length === 0}
    >
      <Head>
        <title>Projetos | Leandrovboas</title>
        <meta
          name="description"
          content="Sou um desenvolvedor de software em diversas linguagens"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor de software em diversas linguagens"
        />
      </Head>
      <span> Tivemos um problema para carregar as informações</span>
      <main className="container">
        {projetos?.map(projeto => (
          <Tilt
            className="tilt"
            options={{ speed: 400, max: 25, glare: true, 'max-glare': 1 }}
            data-aos="fade-down"
            data-aos-easing="linear"
          >
            <ProjetoItem
              key={projeto.id}
              title={projeto.title}
              type={projeto.type}
              slug={projeto.slug}
              imgUrl={projeto.thumbnail}
            />
          </Tilt>
        ))}
      </main>
    </ProjetosContainer>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await apolloClient.query<IProjectResponseCollection>({
      query: projetosQuery
    });
    const projetos = data.projects.data.map(projeto => ({
      id: projeto.attributes.Project.id,
      slug: projeto.attributes.slug,
      title: projeto.attributes.Project.title,
      type: projeto.attributes.Project.subtitle,
      description: projeto.attributes.Project.content,
      thumbnail: projeto.attributes.Project.linkImagem
    }));

    return {
      props: { projetos }
    };
  } catch (err) {
    console.error('Error fetching data apolloClient projects', err);

    return {
      props: {}
    };
  }
}
