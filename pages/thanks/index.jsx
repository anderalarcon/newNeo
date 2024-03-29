import Breadscrumb from '../../components/Breadscrumb/Breadscrumb'
import FormHeader from '../../components/Form/_children/FormHeader/FormHeader'
import Hero from '../../components/Thanks/Hero/Hero'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'
import Head from 'next/head'

const Thanks = () => {
  return (
    <>
      <Head>
        <title>¡Gracias por contactarnos!</title>

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
          content="¡Gracias por contactarnos!"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <FormHeader />
      <Breadscrumb value={'Gracias'} />
      <Hero />
      <Content/>
      <Footer/>
    </>
  )
}

export default Thanks
