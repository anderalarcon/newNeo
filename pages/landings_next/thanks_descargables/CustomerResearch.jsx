import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Head from 'next/head'

import ContentTyDescargables from '../../../components/ContentTyDescargables/ContentTyDescargables'
import { CustomerResearch } from '../../../utilities/landings_next/ContentTyDescargables/TyDescargables'

const ReporteEcommerceThanks = () => {
  return (
    <>
      <Head>
        <title>Ya puedes descargar</title>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/meta_home.png"
        />

        <meta property="og:url" content="https://neoconsulting.ai/servicios-aws/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ya puedes descargar"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <Header />
      <ContentTyDescargables data={CustomerResearch} />
      <Footer />
    </>
  )
}

export default ReporteEcommerceThanks
