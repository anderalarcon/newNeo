import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Trajectory from '../../components/Trajectory/Trajectory'
import Footer from '../../components/Footer/Footer'
import MeetOurTeam from '../../components/MeetOurTeam/MeetOurTeam'
import Valores from '../../components/Valores/Valores'
import Trust from '../../components/Companies/Trust/TrustQuienesSomos'
import Bcorp from '../../components/Bcorp/Bcorp'

import { trajectoriesHome } from '../../utilities/quienes_somos/trajectories'
import { collaborators } from '../../utilities/quienes_somos/collaborators'
import { qValores } from '../../utilities/quienes_somos/solutions'

const quienes = () => {
  return (
    <>
    <Header />
    <About />
    <Trajectory trajectories={trajectoriesHome} />
    <Valores solutions={qValores} filter={true} />
    <Trust />
    <MeetOurTeam collaborators={collaborators} />
    <Bcorp />
    <Footer />
    </>
  )
}

export default quienes
