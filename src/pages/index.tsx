import Aos from 'aos';
import { useEffect } from 'react';
import Head from 'next/head';
import Experiencias from '../components/Experiencias';
import HomeHero from '../components/HomeHero';
import { HomeContainer } from '../styles/HomeStyles';
import Conhecimentos from '../components/Conhecimentos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Leandrovboas</title>
        <meta name="description" content="Sou um Engenheiro de software" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um Engenheiro de software"
        />
      </Head>
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Conhecimentos />
        {/* <Certificacoes /> */}
      </main>
    </HomeContainer>
  );
}
