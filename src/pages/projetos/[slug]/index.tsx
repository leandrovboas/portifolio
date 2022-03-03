import BannerProjeto from '../../../components/BannerProjeto';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { ProjetoContainer } from './styles';

export default function projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto
        title="Projeto 01"
        type="Website"
        imgUrl="https://www.lambda3.com.br/wp-content/uploads//2016/07/PODCAST_POSTAGEMBLOG.jpg"
      />
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          convallis, nibh quis fermentum pellentesque, mi leo hendrerit mauris,
          sed eleifend diam felis nec risus. Donec ultricies nisi odio, ut
          finibus justo finibus ut. Nullam sed risus viverra, sagittis sapien
          nec, imperdiet lectus. Ut eu mi tempor lorem commodo placerat quis a
          ligula. Mauris vestibulum nibh sed quam venenatis, quis pulvinar justo
          efficitur. Suspendisse vel sem vel purus lobortis imperdiet. Integer
          efficitur rutrum gravida. Praesent vehicula dignissim commodo. Aenean
          iaculis pretium nulla sed semper. Nulla velit tortor, ultricies nec
          placerat eu, posuere in nisi. Fusce tristique, metus at tincidunt
          venenatis, quam ipsum lacinia quam, vitae bibendum dolor diam vitae
          diam. Nam a pellentesque massa. Sed finibus massa id libero faucibus
          rhoncus. Mauris blandit elementum sem, congue vulputate dolor blandit
          maximus. Duis eget pharetra tellus. Nulla sagittis molestie tellus.
          Maecenas eget fringilla orci. Donec euismod ornare est, eu congue urna
          viverra et. Vivamus euismod tellus condimentum, eleifend risus vel,
          pretium ligula. Donec lobortis porta scelerisque. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; In dictum magna eget ex tristique, vitae mollis nunc
          consectetur. Mauris interdum augue vel dui egestas accumsan.
        </p>
        <button type="button">
          <a href="/projetos">Ver projeto online</a>
        </button>
      </main>
      <Footer />
    </ProjetoContainer>
  );
}
