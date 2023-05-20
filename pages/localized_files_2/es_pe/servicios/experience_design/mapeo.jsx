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

import { dataMapeo } from '../../../../../utilities/services/xd/hero'
import { whySolMapeo } from '../../../../../utilities/services/xd/whySolutions'
import { perksMapeo } from '../../../../../utilities/services/xd/perks'
import { workMapeo } from '../../../../../utilities/services/xd/workProcess'

import { team } from '../../../../../utilities/services/xd/team'
import { xdCases } from '../../../../../utilities/services/xd/cases'
import { questionsxd } from '../../../../../utilities/services/xd/questions'
import { contentxd } from '../../../../../utilities/services/xd/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const mapeo = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
        <title>Mapeo de experiencias</title>
        <meta
          name="description"
          content="Crea una experiencia del consumidor memorable. Entendemos y diseñamos el Journey del consumidor para atacar todos los puntos de contacto con este."
        />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/xd_home.png"
        />
        <meta
          property="og:title"
          content="Mapeo de experiencias"
        />
        <meta
          property="og:description"
          content="Crea una experiencia del consumidor memorable. Entendemos y diseñamos el Journey del consumidor para atacar todos los puntos de contacto con este."
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataMapeo} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolMapeo} />
    <ServicesPerks data={perksMapeo} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workMapeo} />
    <Team team={team} chapter={'en experience_design'} />
    <SuccessCase cases={xdCases} />
    <Questions questions={questionsxd} />
    <Contact service={'experience-design'} solution='mapeo-de-experiencias' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentxd} />
    <Footer/>
  </>
  )
}

export default mapeo
