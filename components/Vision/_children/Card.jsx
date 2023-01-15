import PropTypes from 'prop-types'
import style from './Card.module.scss'
const Card = ({ icon, title, desc }) => {
  return (
    <div className={style.card} id='qew'>
      <div className={style.card_container}>
        <div className={style.card_container_card}>
            <div className={style.card_container_card_image}>
                <img src={icon} alt="Visiones Neo Consulting" />
            </div>
            <h2 className={style.card_container_card_title}>{title}</h2>
            <p className={style.card_container_card_description}>{desc}</p>
        </div>
      </div>
    </div>
  )
}
Card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string
}
export default Card
