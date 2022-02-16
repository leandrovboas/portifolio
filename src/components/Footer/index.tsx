import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMedium
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('http://twitter.com')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('http://twitter.com')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('http://twitter.com')}
          />
          <AiOutlineMedium
            onClick={() => handleRedirect('http://twitter.com')}
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
