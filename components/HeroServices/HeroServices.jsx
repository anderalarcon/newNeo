import style from './HeroServices.module.scss'
import arrow from '../../public/assets/Crm/Hero/left_arrow.svg'
import PropTypes from 'prop-types'
import Link from 'next/link'
import uuid from 'react-uuid'

const Hero = ({ data, isSolution = false, urlHasUtm, router }) => {
  const handleGTagEvent = (link) => {
    window.gtag('event', 'interes_contacto', {
      event_name: 'interes_contacto'
    })
  }

  const handleGTagEvent2 = (link) => {
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
  const {
    pretitle,
    title,
    subtitle,
    desc,
    service,
    solution,
    mainImg,
    certifications,
    descCert,
    eventName
  } = data
  const getBtns = () => {
    if (isSolution) {
      return (
        <Link
          onClick={handleGTagEvent}
          className={style.hero_container_left_ctn_direct}
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
      )
    }
    return (
      <>
        <a className={style.hero_container_left_ctn_services} href='#solutions' onClick={handleGTagEvent2}>
          <button>Ver Servicios</button>
        </a>
        <Link
          onClick={handleGTagEvent}
          className={style.hero_container_left_ctn_contact}
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
          Contáctanos <img src={arrow.src} alt='Neo Consulting' />
        </Link>
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
    <div className={style.hero}>
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
            <img src={mainImg} width='613' height='617' alt={solution} />
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
  isSolution: PropTypes.bool,
  urlHasUtm: PropTypes.bool,
  router: PropTypes.object
}
export default Hero
