import Contact from '../../../../../components/Contact/Contact'
import Hero from '../../../../../components/Crm/Hero/Hero'
import Questions from '../../../../../components/Questions/Questions'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Team from '../../../../../components/Team/Team'
import { dataHeroAccelerator } from '../../../../../utilities/crm/hero'
import { questionsCrm } from '../../../../../utilities/crm/questions'
import { team } from '../../../../../utilities/crm/team'
const accelerator = () => {
  return (
    <>
      <Hero data={dataHeroAccelerator} isSolution={true} />
      <Team team={team} />
      <SuccessCase />
      <Questions questions={questionsCrm} />
      <Contact service={'crm'} solution={'accelerator'} />
    </>
  )
}

export default accelerator
