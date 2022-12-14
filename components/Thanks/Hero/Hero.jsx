import style from './Hero.module.scss'
import hero from '../../../public/assets/Thanks/hero.jpg'
const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.hero_container}>
        <div className={style.hero_container_left}>
          <img
            className={style.hero_container_left_img}
            src={hero.src}
            alt='Gracias Neo Consulting'
          />
        </div>
        <div className={style.hero_container_right}>
          <p className={style.hero_container_right_title}>¡Gracias por contactarnos!</p>
          <p className={style.hero_container_right_desc}>Nos estaremos comunicando dentro de 48 horas a través de tu correo</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
