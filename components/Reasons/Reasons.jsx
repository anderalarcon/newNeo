import style from './Reasons.module.scss'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
const Reasons = ({ data }) => {
  const { title, subtitle, reasons } = data
  return (
    <div className={style.reasons}>
      <div className={style.reasons_container}>
        <h2 className={style.reasons_container_title}>{title}</h2>
        <p className={style.reasons_container_subtitle}>{subtitle}</p>
        <div className={style.reasons_container_list}>
          {reasons.map(({ src, desc }) => {
            return (
              <div className={style.reasons_container_list_reason} key={uuid()}>
                <div className={style.reasons_container_list_reason_img}>
                  <img src={src} alt='Soluciones Neo Consulting' />
                </div>
                <p className={style.reasons_container_list_reason_desc}>{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
Reasons.propTypes = {
  data: PropTypes.object
}

export default Reasons
