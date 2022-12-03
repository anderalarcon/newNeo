import React from 'react'
import Hero from '../../../../../components/Crm/Hero/Hero'
import Vision from '../../../../../components/Crm/Vision/Vision'
import Questions from '../../../../../components/Questions/Questions'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import { crmSolutions } from '../../../../../utilities/global/solutionsChpater'
import { questionsCrm } from '../../../../../utilities/crm/questions'

const crm = () => {
  return (
    <>
      Header
      <Hero />
      <Vision />
      <SolutionsChapter solutions={crmSolutions} />
      TEAM
      <SuccessCase />
      <Questions questions={questionsCrm} />
      <Contact />
    </>
  )
}

export default crm
