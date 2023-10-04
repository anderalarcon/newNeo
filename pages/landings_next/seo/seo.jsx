import Head from 'next/head'
import Header from '../../../components/HeaderSimple/Header'
import Trust from '../../../components/Companies/Trust/Trust'
import Footer from '../../../components/Footer/Footer'

import Hero from '../../../components/HeoLandingsSeparate/HeroSeo'
import { dataHeroSeo } from '../../../utilities/landings_next/seo/hero'

import Seo from '../../../components/ComponentesSeo/Seo1'
import Seo2 from '../../../components/ComponentesSeo/Seo2'
import Seo3 from '../../../components/ComponentesSeo/Seo3'

import Vision from '../../../components/ComponentesSeo/VisionComercial/Vision'
import { seoVisions } from '../../../utilities/landings_next/seo/visions'

import Embedform from '../../../components/Embed-form-Seo/Embedform'

const seo = () => {
  return (
    <>
    <Head>
        <title>Auditoria SEO | Neo Consulting</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Auditoria SEO | Neo Consulting"
        />
        {/* <meta
          property="og:description"
          content="Auditoria SEO | Neo Consulting"
        /> */}
        <script defer src="/js/gtm.js"></script>
        <script defer src="/js/hotjar.js"></script>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/09/meta_seo.png"
        />
    </Head>
    <Header />
    <Hero data={dataHeroSeo} />
    <Vision defaultVersion={true} visions={seoVisions} desc='' />
    <Seo />
    <Seo2 />
    <Trust />
    <Embedform />
    <Seo3 />
    <Footer />
    </>
  )
}

export default seo
