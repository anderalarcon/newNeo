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

import { dataHeroecommerce } from '../../../../../utilities/services/ecommerce/hero'
import { ecommerceVisions } from '../../../../../utilities/services/ecommerce/visions'
import { ecommerceSolutions } from '../../../../../utilities/services/ecommerce/solutions'
import { team } from '../../../../../utilities/services/ecommerce/team'
import { ecommerceCases } from '../../../../../utilities/services/ecommerce/cases'
import { questionsecommerce } from '../../../../../utilities/services/ecommerce/questions'
import { contentecommerce } from '../../../../../utilities/services/ecommerce/content'
import Head from 'next/head'
import { useUtm } from '../../../../../utilities/global/customhooks'

const ecommerce = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Consultoría Ecommerce | Expertos Ecommerce | NEO Consulting</title>
      <meta
        name="description"
        content="Consultoría Ecommerce por consultores expertos. En NEO por más de 19 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
      />
      <meta
      property="og:title"
      content="Consultoría Ecommerce | Expertos Ecommerce | NEO Consulting"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Consultoría Ecommerce por consultores expertos. En NEO por más de 19 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2021/06/duotone-1-1-683x1024.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header/>
    <Hero data={dataHeroecommerce} urlHasUtm={urlHasUtm} router={router} />
    <Vision defaultVersion={true} visions={ecommerceVisions} desc='Ser socios que aporten visión estratégica y experiencia en la implementación de proyectos de crecimiento digital.' />
    <SolutionsChapter solutions={ecommerceSolutions} urlHasUtm={urlHasUtm} router={router} />
    <Team team={team} chapter={'en e-commerce'} />
    <SuccessCase cases={ecommerceCases} />
    <Questions questions={questionsecommerce} />
    <Contact service={'ecommerce'} urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentecommerce} />
    <Footer/>
  </>
  )
}

export default ecommerce
