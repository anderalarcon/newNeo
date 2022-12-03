import Accordion from '../Accordion/Accordion'
import style from './Questions.module.scss'
import image from '../../public/assets/Questions/questions_home.jpg'
import PropTypes from 'prop-types'

const Questions = ({ questions }) => {
  return (
    <div className={style.questions}>
      <div className={style.questions_container}>
        <div className={style.questions_container_left}>
          <div className={style.questions_container_left_ctn}>
            <img src={image.src} width={'455'} height={'530'} className={style.questions_container_left_ctn_img} />
          </div>
        </div>
        <div className={style.questions_container_right}>
          <Accordion questions={questions} />
        </div>
      </div>
    </div>
  )
}
Questions.propTypes = {
  questions: PropTypes.array
}
export default Questions
