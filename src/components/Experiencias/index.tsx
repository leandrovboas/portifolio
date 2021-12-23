import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';

import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="10 Anos" description="de experiência" />

      <section>
        <ExperienciaItem />
        <ExperienciaItem />
        <ExperienciaItem />
        <ExperienciaItem />
        <ExperienciaItem />
      </section>
    </Container>
  );
}

export default Experiencias;
