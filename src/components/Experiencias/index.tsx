import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  const anoAtual: number = new Date().getFullYear();
  const anoFormado: number = 2010;
  const anosExperiencia = anoAtual - anoFormado;
  const result = `${anosExperiencia} Anos`;

  return (
    <Container>
      <SectionTitle title={result} description="de experiência" />

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
