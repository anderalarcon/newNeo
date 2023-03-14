import Head from 'next/head'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Trajectory from '../../components/Trajectory/Trajectory'
import Footer from '../../components/Footer/Footer'
import MeetOurTeam from '../../components/MeetOurTeam/MeetOurTeam'
import Valores from '../../components/Valores/Valores'
import Trust from '../../components/Companies/Trust/TrustQuienesSomos'
import Bcorp from '../../components/Bcorp/Bcorp'
import Family from '../../components/Family/Family'

import { trajectoriesHome } from '../../utilities/quienes_somos/trajectories'
import { collaborators } from '../../utilities/quienes_somos/collaborators'
import { qValores } from '../../utilities/quienes_somos/solutions'

const quienes = () => {
  return (
    <>
    <Head>
        <title>Quienes Somos</title>
        <meta
          name="description"
          content="Descrubre mas sobre nosotros"
        />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta property="og:url" content="https://neoconsulting.ai/servicios-aws" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Quienes Somos"
        />
        <meta
          property="og:description"
          content="Descrubre mas sobre nosotros"
        />
        <script defer src="/js/gtm.js"></script>
        <script defer src="/js/hotjar.js"></script>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
    <Header />
    <About />
    <Trajectory trajectories={trajectoriesHome} />
    <Valores solutions={qValores} filter={true} />
    <Trust />
    <MeetOurTeam collaborators={collaborators} />
    <Bcorp />
    <Family />
    <Footer />
    </>
  )
}

export default quienes
