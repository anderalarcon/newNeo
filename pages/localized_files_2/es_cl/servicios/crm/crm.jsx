import Hero from '../../../../../components/HeroServices/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Team from '../../../../../components/Team/Team'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Vision from '../../../../../components/Vision/Vision'
import Content from '../../../../../components/ContentServices/Content'
import Head from 'next/head'

import { crmSolutions } from '../../../../../utilities/services/crm/solutions'
import { questionsCrm } from '../../../../../utilities/services/crm/questions'
import { team } from '../../../../../utilities/services/crm/team'
import { dataHero } from '../../../../../utilities/services/crm/hero'
import { crmCases } from '../../../../../utilities/services/crm/cases'
import { contentcrm } from '../../../../../utilities/services/crm/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const crm = () => {
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
      <Hero data={dataHero} urlHasUtm={urlHasUtm} router={router} />
      <Vision defaultVersion={false} urlHasUtm={urlHasUtm} router={router}/>
      <SolutionsChapter solutions={crmSolutions} urlHasUtm={urlHasUtm} router={router} />
      <Team team={team} chapter={'en CRM y Salesforce '} />
      <SuccessCase cases={crmCases} />
      <Questions questions={questionsCrm} />
      <Contact service={'crm'} urlHasUtm={urlHasUtm} router={router} />
      <Content contents={contentcrm} />
      <Footer/>
    </>
  )
}

export default crm
