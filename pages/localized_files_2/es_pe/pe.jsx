import React from 'react'
import Bcorp from '../../../components/Bcorp/Bcorp'
import Contact from '../../../components/Contact/Contact'

import Hero from '../../../components/Hero/Hero'
import Questions from '../../../components/Questions/Questions'
import Region from '../../../components/Region/Region'
import Solutions from '../../../components/Solutions/Solutions'
import SuccessCase from '../../../components/SuccessCase/SuccessCase'
import { questionsHome } from '../../../utilities/home/questions'


const pe = () => {
  return (
    <>

      <h1>Header</h1>
      <Hero />
      <Solutions />

      <p>Partners</p>
      <SuccessCase />
      <p>Clientes</p>
      <p>Empresas</p>

      <Region />
      <Bcorp />
      <Questions questions={questionsHome} />

      <Contact />
      <p>contenido</p>
      <p>footer</p>
    </>
  )
}

export default pe
