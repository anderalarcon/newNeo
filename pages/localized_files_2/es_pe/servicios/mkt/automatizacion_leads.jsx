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

import { dataHeroAutomatizacionLeads } from '../../../../../utilities/services/mkt/hero'
import { whySolAutomatizacionLeads } from '../../../../../utilities/services/mkt/whySolutions'
import { perksAutomatizacionLeads } from '../../../../../utilities/services/mkt/perks'
import { workAutomatizacionLeads } from '../../../../../utilities/services/mkt/workProcess'

import { team } from '../../../../../utilities/services/mkt/team'
import { mktCases } from '../../../../../utilities/services/mkt/cases'
import { questionsMkt } from '../../../../../utilities/services/mkt/questions'
import { contentmkt } from '../../../../../utilities/services/mkt/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const automatizacionLeads = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>
        Automatización de leads para Remarketing | Campañas de publicidad digital | Neo Consulting
      </title>
      <meta
        name="keywords"
        content="Servicio de publicidad digital, Auditoría de publicidad, Pauta publicitaria, Servicio de campañas digitales, Optimización de publicidad digital, Campañas de publicidad digital, Servicio Data Driven"
      />
      <meta
        name="description"
        content="Integra tu CRM con Facebook para un seguimiento oportuno de clientes generados a través de campañas digitales y logra una mayor tasa de conversión."
      />
      <meta
      property="og:title"
      content="Automatización de leads para Remarketing | Campañas de publicidad digital | Neo Consulting"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Integra tu CRM con Facebook para un seguimiento oportuno de clientes generados a través de campañas digitales y logra una mayor tasa de conversión."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/marketing_automation_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroAutomatizacionLeads} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolAutomatizacionLeads} />
    <ServicesPerks data={perksAutomatizacionLeads} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workAutomatizacionLeads} />
    <SuccessCase cases={mktCases} />
    <Team team={team} chapter={'en Marketing Automation'} startAt = {1} />
    <Questions questions={questionsMkt} />
    <Contact service={'mkt-automation'} solution='automatizacion-de-leads-para-remarketing' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentmkt} />
    <Footer/>
  </>
  )
}

export default automatizacionLeads
