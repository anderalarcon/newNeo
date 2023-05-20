import Hero from '../../../../../components/HeroServices/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Team from '../../../../../components/Team/Team'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import Possible from '../../../../../components/Possible/Possible'
import Trust from '../../../../../components/Companies/Trust/TrustServices'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Vision from '../../../../../components/Vision/Vision'
import Content from '../../../../../components/ContentServices/Content'
import Head from 'next/head'

import { dataHerodts } from '../../../../../utilities/services/dts/hero'
import { dtsVisions } from '../../../../../utilities/services/dts/visions'
import { dtsSolutions } from '../../../../../utilities/services/dts/solutions'
import { team } from '../../../../../utilities/services/dts/team'
import { dtsCases } from '../../../../../utilities/services/dts/cases'
import { questionsdts } from '../../../../../utilities/services/dts/questions'
import { contentdts } from '../../../../../utilities/services/dts/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const dts = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
        <title>Consultoria en Headhunting y Mentoring | NEO Consulting</title>
        <meta
          name="description"
          content="Consultoria en Headhunting y Mentoring. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
        />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/dts_home.png"
        />

        <meta
          property="og:title"
          content="Consultoria en Headhunting y Mentoring | NEO Consulting"
        />
        <meta
          property="og:description"
          content="Consultoria en Headhunting y Mentoring. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHerodts} urlHasUtm={urlHasUtm} router={router} />
    <Vision defaultVersion={true} visions={dtsVisions} desc='Nuestro diferencial viene de la consultoría y entendimiento del negocio.' />
    <SolutionsChapter solutions={dtsSolutions} urlHasUtm={urlHasUtm} router={router} />
    <Trust />
    <Possible />
    <Team team={team} chapter={'en Headhunting y Mentoring'} />
    <SuccessCase cases={dtsCases} />
    <Questions questions={questionsdts} />
    <Contact service={'digital-talent-solution'} urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentdts} />
    <Footer/>
  </>
  )
}

export default dts
