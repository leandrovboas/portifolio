import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

function HomeHero() {
  const t = useTranslations('Home.HomeHero');
  return (
    <Container data-aos="fade-up">
      <Image src="/leandro.png" alt="Minha Foto" />
      <div>
        <TextContainer>
          <h1>{String(t('title'))}</h1>
          <h2>{String(t('sub-title'))}</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">{String(t('comentario1'))}</span>
            <span className="purple">{String(t('infos'))}</span> {'\u007B'}
            <div>
              {String(t('_nome'))}
              <span className="blue">{String(t('primeiro'))}</span>
            </div>
            <div>
              {String(t('_sobrenome'))}
              <span className="blue">{String(t('sobrenome'))}</span>
            </div>
            <div>
              {String(t('_github'))}
              <span className="blue">{String(t('github'))}</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="comment">{String(t('comentario2'))}</span>
            <span className="purple">{String(t('cargo'))}</span> {'\u007B'}
            <div>
              {String(t('_funcao'))}
              <span className="blue">{String(t('funcao'))}</span>
            </div>
            <div>
              {String(t('_empresa'))}{' '}
              <span className="blue">{String(t('empresa'))}</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
