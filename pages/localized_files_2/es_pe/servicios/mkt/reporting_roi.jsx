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

import { dataHeroReportingRoi } from '../../../../../utilities/services/mkt/hero'
import { whySolReportingRoi } from '../../../../../utilities/services/mkt/whySolutions'
import { perksReportingRoi } from '../../../../../utilities/services/mkt/perks'
import { workReportingRoi } from '../../../../../utilities/services/mkt/workProcess'

import { team } from '../../../../../utilities/services/mkt/team'
import { mktCases } from '../../../../../utilities/services/mkt/cases'
import { questionsMkt } from '../../../../../utilities/services/mkt/questions'
import { contentmkt } from '../../../../../utilities/services/mkt/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const reportingRoi = () => {
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
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2022/08/image-56.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header/>
    <Hero data={dataHeroReportingRoi} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolReportingRoi} />
    <ServicesPerks data={perksReportingRoi} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workReportingRoi} />
    <SuccessCase cases={mktCases} />
    <Team team={team} chapter={'en Marketing Automation'} startAt = {1} />
    <Questions questions={questionsMkt} />
    <Contact service={'mkt-automation'} solution='reporting-roi-automatizado' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentmkt} />
    <Footer/>
  </>
  )
}

export default reportingRoi
