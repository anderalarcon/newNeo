// import aws from '../../../public/assets/Partners/aws.png'
import googleCloud from '../../../public/assets/Partners/google-cloud.png'
import googleMarkettingPlatform from '../../../public/assets/Partners/google-marketing-platform.png'
import hubspot from '../../../public/assets/Partners/hubspot.png'
import salesforce from '../../../public/assets/Partners/salesforce.png'
import style from '../Companies.module.scss'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../utilities/global/motion'

const Partners = () => {
  return (
    <motion.div
        className={style.companies}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn('up', 'tween', 0.2, 1)}
      >
      <h2 className={style.companies_title}>Somos Partners</h2>

      <div className={style.companies_container}>
        {/* <div className={style.companies_container_img}>
          <img src={aws.src} alt='aws' />
        </div> */}
        <div className={style.companies_container_img}>
          <img src={googleCloud.src} alt='googleCloud' />
        </div>
        <div className={style.companies_container_img}>
          <img
            src={googleMarkettingPlatform.src}
            alt='googleMarkettingPlatform'
          />
        </div>
        <div className={style.companies_container_img}>
          <img src={hubspot.src} alt='hubspot' />
        </div>
        <div className={style.companies_container_img}>
          <img src={salesforce.src} alt='salesforce' />
        </div>
      </div>
    </motion.div>
  )
}
export default Partners
