import style from './Achieves.module.scss'
import propTypes from 'prop-types'
import uuid from 'react-uuid'
import Link from 'next/link'
const Achieves = ({ data, contentRight = true }) => {
  const { title, bullets, mainImg, service, solution } = data
  return (
    <div
      className={
        contentRight ? style.achieves : `${style.achieves} ${style.reverse}`
      }
    >
      <div className={style.achieves_container}>
        <div className={style.achieves_container_left}>
          <img src={mainImg} alt={title} />
        </div>
        <div className={style.achieves_container_right}>
          <h2 className={style.achieves_container_right_title}>{title}</h2>
          <div className={style.achieves_container_right_bullets}>
            {bullets.map(({ src, desc, subtitle }) => {
              return (
                <div
                  className={style.achieves_container_right_bullets_bullet}
                  key={uuid()}
                >
                  <div
                    className={
                      style.achieves_container_right_bullets_bullet_img
                    }
                  >
                    <img src={src} alt={desc} />
                  </div>
                  <div>
                    {subtitle
                      ? (
                          <p
                            className={
                              style.achieves_container_right_bullets_bullet_subtitle
                            }
                          >
                            {subtitle}
                          </p>
                        )
                      : null}
                    <p
                      className={
                        style.achieves_container_right_bullets_bullet_desc
                      }
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div
            className={style.achieves_container_right_contact}
            style={{ display: contentRight ? 'block' : 'none' }}
          >
            <Link href={`/contact/?service=${service}&solution=${solution}`}>
              Conversemos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
Achieves.propTypes = {
  data: propTypes.object,
  contentRight: propTypes.bool
}
export default Achieves
