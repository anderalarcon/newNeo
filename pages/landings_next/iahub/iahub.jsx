import Header from '../../../components/HeaderSimpleBgAzul/Header'
import HeroIAHub from '../../../components/HeroIAHub/HeroIAHub'
import Footer from '../../../components/FooterChico/Footer'
import Services from '../../../components/ServiciosIAHub/Services'
import WorkProcess from '../../../components/WorkProcessIAHub/WorkProcess'
import WorkProcess2 from '../../../components/WorkProcessIAHub2/WorkProcess'
import { workiahub } from '../../../utilities/landings_next/iahub/workiahub'
import { workiahub2 } from '../../../utilities/landings_next/iahub/workiahub2'
import Embedform from '../../../components/Embed-form-IAHUB/Embedform'
import Simple1 from '../../../components/AIHubSimple/Simpl1'

import Head from 'next/head'

// import { dataHeroAws } from '../../../utilities/landings_next/aws/hero'
import { servicesiahub } from '../../../utilities/landings_next/iahub/services'

const iahub = () => {
  return (
    <>
      <Head>
        <title>IA HUB: Ruta hacia la automatización con IA</title>
        {/* <meta
          name="description"
          content="Descubre cómo Amazon Web Services puede mejorar la eficiencia de tu empresa con servicios escalables de almacenamiento en la nube, análisis de datos y mucho más aquí."
        /> */}

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/09/open_iahub.png"
        />

        {/* <meta property="og:url" content="https://neoconsulting.ai/servicios-aws/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="IA HUB: Ruta hacia la automatización con IA"
        />
        <meta
          property="og:description"
          content="Descubre cómo Amazon Web Services puede mejorar la eficiencia de tu empresa con servicios escalables de almacenamiento en la nube, análisis de datos y mucho más aquí."
        /> */}
        <script defer src="/js/gtm.js"></script>
      </Head>
      <Header />
      <HeroIAHub />
      <Services services={servicesiahub} />
      <WorkProcess processes={workiahub} />
      <WorkProcess2 processes={workiahub2} />
      <Simple1 />
      <Embedform />
      <Footer />
    </>
  )
}

export default iahub
