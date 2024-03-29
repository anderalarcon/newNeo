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

import { dataHeroFullService } from '../../../../../utilities/services/crm/hero'
import { whySolFullService } from '../../../../../utilities/services/crm/whySolutions'
import { perksFullService } from '../../../../../utilities/services/crm/perks'
import { workFullService } from '../../../../../utilities/services/crm/workProcess'

import { questionsCrm } from '../../../../../utilities/services/crm/questions'
import { team } from '../../../../../utilities/services/crm/team'
import { crmCases } from '../../../../../utilities/services/crm/cases'
import { contentcrm } from '../../../../../utilities/services/crm/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const fullService = () => {
  const [urlHasUtm, router] = useUtm()

  return (
    <>
      <Head>
      <title>Consultoría CRM & Estrategia | NEO Consulting</title>
      <meta
        name="description"
        content="Consultora CRM por consultores expertos. En NEO por más de 19 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
      />
      <meta
        property="og:title"
        content="Consultoría CRM & Estrategia | NEO Consulting"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Consultora CRM por consultores expertos. En NEO por más de 19 años brindamos consultorías en eCommerce, Estrategia y Transformación Digital."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/crm_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <Header urlHasUtm={urlHasUtm} router={router}/>
      <Hero data={dataHeroFullService} urlHasUtm={urlHasUtm} router={router} />
      <WhySolutions data={whySolFullService} />
      <ServicesPerks data={perksFullService} urlHasUtm={urlHasUtm} router={router} />
      <WorkProcess processes={workFullService} />
      <SuccessCase cases={crmCases} />
      <Team team={team} chapter={'en CRM y Salesforce '} />
      <Questions questions={questionsCrm} />
      <Contact service={'crm'} solution={'full-service'} urlHasUtm={urlHasUtm} router={router} />
      <Content contents={contentcrm} />
      <Footer/>
    </>
  )
}

export default fullService
