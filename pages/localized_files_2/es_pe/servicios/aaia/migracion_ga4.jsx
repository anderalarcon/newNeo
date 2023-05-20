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

import { dataHeroMigracionGa4 } from '../../../../../utilities/services/aaia/hero'
import { whySolMigracionGa4 } from '../../../../../utilities/services/aaia/whySolutions'
import { perksMigracionGa4 } from '../../../../../utilities/services/aaia/perks'
import { workMigracionGa4 } from '../../../../../utilities/services/aaia/workProcess'

import { team } from '../../../../../utilities/services/aaia/team'
import { aaiaCases } from '../../../../../utilities/services/aaia/cases'
import { questionsaaia } from '../../../../../utilities/services/aaia/questions'
import { contentaaia } from '../../../../../utilities/services/aaia/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const migracionGa4 = () => {
  const [urlHasUtm, router] = useUtm()

  return (
    <>
    <Head>
      <title>Implementación y/o migración a Google Analytics 4 | Expertos en IA | NEO</title>
      <meta
        name="description"
        content="Optimiza la medición de tus activos digitales. Implementamos y configuramos la medición mejorada con Google Analytics 4."
      />
      <meta
      property="og:title"
      content="Implementación y/o migración a Google Analytics 4 | Expertos en IA | NEO"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Optimiza la medición de tus activos digitales. Implementamos y configuramos la medición mejorada con Google Analytics 4."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/aaia_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroMigracionGa4} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolMigracionGa4} />
    <ServicesPerks data={perksMigracionGa4} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workMigracionGa4} />
    <SuccessCase cases={aaiaCases} />
    <Team team={team} chapter={'en Analítica e inteligencia artificial'} startAt = {1} />
    <Questions questions={questionsaaia} />
    <Contact service={'aaia'} solution='implementacion-o-migracion-a-ga4' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentaaia} />
    <Footer/>
  </>
  )
}

export default migracionGa4
