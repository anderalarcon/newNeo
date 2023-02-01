import Hero from '../../../../../components/HeroServices/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Team from '../../../../../components/Team/Team'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Vision from '../../../../../components/Vision/Vision'
import Content from '../../../../../components/ContentServices/Content'
import Head from 'next/head'

import { canalesSolutions } from '../../../../../utilities/services/canales/solutions'
import { questionsCanales } from '../../../../../utilities/services/canales/questions'
import { team } from '../../../../../utilities/services/canales/team'
import { dataHeroCanales } from '../../../../../utilities/services/canales/hero'
import { canalesCases } from '../../../../../utilities/services/canales/cases'
import { canalesVisions } from '../../../../../utilities/services/canales/visions'
import { contentcanales } from '../../../../../utilities/services/canales/content'

const canales = () => {
  return (
    <>
    <Head>
      <title>Consultoria Growth Hacking | NEO Consulting</title>
      <meta
        name="description"
        content="Consultoria de Growth Hacking por consultores expertos. En NEO por más de 19 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
      />
      <meta
      property="og:title"
      content="Consultoria Growth Hacking | NEO Consulting"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Consultoria de Growth Hacking por consultores expertos. En NEO por más de 19 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2021/06/duotone-1-1-683x1024.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header/>
    <Hero data={dataHeroCanales} />
    <Vision defaultVersion={true} visions={canalesVisions} desc='Nuestro diferencial viene de la consultoría y entendimiento del negocio.' />
    <SolutionsChapter solutions={canalesSolutions} />
    <Team team={team} chapter={'en Canales Digitales y Growth Hacking'} />
    <SuccessCase cases={canalesCases} />
    <Questions questions={questionsCanales} />
    <Contact service={'canales-digitales'} />
    <Content contents={contentcanales} />
    <Footer/>
  </>
  )
}

export default canales
