import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos />
      </main>
    </HomeContainer>
  );
}
