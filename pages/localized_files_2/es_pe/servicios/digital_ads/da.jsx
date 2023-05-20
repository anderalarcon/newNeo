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

import { dataHeroda } from '../../../../../utilities/services/da/hero'
import { daVisions } from '../../../../../utilities/services/da/visions'
import { daSolutions } from '../../../../../utilities/services/da/solutions'
import { team } from '../../../../../utilities/services/da/team'
import { daCases } from '../../../../../utilities/services/da/cases'
import { questionsda } from '../../../../../utilities/services/da/questions'
import { contentda } from '../../../../../utilities/services/da/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const da = () => {
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
      content="Servicio de publicidad digital | Data Driven | Campañas de publicidad digital | Neo Consulting"
      />
      <meta
        property="og:description"
        content="Optimiza tu inversión en publicidad digital con nuestro servicio de Digital Advertising. Atrae a tus clientes gracias a soluciones estratégicas con consultores certificados."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/digital_ads_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroda} urlHasUtm={urlHasUtm} router={router} />
    <Vision defaultVersion={true} visions={daVisions} desc='Nuestro diferencial viene de entender los objetivos de negocio capitalizando la Data' />
    <SolutionsChapter solutions={daSolutions} urlHasUtm={urlHasUtm} router={router} />
    <Team team={team} chapter={'en e-commerce'} />
    <SuccessCase cases={daCases} />
    <Questions questions={questionsda} />
    <Contact service={'digital-ads'} urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentda} />
    <Footer/>
  </>
  )
}

export default da
