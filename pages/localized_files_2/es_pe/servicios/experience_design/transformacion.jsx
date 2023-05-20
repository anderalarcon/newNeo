import Hero from '../../../../../components/HeroEspecifics/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Team from '../../../../../components/Team/Team'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Content from '../../../../../components/ContentServices/Content'
import Head from 'next/head'
import WhySolutions from '../../../../../components/WhySolution/WhySolutions'
import ServicesPerks from '../../../../../components/ServicesPerks/ServicesPerks'
import WorkProcess from '../../../../../components/WorkProcess/WorkProcess'

import { dataTransformacion } from '../../../../../utilities/services/xd/hero'
import { whySolTransformacion } from '../../../../../utilities/services/xd/whySolutions'
import { perksTransformacion } from '../../../../../utilities/services/xd/perks'
import { workTransformacion } from '../../../../../utilities/services/xd/workProcess'

import { team } from '../../../../../utilities/services/xd/team'
import { xdCases } from '../../../../../utilities/services/xd/cases'
import { questionsxd } from '../../../../../utilities/services/xd/questions'
import { contentxd } from '../../../../../utilities/services/xd/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const transformacion = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
        <title>Transformación Digital</title>
        <meta
          name="description"
          content="Transforma tu organización con nuestra consultoría en definir, diseñar e implementar tu estrategia de transformación digital. Estamos contigo en cada paso del camino."
        />
        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/xd_home.png"
        />
        <meta
          property="og:title"
          content="Transformación Digital"
        />
        <meta
          property="og:description"
          content="Transforma tu organización con nuestra consultoría en definir, diseñar e implementar tu estrategia de transformación digital. Estamos contigo en cada paso del camino."
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataTransformacion} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolTransformacion} />
    <ServicesPerks data={perksTransformacion} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workTransformacion} />
    <Team team={team} chapter={'en experience_design'} />
    <SuccessCase cases={xdCases} />
    <Questions questions={questionsxd} />
    <Contact service={'experience-design'} solution='transformacion-digital' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentxd} />
    <Footer/>
  </>
  )
}

export default transformacion
