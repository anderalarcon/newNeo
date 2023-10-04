import Header from '../../../../components/ComponentesBlogNeo/Header/Header'
import HeroBlog from '../../../../components/ComponentesBlogNeo/HeroBlog/HeroBlog'
import Comp3Blog from '../../../../components/ComponentesBlogNeo/Comp3Blog/Comp3Blog'
import Sucribete from '../../../../components/ComponentesBlogNeo/Sucribete/Sucribete'
import Footer from '../../../../components/Footer/Footer'
import Head from 'next/head'

const aws = () => {
  return (
    <>
      <Head>
        <title>Neo Blog Home</title>
        {/* <meta
          name="description"
          content="Descubre cómo Amazon Web Services puede mejorar la eficiencia de tu empresa con servicios escalables de almacenamiento en la nube, análisis de datos y mucho más aquí."
        /> */}

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {/* <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/03/aws_open.png"
        /> */}

        <meta property="og:url" content="https://neoconsulting.ai/servicios-aws/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Neo Blog Home"
        />
        <script defer src="/js/gtm.js"></script>
      </Head>
      <Header />
      <HeroBlog />
      <Comp3Blog />
      <Sucribete />
      <Footer />
    </>
  )
}

export default aws
