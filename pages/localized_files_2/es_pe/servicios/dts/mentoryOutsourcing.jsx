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

import { whySolMentoryOutsourcing } from '../../../../../utilities/services/dts/whySolutions'
import { perksMentoryOutsourcing } from '../../../../../utilities/services/dts/perks'
import { workMentoryOutsourcing } from '../../../../../utilities/services/dts/workProcess'
import { dataHeroMentoryOutsourcing } from '../../../../../utilities/services/dts/hero'

import { team } from '../../../../../utilities/services/dts/team'
import { dtsCases } from '../../../../../utilities/services/dts/cases'
import { questionsdts } from '../../../../../utilities/services/dts/questions'
import { contentdts } from '../../../../../utilities/services/dts/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const mentoryOutsourcing = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
        <title>Outsourcing y Mentoring</title>
        <meta
          name="description"
          content="Desarrolla tu equipo con Neo Consulting. Evaluamos y capacitamos constantemente a los perfiles especializados mediante herramientas y evaluaciones especializadas."
        />
        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/dts_home.png"
        />
        <meta
          property="og:title"
          content="Outsourcing y Mentoring"
        />
        <meta
          property="og:description"
          content="Desarrolla tu equipo con Neo Consulting. Evaluamos y capacitamos constantemente a los perfiles especializados mediante herramientas y evaluaciones especializadas."
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroMentoryOutsourcing} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolMentoryOutsourcing} />
    <ServicesPerks data={perksMentoryOutsourcing} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workMentoryOutsourcing} />
    <SuccessCase cases={dtsCases} />
    <Team team={team} chapter={'en Headhunting y Mentoring'} />
    <Questions questions={questionsdts} />
    <Contact service={'digital-talent-solution'} solution={'outsourcing-y-mentoring'} urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentdts} />
    <Footer/>
  </>
  )
}

export default mentoryOutsourcing
