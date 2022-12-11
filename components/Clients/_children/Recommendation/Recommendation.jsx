import style from './Recommendation.module.scss'
import PropTypes from 'prop-types'
import Link from 'next/link'
import arrow from '../../../../public/assets/Clients/arrow.svg'
const Recommendation = ({
  logoCompany,
  logoClient,
  quote,
  nameClient,
  chargeClient,
  url
}) => {
  return (
    <div className={style.recommendation}>
      <div className={style.recommendation_container}>
        <div className={style.recommendation_container_image}>
          <img
            className={style.recommendation_container_image_img}
            src={logoCompany}
            alt={chargeClient}
          />
        </div>
        <p className={style.recommendation_container_quote}>{quote}</p>
        <div className={style.recommendation_container_contact}>
          <div className={style.recommendation_container_contact_left}>
            <img
              className={style.recommendation_container_contact_left_img}
              src={logoClient}
              alt=''
            />
          </div>
          <div className={style.recommendation_container_contact_right}>
            <p className={style.recommendation_container_contact_right_name}>
              {nameClient}
            </p>
            <p className={style.recommendation_container_contact_right_charge}>
              {chargeClient}
            </p>
          </div>
        </div>
        <Link href={url} className={style.recommendation_container_link}>
          Ver Caso de éxito
          <span>
            {' '}
            <img src={arrow.src} alt='Arrow' />
          </span>
        </Link>
      </div>
    </div>
  )
}

Recommendation.propTypes = {
  logoCompany: PropTypes.string,
  logoClient: PropTypes.string,
  quote: PropTypes.string,
  nameClient: PropTypes.string,
  chargeClient: PropTypes.string,
  url: PropTypes.string
}
export default Recommendation
