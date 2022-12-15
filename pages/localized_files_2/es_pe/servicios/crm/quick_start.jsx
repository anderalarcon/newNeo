/* eslint-disable */

import Contact from "../../../../../components/Contact/Contact"
import Questions from "../../../../../components/Questions/Questions"
import SuccessCase from "../../../../../components/SuccessCase/SuccessCase"
import Team from "../../../../../components/Team/Team"
import { questionsCrm } from '../../../../../utilities/crm/questions'
import { team } from '../../../../../utilities/crm/team'

const quick_start = () => {
  return (
    <>
    <Team team={team}/>
    <SuccessCase/>
    <Questions questions={questionsCrm}/>
    <Contact service={'crm'} solution={'quick-start'}/>
    </>
  )
}

export default quick_start