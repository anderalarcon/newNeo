import React from 'react'
import style from './Contact.module.scss'
import contactImg from '../../public/assets/Contact/contact.png'
import Link from 'next/link'
const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={`${style.contact_container}`}>
        <div className={style.contact_container_left}>
          <h2 className={style.contact_container_left_title}>
            Estamos listos para conversar contigo
          </h2>
          <p className={style.contact_container_left_description}>
            Nuestros consultores te ayudarán a llevar tu a tu organización al
            siguiente nivel.
          </p>
          <div className={style.contact_container_left_button}>
            <div className={style.contact_container_left_button_container}>
              <Link
                className={style.contact_container_left_button_container_btn}
                href="/contact"
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
              alt="Contáctanos Neo Consulting"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
