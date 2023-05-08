import Hero from '../../../../../components/HeroEspecifics/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Content from '../../../../../components/ContentServices/Content'
import WhySolutions from '../../../../../components/WhySolution/WhySolutions'
import ServicesPerks from '../../../../../components/ServicesPerks/ServicesPerks'
import WorkProcess from '../../../../../components/WorkProcess/WorkProcess'

import { whySolDesarrolloModelo } from '../../../../../utilities/services/ecommerce/whySolutions'
import { perksDesarrolloModelo } from '../../../../../utilities/services/ecommerce/perks'
import { workDesarrolloModelo } from '../../../../../utilities/services/ecommerce/workProcess'
import { dataDesarrolloModelo } from '../../../../../utilities/services/ecommerce/hero'
import { ecommerceCases } from '../../../../../utilities/services/ecommerce/cases'
import { questionsecommerce } from '../../../../../utilities/services/ecommerce/questions'
import { contentecommerce } from '../../../../../utilities/services/ecommerce/content'
import Head from 'next/head'
import { useUtm } from '../../../../../utilities/global/customhooks'

const desarrolloModelo = () => {
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
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/ecommerce_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataDesarrolloModelo} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolDesarrolloModelo} />
    <ServicesPerks data={perksDesarrolloModelo} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workDesarrolloModelo} />
    <SuccessCase cases={ecommerceCases} />
    <Questions questions={questionsecommerce} />
    <Contact service={'ecommerce'} solution={'desarrollo-de-modelo-ecommerce'} urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentecommerce} />
    <Footer/>
    </>
  )
}

export default desarrolloModelo
