import { useTranslations } from 'next-intl';
import SectionTitle from '../SectionTitle';

import { ContainerCertidicacoes } from './styles';

function Certificacoes() {
  const t = useTranslations('Home');
  return (
    <ContainerCertidicacoes>
      <SectionTitle title={String(t('certificacoes'))} />
    </ContainerCertidicacoes>
  );
}

export default Certificacoes;
