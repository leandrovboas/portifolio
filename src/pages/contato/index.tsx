import Head from 'next/head';
import { ContatoContainer } from './styles';
import FormContato from '../../components/FormContato';

export default function Projetos() {
  return (
    <ContatoContainer>
      <Head>
        <title>Contato | Leandrovboas</title>
        <meta
          name="description"
          content="Sou um desenvolvedor de software em diversas linguagens"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor de software em diversas linguagens"
        />
      </Head>
      <main className="container">
        <FormContato />
      </main>
    </ContatoContainer>
  );
}
