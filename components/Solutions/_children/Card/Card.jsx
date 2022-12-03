import Link from 'next/link'
import PropTypes from 'prop-types'
import arrow from '../../../../public/assets/Solutions/arrow.svg'
import style from './Card.module.scss'
const Card = ({ iconSrc, service, description, url }) => {
  return (
    <Link href={url} className={style.card}>
      <div className={style.card_container}>
        <div className={style.card_container_subcontainer}>
          <img
            className={style.card_container_subcontainer_img}
            src={iconSrc}
            alt={service}
          />
          <h3 className={style.card_container_subcontainer_service}>{service}</h3>
        </div>
        <p className={style.card_container_description}>{description}</p>
        <p className={style.card_container_link} href={url}>
          Ver servicios
          <img
            className={style.card_container_link_img}
            src={arrow.src}
            alt='arrow Neo'
          />
        </p>
      </div>
    </Link>
  )
}

Card.propTypes = {
  iconSrc: PropTypes.string,
  service: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string
}

export default Card
