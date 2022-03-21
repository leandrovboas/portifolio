import React from 'react';
import Tilt from 'react-vanilla-tilt';
import Head from 'next/head';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from './styles';
import { IProjeto } from '../../types/Projet';
import { ProjetosService } from '../../services/ProjetosService';

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
  const projetos = await ProjetosService.get();
  return {
    props: { projetos }
  };
}
