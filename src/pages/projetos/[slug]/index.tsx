import apolloClient from '../../../apollo/apolloClient';
import { projetoItemQuery } from '../../../apollo/queries/projtoItemQuery';
import BannerProjeto from '../../../components/BannerProjeto';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { IProjectResponse, IProjeto } from '../../../types/Projet';
import { ProjetoContainer } from './styles';

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projetos({ projeto }: ProjetoProps) {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />
      <main>
        <p>{projeto.description}</p>
        <button type="button">
          <a href="/projetos">Ver projeto online</a>
        </button>
      </main>
      <Footer />
    </ProjetoContainer>
  );
}

export async function getServerSideProps(context) {
  try {
    const { data } = await apolloClient.query<IProjectResponse>({
      query: projetoItemQuery,
      variables: {
        slug: context.query.slug
      }
    });

    const projeto: IProjeto = {
      id: data.projects.data[0].attributes.Project.id,
      slug: data.projects.data[0].attributes.slug,
      title: data.projects.data[0].attributes.Project.Title,
      type: data.projects.data[0].attributes.Project.SubTitle,
      description: data.projects.data[0].attributes.Project.Content,
      thumbnail: `${process.env.NEXT_PUBLIC_STRAPI}${data.projects.data[0].attributes.Project.Banner.data.attributes.url}`
    };

    return {
      props: { projeto }
    };
  } catch (err) {
    console.error('Error fetching project', err);

    return {
      props: {}
    };
  }
}
