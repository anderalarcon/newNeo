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

import { dataHeroPersonalizacionEcommerce } from '../../../../../utilities/services/mkt/hero'
import { whySolPersonalizacionEcommerce } from '../../../../../utilities/services/mkt/whySolutions'
import { perksPersonalizacionEcommerce } from '../../../../../utilities/services/mkt/perks'
import { workPersonalizacionEcommerce } from '../../../../../utilities/services/mkt/workProcess'

import { team } from '../../../../../utilities/services/mkt/team'
import { mktCases } from '../../../../../utilities/services/mkt/cases'
import { questionsMkt } from '../../../../../utilities/services/mkt/questions'
import { contentmkt } from '../../../../../utilities/services/mkt/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const personalizacionEcommerce = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>
        Personalización para E-Commerce | Campañas de publicidad digital | Neo Consulting
      </title>
      <meta
        name="keywords"
        content="Servicio de publicidad digital, Auditoría de publicidad, Pauta publicitaria, Servicio de campañas digitales, Optimización de publicidad digital, Campañas de publicidad digital, Servicio Data Driven"
      />
      <meta
        name="description"
        content="Incrementa la tasa de conversión del funnel del activo mediante la aplicación de personalizaciones a segmentos de usuarios diferenciados."
      />
      <meta
      property="og:title"
      content="Personalización para E-Commerce | Campañas de publicidad digital | Neo Consulting"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Incrementa la tasa de conversión del funnel del activo mediante la aplicación de personalizaciones a segmentos de usuarios diferenciados."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/marketing_automation_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroPersonalizacionEcommerce} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolPersonalizacionEcommerce} />
    <ServicesPerks data={perksPersonalizacionEcommerce} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workPersonalizacionEcommerce} />
    <SuccessCase cases={mktCases} />
    <Team team={team} chapter={'en Marketing Automation'} startAt = {1} />
    <Questions questions={questionsMkt} />
    <Contact service={'mkt-automation'} solution='personalizacion-ecommerce' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentmkt} />
    <Footer/>
  </>
  )
}

export default personalizacionEcommerce
