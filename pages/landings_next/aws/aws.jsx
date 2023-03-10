import Header from '../../../components/Header/Header'
import Hero from '../../../components/HeroAws/HeroServices'
import Footer from '../../../components/Footer/Footer'
import Head from 'next/head'
import Services from '../../../components/Servicios/Services'
import Trust from '../../../components/Companies/Trust/Trust'

import { dataHeroAws } from '../../../utilities/landings_next/aws/hero'
import { servicesAws } from '../../../utilities/landings_next/aws/services'

const aws = () => {
  return (
    <>
      <Head>
        <title>Consultoria en Marketing Digital | NEO Consulting</title>
        <meta
          name="description"
          content="Descubre cómo Amazon Web Services puede mejorar la eficiencia de tu empresa con servicios escalables de almacenamiento en la nube, análisis de datos y mucho más aquí."
        />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2022/05/0.png"
        />

        <meta property="og:url" content="https://neoconsulting.ai/pe" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Consultoria en Marketing Digital | NEO Consulting"
        />
        <meta
          property="og:description"
          content="Descubre cómo Amazon Web Services puede mejorar la eficiencia de tu empresa con servicios escalables de almacenamiento en la nube, análisis de datos y mucho más aquí."
        />
        <script defer src="/js/gtm.js"></script>
        <script defer src="/js/hotjar.js"></script>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <Header />
      <Hero data={dataHeroAws} />
      <Services services={servicesAws} />
      <Trust />
      <Footer />
    </>
  )
}

export default aws
