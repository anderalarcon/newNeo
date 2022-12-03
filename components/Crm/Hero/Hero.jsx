import React from 'react'
import style from './Hero.module.scss'
import arrow from '../../../public/assets/Crm/Hero/left_arrow.svg'
import hero from '../../../public/assets/Crm/Hero/hero.jpg'
import salesforce from '../../../public/assets/Crm/Hero/salesforce.svg'
import salesforcemkt from '../../../public/assets/Crm/Hero/salesforce-mkt.svg'
const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.hero_container}>
        <div className={style.hero_container_left}>
          <h1 className={style.hero_container_left_title}>
            Somos especialistas en <span className={style.hero_container_left_title_span}>CRM</span>
          </h1>
          <p className={style.hero_container_left_description}>
            Crea, desarrolla y mejora la relación con tus clientes.
          </p>
          <div className={style.hero_container_left_ctn}>
            <a className={style.hero_container_left_ctn_services} href=''>
              <button>Ver Servicios</button>
            </a>
            <a className={style.hero_container_left_ctn_contact} href=''>
              <button>
                Contáctanos <img src={arrow.src} alt='' />
              </button>
            </a>
          </div>
          <div className={style.hero_container_left_certifications}>
            <p className={style.hero_container_left_certifications_desc}>
              Nuestros onsultores de CRM están certificados en:
            </p>
            <div className={style.hero_container_left_certifications_logos}>
              <img
                className={style.hero_container_left_certifications_logos_sf}
                src={salesforce.src}
                width='83'
                height='58'
                alt='change'
              />
              <img
                className={
                  style.hero_container_left_certifications_logos_sfmkt
                }
                src={salesforcemkt.src}
                width='159'
                height='58'
                alt='change'
              />
            </div>
          </div>
        </div>
        <div className={style.hero_container_right}>
          <div className={style.hero_container_right_img}>
            <img src={hero.src} width='613' height='617' alt='change' />
          </div>
          <div className={style.hero_container_right_certifications}>
            <p className={style.hero_container_right_certifications_desc}>
              Nuestros onsultores de CRM están certificados en:
            </p>
            <div className={style.hero_container_right_certifications_logos}>
              <img
                className={style.hero_container_right_certifications_logos_sf}
                src={salesforce.src}
                width='50'
                height='35'
                alt='change'
              />
              <img
                className={
                  style.hero_container_right_certifications_logos_sfmkt
                }
                src={salesforcemkt.src}
                width='96'
                height='35'
                alt='change'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
