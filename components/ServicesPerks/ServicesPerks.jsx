import style from './ServicesPerks.module.scss'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
import Link from 'next/link'

const ServicesPerks = ({ data, urlHasUtm, router }) => {
  return (
    <div className={style.perks}>
      <div className={style.perks_container}>
        <img
          src={data.coverImg.src}
          alt="cover image"
          className={style.perks_container_coverImg}
        />

        <div className={style.perks_container_root}>
          <h2 className={style.perks_container_root_title}>{data.title}</h2>

          <div className={style.perks_container_root_content}>
            {data.perks.map((perk, i) => (
              <div className={style.perks_container_root_content_perk} key={uuid()}>
                <img src={perk.icon.src} alt="icon" />
                <p>{perk.text}</p>
              </div>
            ))}
          </div>
          <Link
          href={{
            pathname: '/contact',
            query: {
              service: data.contact.service,
              solution: data.contact.solution,
              ...(urlHasUtm && {
                utm_medium: router?.query?.utm_medium || 'empty',
                utm_source: router?.query?.utm_source || 'empty',
                utm_campaign: router?.query?.utm_campaign || 'empty'
              })
            }
          }}
          >
            <button className={style.perks_container_root_contact}>
              {data.contact.text}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

ServicesPerks.propTypes = {
  data: PropTypes.array,
  urlHasUtm: PropTypes.bool,
  router: PropTypes.object
}

export default ServicesPerks
