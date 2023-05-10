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

import { whySolAcompanamientoEcommerce } from '../../../../../utilities/services/ecommerce/whySolutions'
import { perksAcompanamientoEcommerce } from '../../../../../utilities/services/ecommerce/perks'
import { workAcompanamientoEcommerce } from '../../../../../utilities/services/ecommerce/workProcess'
import { dataAcompanamientoEcommerce } from '../../../../../utilities/services/ecommerce/hero'
import { ecommerceCases } from '../../../../../utilities/services/ecommerce/cases'
import { questionsecommerce } from '../../../../../utilities/services/ecommerce/questions'
import { contentecommerce } from '../../../../../utilities/services/ecommerce/content'
import Head from 'next/head'
import { useUtm } from '../../../../../utilities/global/customhooks'

const acompanamientoEcommerce = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Acompañamiento E-commerce</title>
      <meta
        name="description"
        content="Asegura el éxito de tu E-commerce. Nuestros consultores expertos garantizan una estructura de data y medición confiable para cumplir tus metas."
      />
      <meta
      property="og:title"
      content="Acompañamiento E-commerce"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Asegura el éxito de tu E-commerce. Nuestros consultores expertos garantizan una estructura de data y medición confiable para cumplir tus metas."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/ecommerce_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataAcompanamientoEcommerce} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolAcompanamientoEcommerce} />
    <ServicesPerks data={perksAcompanamientoEcommerce} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workAcompanamientoEcommerce} />
    <SuccessCase cases={ecommerceCases} />
    <Questions questions={questionsecommerce} />
    <Contact service={'ecommerce'} solution={'acompanamiento-ecommerce'} urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentecommerce} />
    <Footer/>
    </>
  )
}

export default acompanamientoEcommerce
