import { useTranslations } from 'next-intl';
import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';
import { getAnosDeExperiencia } from '../../utils/anosDeExperiencia';

function Experiencias() {
  const t = useTranslations('Home.Experiencias');
  const anosExperiencia = getAnosDeExperiencia(2010, new Date().getFullYear());
  const result = `${anosExperiencia} ${String(t('anos'))}`;

  return (
    <Container>
      <SectionTitle title={result} description={String(t('sub-title'))} />

      <section>
        <ExperienciaItem
          year="atual"
          title="Dev Full Stack"
          description="Desenvolvimento full stack (C#, Nodejs,
          Angular, React, Javascript, Typescript, HTML5, docker, Azure, entre outras e muito teste)"
        />
        <ExperienciaItem
          year="2018"
          title="Dev Stack Microsoft"
          description="WebAPI com .NET CORE e Angular"
        />
        <ExperienciaItem
          year="2015"
          title="Dev Stack Microsoft"
          description="WebServices, WCF e framework .net 4.5"
        />
        <ExperienciaItem
          year="2011"
          title="Dev Stack Microsoft"
          description="ASP.NET"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
