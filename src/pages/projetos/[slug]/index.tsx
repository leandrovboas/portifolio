import Head from 'next/head';
import md from 'markdown-it';
import BannerProjeto from '../../../components/BannerProjeto';
import { IProjeto } from '../../../types/Projet';
import { ProjetoContainer } from './styles';
import { ProjetosService } from '../../../services/ProjetosService';

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projetos({ projeto }: ProjetoProps) {
  return (
    <ProjetoContainer>
      <Head>
        <title>{projeto.title} | Leandrovboas</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />
      <main>
        <div
          dangerouslySetInnerHTML={{ __html: md().render(projeto.description) }}
        />
        <button type="button">
          <a href="/projetos">Ver todos projeto</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

export async function getServerSideProps(context) {
  const projeto = await ProjetosService.find(context.query.slug);
  return {
    props: { projeto }
  };
}
