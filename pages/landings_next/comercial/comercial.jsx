import Header from '../../../components/Header/Header'
import Hero from '../../../components/HeoLandingComercial/HeroServices'
import Footer from '../../../components/Footer/Footer'
import Services from '../../../components/ServiciosComercial/Services'
import Trust from '../../../components/Companies/Trust/Trust'
import Embedform from '../../../components/Embed-form-Comercial/Embedform'
import Vision from '../../../components/VisionComercial/Vision'
import ComercialScaleAnimation from '../../../components/ComercialScaleAnimation/ComercialScaleAnimation'
import Head from 'next/head'

import { dataHeroComercial } from '../../../utilities/landings_next/comercial/hero'
import { servicescomercial } from '../../../utilities/landings_next/comercial/services'
import { comercialVisions } from '../../../utilities/landings_next/comercial/visions'

const comercial = () => {
  return (
    <>
      <Head>
        <title>Consultoria en Marketing Digital | NEO Consulting Perú</title>
        <meta
          name="description"
          content="Consultoria en Marketing Digital y Estrategia Digital. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
        />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/meta_home.png"
        />

        <meta property="og:url" content="https://neoconsulting.ai/pe" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Consultoria en Marketing Digital | NEO Consulting"
        />
        <meta
          property="og:description"
          content="Consultoria en Marketing Digital y Estrategia Digital. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <Header />
      <Hero data={dataHeroComercial} />
      <Vision defaultVersion={true} visions={comercialVisions} desc='' />
      <ComercialScaleAnimation />
      <Services services={servicescomercial} />
      <Embedform />
      <Trust />
      <Footer />
    </>
  )
}

export default comercial
