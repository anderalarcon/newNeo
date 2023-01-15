/* eslint-disable */

import Contact from '../../../../../components/Contact/Contact'
import Hero from '../../../../../components/Crm/Hero/Hero'
import Questions from '../../../../../components/Questions/Questions'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Team from '../../../../../components/Team/Team'
import { dataHeroQuick } from '../../../../../utilities/crm/hero'
import { questionsCrm } from '../../../../../utilities/crm/questions'
import { team } from '../../../../../utilities/crm/team'

const quick_start = () => {
  return (
    <>
      {/* <Hero data={dataHeroQuick} isSolution={true} />
      <Team team={team} />
      <SuccessCase />
      <Questions questions={questionsCrm} />
      <Contact service={'crm'} solution={'quick-start'} /> */}
    </>
  )
}

export default quick_start
