import { useTranslations } from 'next-intl';
import Link from 'next/link';
import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  const t = useTranslations('Header');
  return (
    <Container>
      <h1>
        <Link href="/">
          <a>Leandrovboas</a>
        </Link>
      </h1>
      <ul>
        <NavLink title={String(t('home'))} path="/" />
        <NavLink title={String(t('projetos'))} path="/projetos" includes />
        <NavLink title={String(t('blog'))} path="/blog" includes />
      </ul>
      <button type="button">
        <Link href="/contato">
          <a>{String(t('contato'))}</a>
        </Link>
      </button>
    </Container>
  );
}

export default Header;
