
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

import { dataHeroIntegracionDatos } from '../../../../../utilities/services/aaia/hero'
import { whySolIntegracionDatos } from '../../../../../utilities/services/aaia/whySolutions'
import { perksIntegracionDatos } from '../../../../../utilities/services/aaia/perks'
import { workIntegracionDatos } from '../../../../../utilities/services/aaia/workProcess'

import { team } from '../../../../../utilities/services/aaia/team'
import { aaiaCases } from '../../../../../utilities/services/aaia/cases'
import { questionsaaia } from '../../../../../utilities/services/aaia/questions'
import { contentaaia } from '../../../../../utilities/services/aaia/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const integracionDatos = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Integración de Fuentes de Datos | Expertos en IA | NEO</title>
      <meta
        name="description"
        content="Agiliza y facilita el análisis de tus datos. Desarrollamos mediante la unificación de datos en un solo repositorio."
      />
      <meta
      property="og:title"
      content="Integración de Fuentes de Datos | Expertos en IA | NEO"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Agiliza y facilita el análisis de tus datos. Desarrollamos mediante la unificación de datos en un solo repositorio."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/aaia_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroIntegracionDatos} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolIntegracionDatos} />
    <ServicesPerks data={perksIntegracionDatos} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workIntegracionDatos} />
    <SuccessCase cases={aaiaCases} />
    <Team team={team} chapter={'en Analítica e inteligencia artificial'} startAt = {1} />
    <Questions questions={questionsaaia} />
    <Contact service={'aaia'} solution='integracion-fuente-de-datos' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentaaia} />
    <Footer/>
  </>
  )
}

export default integracionDatos
