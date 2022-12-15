import Contact from '../../../../../components/Contact/Contact'
import Questions from '../../../../../components/Questions/Questions'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Team from '../../../../../components/Team/Team'
import { questionsCrm } from '../../../../../utilities/crm/questions'
import { team } from '../../../../../utilities/crm/team'
/* eslint-disable */
const full_service = () => {
  return (
    <>
      <Team team={team} />
      <SuccessCase />
      <Questions questions={questionsCrm} />
      <Contact service={'crm'} solution={'full-service'} />
    </>
  )
}

export default full_service
