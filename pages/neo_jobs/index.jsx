import Head from 'next/head'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HeroRecruitment from '../../components/HeroRecruitment/HeroRecruitment'
import Differences from '../../components/Differences/Differences'
import differencesA from '../../utilities/neo_jobs/differencesA'
import differencesB from '../../utilities/neo_jobs/differencesB'
import Trajectory from '../../components/Trajectory/Trajectory'
import Valores from '../../components/Valores/Valores'
import SolutionsJobs from '../../components/SolutionsJobs/SolutionsJobs'

import { trajectoriesHome } from '../../utilities/quienes_somos/trajectories'
import { qValores } from '../../utilities/quienes_somos/solutions'
import { solutionsPeru } from '../../utilities/home/solutions'
import JobsFrame from '../../components/JobsFrame/JobsFrame'
import Script from 'next/script'

const neoJobs = () => {
  return (
    <>
    <Head>
    <title>Trabajo desde Casa - Remoto Digital | Neo Consulting</title>
    <meta
      name="description"
      content="Encuentra trabajo desde Casa - Remoto Digital. Cada NEO es un nómada digital que ve una oportunidad en un entorno complejo."
    />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <meta
      property="og:image"
      content="https://wordpress.neoconsulting.ai/wp-content/uploads/2022/03/Talento-Neo-1.png"
    />

    <meta
      property="og:url"
      content="https://neoconsulting.ai/bolsa-de-trabajo"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Trabajo desde Casa - Remoto Digital | Neo Consulting"
    />
    <meta
      property="og:description"
      content="Encuentra trabajo desde Casa - Remoto Digital. Cada NEO es un nómada digital que ve una oportunidad en un entorno complejo."
    />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header />
    <HeroRecruitment />
    <JobsFrame />
    <Script type="text/javascript" src="https://app.jazz.co/widgets/basic/create/neo" charset="utf-8"></Script>
    <Trajectory trajectories={trajectoriesHome} />
    <Valores solutions={qValores} filter={true} />
    <Differences differences={differencesA} />
    <SolutionsJobs solutions={solutionsPeru} />
    <Differences differences={differencesB} />
    <Footer />
    </>
  )
}

export default neoJobs
