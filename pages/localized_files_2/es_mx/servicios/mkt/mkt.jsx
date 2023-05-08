import Hero from '../../../../../components/HeroServices/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Team from '../../../../../components/Team/Team'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Vision from '../../../../../components/Vision/Vision'
import Content from '../../../../../components/ContentServices/Content'
import Head from 'next/head'

import { dataHeromkt } from '../../../../../utilities/services/mkt/hero'
import { mktSolutions } from '../../../../../utilities/services/mkt/solutions'
import { team } from '../../../../../utilities/services/mkt/team'
import { mktCases } from '../../../../../utilities/services/mkt/cases'
import { mktVisions } from '../../../../../utilities/services/mkt/visions'
import { questionsMkt } from '../../../../../utilities/services/mkt/questions'
import { contentmkt } from '../../../../../utilities/services/mkt/content'
import { useUtm } from '../../../../../utilities/global/customhooks'
const mkt = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>
        Servicio de publicidad digital | Data Driven | Campañas de publicidad digital | Neo Consulting
      </title>
      <meta
        name="keywords"
        content="Servicio de publicidad digital, Auditoría de publicidad, Pauta publicitaria, Servicio de campañas digitales, Optimización de publicidad digital, Campañas de publicidad digital, Servicio Data Driven"
      />
      <meta
        name="description"
        content="Optimiza tu inversión en publicidad digital con nuestro servicio de Digital Advertising. Atrae a tus clientes gracias a soluciones estratégicas con consultores certificados."
      />
      <meta
      property="og:title"
      content="Servicio de publicidad digital | Data Driven | Campañas de publicidad digital | Neo Consulting"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Optimiza tu inversión en publicidad digital con nuestro servicio de Digital Advertising. Atrae a tus clientes gracias a soluciones estratégicas con consultores certificados."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/marketing_automation_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeromkt} urlHasUtm={urlHasUtm} router={router} />
    <Vision visions={mktVisions} desc={'Nuestro diferencial viene de entender los objetivos de negocio capitalizando la Data'}/>
    <SolutionsChapter solutions={mktSolutions} urlHasUtm={urlHasUtm} router={router} />
    <Team team={team} chapter={'en Marketing Automation'} startAt = {1} />
    <SuccessCase cases={mktCases} />
    <Questions questions={questionsMkt} />
    <Contact service={'mkt-automation'} urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentmkt} />
    <Footer/>
  </>
  )
}

export default mkt
