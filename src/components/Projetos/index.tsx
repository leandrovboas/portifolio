import Link from 'next/link';
import ProjtoItem from './ProjetoItem';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />
      <section>
        <ProjtoItem
          title="Projeto 1"
          type="Website"
          slug="teste"
          img="https://secure.meetupstatic.com/photos/event/b/3/9/0/600_465405968.jpeg"
        />
        <ProjtoItem
          title="Projeto 2"
          type="Website"
          slug="teste"
          img="https://secure.meetupstatic.com/photos/event/b/3/9/0/600_465405968.jpeg"
        />
        <ProjtoItem
          title="Projeto 3"
          type="Website"
          slug="teste"
          img="https://secure.meetupstatic.com/photos/event/b/3/9/0/600_465405968.jpeg"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
