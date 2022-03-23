import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from './styles';
import { IProjeto } from '../../types/Projet';
import { ProjetosService } from '../../services/ProjetosService';
import ErroInterno from '../../components/ErroInterno';

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
  const hasProject = projetos.length === 0;
  return (
    <ProjetosContainer>
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
      {hasProject && <ErroInterno />}
      {!hasProject && (
        <main className="container">
          {projetos?.map(projeto => (
            <ProjetoItem
              key={projeto.id}
              title={projeto.title}
              type={projeto.type}
              slug={projeto.slug}
              imgUrl={projeto.thumbnail}
            />
          ))}
        </main>
      )}
    </ProjetosContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projetos = await ProjetosService.get();
  return {
    props: { projetos }
  };
};
