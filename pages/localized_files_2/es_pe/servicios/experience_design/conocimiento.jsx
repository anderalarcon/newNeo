import Hero from '../../../../../components/HeroEspecifics/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Team from '../../../../../components/Team/Team'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Content from '../../../../../components/ContentServices/Content'
import Head from 'next/head'
import WhySolutions from '../../../../../components/WhySolution/WhySolutions'
import ServicesPerks from '../../../../../components/ServicesPerks/ServicesPerks'
import WorkProcess from '../../../../../components/WorkProcess/WorkProcess'

import { dataConocimiento } from '../../../../../utilities/services/xd/hero'
import { whySolConocimiento } from '../../../../../utilities/services/xd/whySolutions'
import { perksConocimiento } from '../../../../../utilities/services/xd/perks'
import { workConocimiento } from '../../../../../utilities/services/xd/workProcess'

import { team } from '../../../../../utilities/services/xd/team'
import { xdCases } from '../../../../../utilities/services/xd/cases'
import { questionsxd } from '../../../../../utilities/services/xd/questions'
import { contentxd } from '../../../../../utilities/services/xd/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const conocimiento = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
        <title>Conocimiento del consumidor</title>
        <meta
          name="description"
          content="Entiende mejor a tu audiencia con Neo Consulting. Realizamos una investigación profunda del consumidor para adaptar las soluciones a sus necesidades.s"
        />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/xd_home.png"
        />

        <meta
          property="og:title"
          content="Conocimiento del consumidor"
        />
        <meta
          property="og:description"
          content="Entiende mejor a tu audiencia con Neo Consulting. Realizamos una investigación profunda del consumidor para adaptar las soluciones a sus necesidades."
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataConocimiento} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolConocimiento} />
    <ServicesPerks data={perksConocimiento} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workConocimiento} />
    <Team team={team} chapter={'en experience_design'} />
    <SuccessCase cases={xdCases} />
    <Questions questions={questionsxd} />
    <Contact service={'experience-design'} solution='conocimiento-del-consumidor' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentxd} />
    <Footer/>
  </>
  )
}

export default conocimiento
