import { useTranslations } from 'next-intl';
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';
import { getAnosDeExperiencia } from '../../utils/AnosDeExperiencia';

function Experiencias() {
  const t = useTranslations('Home.Experiencias');
  const anosExperiencia = getAnosDeExperiencia(2010);
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
