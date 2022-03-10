import apolloClient from '../../apollo/apolloClient';
import { projetosQuery } from '../../apollo/queries/projetosQuery';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjectResponseCollection } from '../../graphql';
import { ProjetosContainer } from './styles';
import { IProjeto } from '../../types/IProjet';

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function ProjetosProjetos({ projetos }: ProjetoProps) {
  return (
    <ProjetosContainer>
      <Header />
      <main className="container">
        {projetos?.map(projeto => (
          <ProjetoItem
            key={projeto.id}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            imgUrl={projeto.thumbnail}
          />
        ))}
      </main>
      <Footer />
    </ProjetosContainer>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await apolloClient.query<ProjectResponseCollection>({
      query: projetosQuery
    });
    const projetos = data.projects.data[0].attributes.Project.map(projeto => ({
      id: projeto.id,
      slug: projeto.Title,
      title: projeto.Title,
      type: projeto.SubTitle,
      description: projeto.Content,
      thumbnail: `${process.env.NEXT_PUBLIC_STRAPI}${projeto.Banner.data.attributes.url}`
    }));

    return {
      props: { projetos }
    };
  } catch (err) {
    console.error('Error fetching data apolloClient projects', err);

    return {
      props: {}
    };
  }
}
