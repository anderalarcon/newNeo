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

import { dataHeroxd } from '../../../../../utilities/services/xd/hero'
import { xdVisions } from '../../../../../utilities/services/xd/visions'
import { xdSolutions } from '../../../../../utilities/services/xd/solutions'
import { team } from '../../../../../utilities/services/xd/team'
import { xdCases } from '../../../../../utilities/services/xd/cases'
import { questionsxd } from '../../../../../utilities/services/xd/questions'
import { contentxd } from '../../../../../utilities/services/xd/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const xd = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
        <title>Consultoría Diseño de experiencia y Transformación Digital | NEO Consulting</title>
        <meta
          name="description"
          content="Consultoria en Diseño de experiencia y Transformación Digital. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
        />
        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/xd_home.png"
        />
        <meta
          property="og:title"
          content="Consultoría Diseño de experiencia y Transformación Digital | NEO Consulting"
        />
        <meta
          property="og:description"
          content="Consultoria en Diseño de experiencia y Transformación Digital. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroxd} urlHasUtm={urlHasUtm} router={router} />
    <Vision defaultVersion={true} visions={xdVisions} desc='Nuestro diferencial viene de entender los objetivos de negocio y unirlo con las necesidades del usuario' />
    <SolutionsChapter solutions={xdSolutions} urlHasUtm={urlHasUtm} router={router} />
    <Team team={team} chapter={'en experience_design'} />
    <SuccessCase cases={xdCases} />
    <Questions questions={questionsxd} />
    <Contact service={'experience-design'} urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentxd} />
    <Footer/>
  </>
  )
}

export default xd
