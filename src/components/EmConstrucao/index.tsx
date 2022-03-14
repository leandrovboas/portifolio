import { Container, Loading, Percent, Progress } from './styles';

function EmConstrucao() {
  return (
    <Container>
      <Loading>
        <span>Loading</span>
        <Percent>
          <Progress />
        </Percent>
      </Loading>
    </Container>
  );
}

export default EmConstrucao;
