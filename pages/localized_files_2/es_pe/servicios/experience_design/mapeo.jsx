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

import { dataMapeo } from '../../../../../utilities/services/xd/hero'
import { whySolMapeo } from '../../../../../utilities/services/xd/whySolutions'
import { perksMapeo } from '../../../../../utilities/services/xd/perks'
import { workMapeo } from '../../../../../utilities/services/xd/workProcess'

import { team } from '../../../../../utilities/services/xd/team'
import { xdCases } from '../../../../../utilities/services/xd/cases'
import { questionsxd } from '../../../../../utilities/services/xd/questions'
import { contentxd } from '../../../../../utilities/services/xd/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const mapeo = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
        <title>Consultoria en Marketing Digital | NEO Consulting</title>
        <meta
          name="description"
          content="Consultoria en Marketing Digital y Estrategia Digital. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
        />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2022/05/0.png"
        />

        <meta property="og:url" content="https://neoconsulting.ai/pe" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Consultoria en Marketing Digital | NEO Consulting"
        />
        <meta
          property="og:description"
          content="Consultoria en Marketing Digital y Estrategia Digital. En NEO por más de 20 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataMapeo} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolMapeo} />
    <ServicesPerks data={perksMapeo} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workMapeo} />
    <Team team={team} chapter={'en experience_design'} />
    <SuccessCase cases={xdCases} />
    <Questions questions={questionsxd} />
    <Contact service={'experience-design'} solution='mapeo-de-experiencias' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentxd} />
    <Footer/>
  </>
  )
}

export default mapeo
