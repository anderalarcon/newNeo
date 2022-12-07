import React from 'react'
import Bcorp from '../../../components/Bcorp/Bcorp'
import Clients from '../../../components/Clients/Clients'
import Contact from '../../../components/Contact/Contact'

import Hero from '../../../components/Hero/Hero'
import Questions from '../../../components/Questions/Questions'
import Region from '../../../components/Region/Region'
import Solutions from '../../../components/Solutions/Solutions'
import SuccessCase from '../../../components/SuccessCase/SuccessCase'
import { questionsHome } from '../../../utilities/home/questions'
import { recommendations } from '../../../utilities/global/recommendations'
const pe = () => {
  return (
    <>
      <Hero />
      <Solutions />
      <SuccessCase />
      <Clients recommendations={recommendations} />
      <Region />
      <Bcorp />
      <Questions questions={questionsHome} />
      <Contact />
    </>
  )
}

export default pe
