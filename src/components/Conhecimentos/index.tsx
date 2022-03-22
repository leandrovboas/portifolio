import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoJavascript, IoLogoNodejs, IoLogoPython } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiCsharp, SiNestjs, SiNextdotjs } from 'react-icons/si';
import { useTranslations } from 'next-intl';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ConhecimentoItem from './ConhecimentoItem';

function Conhecimentos() {
  const t = useTranslations('Home');
  return (
    <Container>
      <SectionTitle title={String(t('conhecimentos'))} />
      <section>
        <ConhecimentoItem title="CSharp" icon={<SiCsharp />} />
        <ConhecimentoItem title="Nodejs" icon={<IoLogoNodejs />} />
        <ConhecimentoItem title="Nextjs" icon={<SiNextdotjs />} />
        <ConhecimentoItem title="NestJs" icon={<SiNestjs />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="JavaScript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="Python" icon={<IoLogoPython />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
