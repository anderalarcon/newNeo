import Achieves from '../../../../../components/Achieves/Achieves'
import Contact from '../../../../../components/Contact/Contact'
import Hero from '../../../../../components/Crm/Hero/Hero'
import Questions from '../../../../../components/Questions/Questions'
import Reasons from '../../../../../components/Reasons/Reasons'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Team from '../../../../../components/Team/Team'
import {
  dataAchievesFull,
  dataActionsFull
} from '../../../../../utilities/crm/achieves'
import { dataHeroFull } from '../../../../../utilities/crm/hero'
import { questionsCrm } from '../../../../../utilities/crm/questions'
import { dataReasonsFull } from '../../../../../utilities/crm/reasons'
import { team } from '../../../../../utilities/crm/team'

/* eslint-disable-next-line */
const full_service = () => {
  return (
    <>
      {/* <Hero data={dataHeroFull} isSolution={true} />
      <Reasons data={dataReasonsFull} />
      <Achieves data={dataAchievesFull} />
      <Achieves contentRight={false} data={dataActionsFull} />
      <Team team={team} />
      <SuccessCase />
      <Questions questions={questionsCrm} />
      <Contact service={'crm'} solution={'full-service-crm'} /> */}
    </>
  )
}
/* eslint-disable-next-line */
export default full_service
