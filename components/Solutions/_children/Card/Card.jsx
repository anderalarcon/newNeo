import Link from 'next/link'
import PropTypes from 'prop-types'
import arrow from '../../../../public/assets/Solutions/arrow.svg'
import style from './Card.module.scss'
import { motion } from 'framer-motion'
import { slideIn } from '../../../../utilities/global/motion'
// import TagManager from 'react-gtm-module'

const Card = ({ iconSrc, service, description, url, urlHasUtm, router, eventName }) => {
  const handleGTagEvent = (link) => {
    window.gtag('event', eventName, {
      event_name: eventName
    })
  }

  const utmParams = {}
  if (urlHasUtm) {
    for (const key in router.query) {
      utmParams[key] = router.query[key]
    }
  }
  return (
    <motion.div
      className={style.card}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.1 }}
      variants={slideIn('down', 'tween', 0.2, 1)}
    >
      <Link
        // onClick={() => {
        //   TagManager.dataLayer({
        //     dataLayer: {
        //       event: 'click_button_interes_servicio',
        //       event_category: { eventCategory },
        //       event_label: { eventLabel },
        //       value: 1
        //     }
        //   })
        // }}
        onClick={handleGTagEvent}
        href={{
          pathname: url,
          query: {
            ...(urlHasUtm && {
              ...utmParams
            })
          }
        }}
      >
        <div className={style.card_container}>
          <div className={style.card_container_subcontainer}>
            <img
              className={style.card_container_subcontainer_img}
              src={iconSrc}
              alt={service}
            />
            <h3 className={style.card_container_subcontainer_service}>
              {service}
            </h3>
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
    </motion.div>
  )
}

Card.propTypes = {
  iconSrc: PropTypes.string,
  service: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlHasUtm: PropTypes.bool,
  router: PropTypes.object,
  eventName: PropTypes.string
}

export default Card
