import style from './Heroizq.module.scss'
// import arrow from '../../public/assets/Crm/Hero/left_arrow.svg'
import Form from 'react-hubspot-form'
import PropTypes from 'prop-types'
import Link from 'next/link'
import uuid from 'react-uuid'

const Hero = ({ data, isSolution = false }) => {
  const {
    pretitle,
    title,
    subtitle,
    desc,
    service,
    solution,
    certifications,
    descCert
  } = data
  const getBtns = () => {
    if (isSolution) {
      return (
        <Link
          className={style.hero_container_left_ctn_direct}
          href={`/contact/?service=${service}&solution=${solution}`}
        >
          Contáctanos
        </Link>
      )
    }
    return (
      <>
        <a className={style.hero_container_left_ctn_services} href='#soluciones'>
          <button>Ver soluciones</button>
        </a>
        {/* <Link
          className={style.hero_container_left_ctn_contact}
          href={`/contact/?service=${service}&solution=${solution}`}
        >
          Contáctanos <img src={arrow.src} alt='Neo Consulting' />
        </Link> */}
      </>
    )
  }

  const getSubtitle = () => {
    if (subtitle) {
      return (
        <span className={style.hero_container_left_title_span}>{subtitle}</span>
      )
    }
    return null
  }
  return (
    <div className={style.hero} id='form'>
      <div className={style.hero_container}>
        <div className={style.hero_container_left}>
        <h4 className={style.hero_container_left_pretitle}>
              {pretitle}
          </h4>
          <h1 className={style.hero_container_left_title}>
            {title}
            {getSubtitle()}
          </h1>
          <p className={style.hero_container_left_description}>{desc}</p>
          <div className={style.hero_container_left_ctn}>{getBtns()}</div>
        </div>
        <div className={style.hero_container_right}>
          <div className={style.hero_container_right_img}>
            <h3 className={style.hero_container_right_img_title}>Impulsa tus ventas utilizando data e inteligencia artificial</h3>
          <Form
            portalId={'21198826'}
            formId={'f3c16fee-044e-42c5-8985-c9ea4d7f7c20'}
          />
          </div>
        </div>
        <div className={style.hero_container_certifications}>
          <p className={style.hero_container_certifications_desc}>{descCert}</p>
          <div className={style.hero_container_certifications_logos}>
            {certifications.map(({ src }) => {
              return (
                <img
                  className={style.hero_container_certifications_logos}
                  src={src}
                  alt='Certificados Neo Consulting'
                  key={uuid()}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
Hero.propTypes = {
  data: PropTypes.object,
  isSolution: PropTypes.bool
}
export default Hero
