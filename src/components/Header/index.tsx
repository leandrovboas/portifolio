import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" />
        <NavLink title="Blog" path="/blog" />
      </ul>
    </Container>
  );
}

export default Header;
