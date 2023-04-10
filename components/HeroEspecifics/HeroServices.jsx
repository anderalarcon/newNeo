import style from './HeroServices.module.scss'
// import arrow from '../../public/assets/Crm/Hero/left_arrow.svg'
import PropTypes from 'prop-types'
import Link from 'next/link'
import uuid from 'react-uuid'

const Hero = ({ data, isSolution = false, urlHasUtm, router }) => {
  const {
    pretitle,
    title,
    subtitle,
    desc,
    service,
    solution,
    mainImg,
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
        <Link
          className={style.hero_container_left_ctn_direct}
          href={{
            pathname: '/contact',
            query: {
              service,
              solution,
              ...(urlHasUtm && {
                utm_medium: router?.query?.utm_medium || 'empty',
                utm_source: router?.query?.utm_source || 'empty',
                utm_campaign: router?.query?.utm_campaign || 'empty'
              })
            }
          }}
        >
          Contáctanos
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
