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

import { dataHeroPlaningContenido } from '../../../../../utilities/services/mkt/hero'
import { whySolPlaningContenido } from '../../../../../utilities/services/mkt/whySolutions'
import { perksPlaningContenido } from '../../../../../utilities/services/mkt/perks'
import { workPlaningContenido } from '../../../../../utilities/services/mkt/workProcess'

import { team } from '../../../../../utilities/services/mkt/team'
import { mktCases } from '../../../../../utilities/services/mkt/cases'
import { questionsMkt } from '../../../../../utilities/services/mkt/questions'
import { contentmkt } from '../../../../../utilities/services/mkt/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const planingContenido = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>
        Planning de Contenido ágil | Campañas de publicidad digital | Neo Consulting
      </title>
      <meta
        name="keywords"
        content="Servicio de publicidad digital, Auditoría de publicidad, Pauta publicitaria, Servicio de campañas digitales, Optimización de publicidad digital, Campañas de publicidad digital, Servicio Data Driven"
      />
      <meta
        name="description"
        content="Visualiza los datos relevantes de redes sociales para tomar decisiones más efectivas en tu negocio."
      />
      <meta
      property="og:title"
      content="Planning de Contenido ágil | Campañas de publicidad digital | Neo Consulting"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Visualiza los datos relevantes de redes sociales para tomar decisiones más efectivas en tu negocio."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/marketing_automation_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroPlaningContenido} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolPlaningContenido} />
    <ServicesPerks data={perksPlaningContenido} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workPlaningContenido} />
    <SuccessCase cases={mktCases} />
    <Team team={team} chapter={'en Marketing Automation'} startAt = {1} />
    <Questions questions={questionsMkt} />
    <Contact service={'mkt-automation'} solution='planning-de-contenido-agil' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentmkt} />
    <Footer/>
  </>
  )
}

export default planingContenido
