import apolloClient from '../../apollo/apolloClient';
import { projetosQuery } from '../../apollo/queries/projetosQuery';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from './styles';
import { IProjeto, IProjectResponseCollection } from '../../types/Projet';

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
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
    const { data } = await apolloClient.query<IProjectResponseCollection>({
      query: projetosQuery
    });
    const projetos = data.projects.data.map(projeto => ({
      id: projeto.attributes.Project.id,
      slug: projeto.attributes.slug,
      title: projeto.attributes.Project.Title,
      type: projeto.attributes.Project.SubTitle,
      description: projeto.attributes.Project.Content,
      thumbnail: `${process.env.NEXT_PUBLIC_STRAPI}${projeto.attributes.Project.Banner.data.attributes.url}`
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
