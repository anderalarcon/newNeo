import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import Head from 'next/head'

import ContentTyDescargables from '../../../../components/ContentTyDescargables/ContentTyDescargables'
import { chapter1Descargable1 } from '../../../../utilities/landings_next/ContentTyDescargables/TyDescargables'

const tyAaia = () => {
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
      <ContentTyDescargables data={chapter1Descargable1} />
      <Footer />
    </>
  )
}

export default tyAaia
