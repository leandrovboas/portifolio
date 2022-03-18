import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ProjtoItem from './ProjetoItem';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import { IProjeto } from '../../types/Projet';

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projetos({ projetos }: ProjetosProps) {
  const t = useTranslations('Home.Projetos');
  return (
    <Container>
      <SectionTitle title={String(t('title'))} />
      <section>
        {projetos?.slice(0, 3).map(projeto => (
          <ProjtoItem
            key={projeto.id}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>{String(t('botao'))}</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
