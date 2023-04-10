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

import { dataHeroInhousing } from '../../../../../utilities/services/da/hero'
import { whySolInhousing } from '../../../../../utilities/services/da/whySolutions'
import { perksInhousing } from '../../../../../utilities/services/da/perks'
import { workInhousing } from '../../../../../utilities/services/da/workProcess'

import { team } from '../../../../../utilities/services/da/team'
import { daCases } from '../../../../../utilities/services/da/cases'
import { questionsda } from '../../../../../utilities/services/da/questions'
import { contentda } from '../../../../../utilities/services/da/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const inhousing = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Servicio de publicidad digital | Data Driven | Campañas de publicidad digital | Neo Consulting</title>
      <meta name="keywords" content="Servicio de publicidad digital, Auditoría de publicidad, Pauta publicitaria, Servicio de campañas digitales, Optimización de publicidad digital, Campañas de publicidad digital, Servicio Data Driven"/>
      <meta
        name="description"
        content="Optimiza tu inversión en publicidad digital con nuestro servicio de Digital Advertising. Atrae a tus clientes gracias a soluciones estratégicas con consultores certificados."
      />
      <meta
      property="og:title"
      content="Servicios de Publicidad Digital | Neo Consulting"
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
    <Hero data={dataHeroInhousing} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolInhousing} />
    <ServicesPerks data={perksInhousing} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workInhousing} />
    <SuccessCase cases={daCases} />
    <Team team={team} chapter={'en e-commerce'} />
    <Questions questions={questionsda} />
    <Contact service={'digital-ads'} solution='inhousing' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentda} />
    <Footer/>
  </>
  )
}

export default inhousing
