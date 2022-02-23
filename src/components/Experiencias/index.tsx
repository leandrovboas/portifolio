import { useTranslations } from 'next-intl';
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  const t = useTranslations('Home.Experiencias');
  const anoAtual: number = new Date().getFullYear();
  const anoFormado: number = 2010;
  const anosExperiencia = anoAtual - anoFormado;
  const result = `${anosExperiencia} ${String(t('anos'))}`;

  return (
    <Container>
      <SectionTitle title={result} description={String(t('sub-title'))} />

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
