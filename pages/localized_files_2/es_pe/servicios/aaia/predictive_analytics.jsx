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

import { dataHeroPredictiveAnalytics } from '../../../../../utilities/services/aaia/hero'
import { whySolPredictiveAnalytics } from '../../../../../utilities/services/aaia/whySolutions'
import { perksPredictiveAnalytics } from '../../../../../utilities/services/aaia/perks'
import { workPredictiveAnalytics } from '../../../../../utilities/services/aaia/workProcess'

import { team } from '../../../../../utilities/services/aaia/team'
import { aaiaCases } from '../../../../../utilities/services/aaia/cases'
import { questionsaaia } from '../../../../../utilities/services/aaia/questions'
import { contentaaia } from '../../../../../utilities/services/aaia/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const predictiveAnalytics = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Consultoría Inteligencia Artificial | Expertos en IA | NEO</title>
      <meta
        name="description"
        content="Consultoría de Inteligencia Artificial por consultores expertos. En NEO por más de 19 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
      />
      <meta
      property="og:title"
      content="Consultoría Inteligencia Artificial | Expertos en IA | NEO"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Consultoría de Inteligencia Artificial por consultores expertos. En NEO por más de 19 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital"
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2021/06/duotone-1-1-683x1024.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroPredictiveAnalytics} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolPredictiveAnalytics} />
    <ServicesPerks data={perksPredictiveAnalytics} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workPredictiveAnalytics} />
    <SuccessCase cases={aaiaCases} />
    <Team team={team} chapter={'en Analítica e inteligencia artificial'} startAt = {1} />
    <Questions questions={questionsaaia} />
    <Contact service={'aaia'} solution='predictive-customer-analytics' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentaaia} />
    <Footer/>
  </>
  )
}

export default predictiveAnalytics
