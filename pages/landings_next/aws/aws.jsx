import Header from '../../../components/Header/Header'
import Hero from '../../../components/HeoLandingsSeparate/HeroServices'
import Footer from '../../../components/Footer/Footer'
import Services from '../../../components/Servicios/Services'
import Trust from '../../../components/Companies/Trust/Trust'
import Embedform from '../../../components/Embed-form/Embedform'
import Head from 'next/head'

import { dataHeroAws } from '../../../utilities/landings_next/aws/hero'
import { servicesAws } from '../../../utilities/landings_next/aws/services'

const aws = () => {
  return (
    <>
      <Head>
        <title>Conoce nuestros servicios de Amazon Web Services</title>
        <meta
          name="description"
          content="Descubre cómo Amazon Web Services puede mejorar la eficiencia de tu empresa con servicios escalables de almacenamiento en la nube, análisis de datos y mucho más aquí."
        />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/03/aws_open.png"
        />

        <meta property="og:url" content="https://neoconsulting.ai/servicios-aws/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Conoce nuestros servicios de Amazon Web Services"
        />
        <meta
          property="og:description"
          content="Descubre cómo Amazon Web Services puede mejorar la eficiencia de tu empresa con servicios escalables de almacenamiento en la nube, análisis de datos y mucho más aquí."
        />
        <script defer src="/js/gtm.js"></script>
      </Head>
      <Header />
      <Hero data={dataHeroAws} />
      <Services services={servicesAws} />
      <Trust />
      <Embedform />
      <Footer />
    </>
  )
}

export default aws
