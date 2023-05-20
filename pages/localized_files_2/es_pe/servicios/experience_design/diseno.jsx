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

import { dataDiseno } from '../../../../../utilities/services/xd/hero'
import { whySolDiseno } from '../../../../../utilities/services/xd/whySolutions'
import { perksDiseno } from '../../../../../utilities/services/xd/perks'
import { workDiseno } from '../../../../../utilities/services/xd/workProcess'

import { team } from '../../../../../utilities/services/xd/team'
import { xdCases } from '../../../../../utilities/services/xd/cases'
import { questionsxd } from '../../../../../utilities/services/xd/questions'
import { contentxd } from '../../../../../utilities/services/xd/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const diseno = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
        <title>Diseño de experiencias</title>
        <meta
          name="description"
          content="Diseña una experiencia inolvidable para tus clientes. Creamos experiencias memorables dentro de todos los activos digitales de tu empresa."
        />
        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/xd_home.png"
        />
        <meta
          property="og:title"
          content="Diseño de experiencias"
        />
        <meta
          property="og:description"
          content="Diseña una experiencia inolvidable para tus clientes. Creamos experiencias memorables dentro de todos los activos digitales de tu empresa."
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataDiseno} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolDiseno} />
    <ServicesPerks data={perksDiseno} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workDiseno} />
    <Team team={team} chapter={'en experience_design'} />
    <SuccessCase cases={xdCases} />
    <Questions questions={questionsxd} />
    <Contact service={'experience-design'} solution='diseño-de-experiencias' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentxd} />
    <Footer/>
  </>
  )
}

export default diseno
