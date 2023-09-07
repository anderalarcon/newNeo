import React from 'react'
import style from './Contact.module.scss'
import contactImg from '../../public/assets/Contact/contact.png'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { motion } from 'framer-motion'
import { zoomIn } from '../../utilities/global/motion'
import TagManager from 'react-gtm-module'

const Contact = ({ service = 'default', solution = 'default', urlHasUtm, router }) => {
  const utmParams = {}
  if (urlHasUtm) {
    for (const key in router.query) {
      utmParams[key] = router.query[key]
    }
  }
  return (
    <div className={style.contact}>
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        variants={zoomIn(0, 0.5)}
      >
        <div className={`${style.contact_container}`}>
          <div className={style.contact_container_left}>
            <h2 className={style.contact_container_left_title}>
              Estamos listos para conversar contigo
            </h2>
            <p className={style.contact_container_left_description}>
              Nuestros consultores te ayudarán a llevar tu organización al
              siguiente nivel.
            </p>
            <div className={style.contact_container_left_button}>
              <div className={style.contact_container_left_button_container}>
                <Link
                  className={style.contact_container_left_button_container_btn}
                  onClick={() => {
                    TagManager.dataLayer({
                      dataLayer: {
                        event: 'click_button_formulario',
                        event_category: 'boton_interes_contacto',
                        event_label: 'hero_home_boton_contacto',
                        value: 1
                      }
                    })
                  }}
                  href={{
                    pathname: '/contact',
                    query: {
                      service,
                      solution,
                      ...(urlHasUtm && {
                        ...utmParams
                      })
                    }
                  }}
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
          <div className={style.contact_container_right}>
            <div className={style.contact_container_right_image}>
              <img
                className={style.contact_container_right_image_img}
                src={contactImg.src}
                alt='Consultores de NEO Consulting'
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
Contact.propTypes = {
  service: PropTypes.string,
  solution: PropTypes.string,
  urlHasUtm: PropTypes.bool,
  router: PropTypes.object
}
export default Contact
