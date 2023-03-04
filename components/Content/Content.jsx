import style from './Content.module.scss'
import { contentHome } from '../../utilities/home/content'
import Card from './_children/Card/Card.jsx'

import { motion } from 'framer-motion'
import { fadeIn } from '../../utilities/global/motion'

const Content = () => {
  return (
    <div className={style.content}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn('up', 'tween', 0, 1)}
      >
      <h1 className={style.content_heading}>Contenido para ti</h1>

      <div className={style.content_container}>
        {contentHome.map((content, i) => {
          return <Card content={content} key={i} />
        })}
      </div>
      </motion.div>
    </div>
  )
}

export default Content
