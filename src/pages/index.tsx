import Aos from 'aos';
import { useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import HomeHero from '../components/HomeHero';
import { HomeContainer } from '../styles/HomeStyles';
import Conhecimentos from '../components/Conhecimentos';
import 'aos/dist/aos.css';
import apolloClient from '../apollo/apolloClient';
import { IProjectResponseCollection, IProjeto } from '../types/Projet';
import { projetosQuery } from '../apollo/queries/projetosQuery';

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Leandrovboas</title>
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
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos projetos={projetos} />
        <Conhecimentos />
      </main>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await apolloClient.query<IProjectResponseCollection>({
      query: projetosQuery
    });
    const projetos = data.projects.data.map(projeto => ({
      id: projeto.attributes.Project.id,
      slug: projeto.attributes.slug,
      title: projeto.attributes.Project.Title,
      type: projeto.attributes.Project.SubTitle,
      description: projeto.attributes.Project.Content,
      thumbnail: `${process.env.NEXT_PUBLIC_STRAPI}${projeto.attributes.Project.Banner.data.attributes.url}`
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
};
