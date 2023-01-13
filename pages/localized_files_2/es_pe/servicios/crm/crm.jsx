import React from 'react'
import Hero from '../../../../../components/Crm/Hero/Hero'
import Vision from '../../../../../components/Crm/Vision/Vision'
import Questions from '../../../../../components/Questions/Questions'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import { crmSolutions } from '../../../../../utilities/global/solutionsChpater'
import { questionsCrm } from '../../../../../utilities/services/crm/questions'
import Team from '../../../../../components/Team/Team'
import { team } from '../../../../../utilities/services/crm/team'
import { dataHero } from '../../../../../utilities/services/crm/hero'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import { crmCases } from '../../../../../utilities/services/crm/cases'

const crm = () => {
  return (
    <>
      <Header/>
      <Hero data={dataHero} /> {/* change static */}
      <Vision />
      <SolutionsChapter solutions={crmSolutions} />
      <Team team={team} chapter={'CRM y Salesforce '} />
      <SuccessCase cases={crmCases} />
      <Questions questions={questionsCrm} />
      <Contact service={'crm'} />
      <Footer/>
    </>
  )
}

export default crm
