import { useTranslations } from 'next-intl';
import { Container } from './styles';
import Form from './Form';

function FormContato() {
  const t = useTranslations('Contato');
  return (
    <Container>
      <h1># {String(t('title'))}</h1>
      <h2>
        {' '}
        <>
          {String(t('sub-title1'))}
          <br />
          {String(t('sub-title2'))}
        </>
      </h2>
      <Form />
    </Container>
  );
}

export default FormContato;
