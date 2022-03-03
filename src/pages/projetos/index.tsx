import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from './styles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          title="Projeto -1"
          type="website"
          slug="teste"
          imgUrl="https://www.lambda3.com.br/wp-content/uploads//2016/07/PODCAST_POSTAGEMBLOG.jpg"
        />
        <ProjetoItem
          title="Projeto -1"
          type="website"
          slug="teste"
          imgUrl="https://secure.meetupstatic.com/photos/event/b/3/9/0/600_465405968.jpeg"
        />
        <ProjetoItem
          title="Projeto -1"
          type="website"
          slug="teste"
          imgUrl="https://secure.meetupstatic.com/photos/event/b/3/9/0/600_465405968.jpeg"
        />
        <ProjetoItem
          title="Projeto -1"
          type="website"
          slug="teste"
          imgUrl="https://secure.meetupstatic.com/photos/event/b/3/9/0/600_465405968.jpeg"
        />
      </main>
      <Footer />
    </ProjetosContainer>
  );
}
