import style from './Possible.module.scss'
import possible from '../../public/assets/Services/Dts/Possible/possibles.png'
import { possibles } from '../../utilities/services/dts/possible'

const Possible = () => {
  const getPossibles = () => {
    return possibles.map(({ src, title, description }, i) => {
      return (
        <>
          <div className={style.benefits_container_left_container} key={title + i}>
            <div className={style.benefits_container_left_container_left}>
              <img
                className={style.benefits_container_left_container_left_icon}
                src={src}
                alt={title}
              />
            </div>
            <div className={style.benefits_container_left_container_right}>
              <h6 className={style.benefits_container_left_container_right_title}>
                {title}
              </h6>
              <p className={style.benefits_container_left_container_right_description}>
                {description}
              </p>
            </div>
          </div>
        </>
      )
    })
  }

  return (
    <div className={style.benefits}>
          <div className={style.benefits_container}>
            <div className={style.benefits_container_left}>
              <h6 className={style.benefits_container_left_title}>
              ¿Cómo lo haremos posible?{' '}
                <span className={style.benefits_container_left_title_span}>
                </span>
              </h6>
              {getPossibles()}
            </div>
            <div className={style.benefits_container_right}>
              <img
                className={style.benefits_container_right_img}
                src={possible.src}
                alt="Asesoramiento Neo Consulting"
              />
            </div>
          </div>
        </div>
  )
}

export default Possible
