import style from './Region.module.scss'
import regionMob from '../../public/assets/Region/region_mobile.png'
import regionDesk from '../../public/assets/Region/region_desktop.png'

import { motion } from 'framer-motion'
import { fadeIn } from '../../utilities/global/motion'

const Region = () => {
  return (
    <div className={style.region}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn('up', 'tween', 0, 0.4)}
      >
      <h2 className={style.region_title} >Tenemos presencia regional</h2>
      <div className={style.blur_1}></div>
      <div className={style.region_container}>
        <img className={style.region_container_mobile} src={regionMob.src} width={320} height={430} />
        <img className={style.region_container_desktop} src={regionDesk.src} width={1250} height={888} />
      </div>
      <div className={style.blur_2}></div>
      </motion.div>
    </div>
  )
}

export default Region
