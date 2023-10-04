import style from './Sucribete.module.scss'

import retosider from '../../../public/assets/Landings_next/BlogNeo/homeBlog/Suscribete/suscribete_img.png'
import Embedform from '../../../components/ComponentesBlogNeo/Sucribete/Embed-form-Blog/Embedform'

const Sucribete = () => {
  return (
    <div className={style.reto}>
      <div className={style.reto_container}>
      <div className={style.reto_container_right}>
          <img className={style.reto_container_right_img}
            src={retosider.src} alt="reto siderperu" />
        </div>

        <div className={style.reto_container_left}>
          <h2 className={style.reto_container_left_titulo}>
            Suscríbete a nuestro blog
          </h2>
          <Embedform />
          <p className={style.reto_container_left_descripcion}>
            Política de privacidad
          </p>
        </div>

      </div>
    </div>
  )
}

export default Sucribete
