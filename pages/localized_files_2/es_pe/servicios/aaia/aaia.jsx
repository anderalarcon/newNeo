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

import { dataHeroaaia } from '../../../../../utilities/services/aaia/hero'
import { aaiaSolutions2 } from '../../../../../utilities/services/aaia/solutions'
import { team } from '../../../../../utilities/services/aaia/team'
import { aaiaCases } from '../../../../../utilities/services/aaia/cases'
import { questionsaaia } from '../../../../../utilities/services/aaia/questions'
import { aaiaVisions } from '../../../../../utilities/services/aaia/visions'
import { contentaaia } from '../../../../../utilities/services/aaia/content'

const aaia = () => {
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
    <Header/>
    <Hero data={dataHeroaaia} />
    <Vision visions={aaiaVisions} desc='Nuestro diferencial viene de la consultoría y entendimiento del negocio.'/>
    <SolutionsChapter solutions={aaiaSolutions2} filter={true} />
    <Team team={team} chapter={'en Analítica e inteligencia artificial'} startAt = {1} />
    <SuccessCase cases={aaiaCases} />
    <Questions questions={questionsaaia} />
    <Contact service={'aaia'} />
    <Content contents={contentaaia} />
    <Footer/>
  </>
  )
}

export default aaia
