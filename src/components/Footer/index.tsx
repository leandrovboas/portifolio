import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMedium,
  AiOutlineInstagram
} from 'react-icons/ai';
import { Button, Container, Icon, Label, Link, Teste } from './styles';

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
    <>
      {/* <Teste>
        <Link href="#">
          <Icon viewBox="0 0 20 20">
            <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
          </Icon>
          <p>Hovering my parent changes my style!</p>
        </Link>
      </Teste> */}
      <Button>
        <Container>
          <div className="container">
            <button type="button" onClick={handleScrollTop}>
              Voltar ao topo
            </button>
            <section>
              <AiOutlineTwitter
                onClick={() => handleRedirect(process.env.NEXT_PUBLIC_TWITTER)}
              />
              <AiOutlineInstagram
                onClick={() => handleRedirect(process.env.NEXT_PUBLIC_INSTAGRM)}
              />
              <AiOutlineGithub
                onClick={() => handleRedirect(process.env.NEXT_PUBLIC_GITHUB)}
              />
              <AiFillLinkedin
                onClick={() => handleRedirect(process.env.NEXT_PUBLIC_LINKEDIN)}
              />
              <AiOutlineMedium
                onClick={() => handleRedirect(process.env.NEXT_PUBLIC_MEDIUM)}
              />
            </section>
          </div>
        </Container>
      </Button>
    </>
  );
}

export default Footer;
