import style from './Simple1.module.scss'
import confiahub1 from '../../public/assets/Landings_next/iahub/confiahub1.png'
import confiahub2 from '../../public/assets/Landings_next/iahub/confiahub2.png'
import confiahub3 from '../../public/assets/Landings_next/iahub/confiahub3.png'
import confiahub4 from '../../public/assets/Landings_next/iahub/confiahub4.png'
import confiahub5 from '../../public/assets/Landings_next/iahub/confiahub5.png'
import confiahub6 from '../../public/assets/Landings_next/iahub/confiahub6.png'

import cuadrito4 from '../../public/assets/Landings_next/iahub/cuadradito4.png'

const Simple1 = () => {
  return (
    <div className={style.simple1}>
      <img className={style.simple1_cuadrito1} src={cuadrito4.src} />
      <img className={style.simple1_cuadrito2} src={cuadrito4.src} />
      <div className={style.simple1_container}>
        <div className={style.simple1_container_left}>
          <h3 className={style.simple1_container_left_title}>
          Empresas que confían en nosotros
          </h3>
          <a href="#form">
            <button className={style.simple1_container_left_button}>
              <p className={style.simple1_container_left_button_texto}>
              Contáctanos
              </p>
            </button>
          </a>
        </div>
        <div className={style.simple1_container_right}>
          <div className={style.simple1_container_right_imagenes}>
            <img className={style.simple1_container_right_imagenes_img} src={confiahub1.src} />
            <img className={style.simple1_container_right_imagenes_img} src={confiahub2.src} />
            <img className={style.simple1_container_right_imagenes_img} src={confiahub3.src} />
            <img className={style.simple1_container_right_imagenes_img} src={confiahub4.src} />
            <img className={style.simple1_container_right_imagenes_img} src={confiahub5.src} />
            <img className={style.simple1_container_right_imagenes_img} src={confiahub6.src} />
          </div>
          <a href="">
            <button className={style.simple1_container_right_button}>
              <p className={style.simple1_container_right_button_texto}>
              Contáctanos
              </p>
            </button>
          </a>
        </div>
      </div>

      {/* <h3 className={style.simple1_container_left_title2}>
        ¡Reinventa la manera de crear contenido, diseñar productos y conectar con tus clientes!
      </h3>
      <a href="#form">
        <button className={style.simple1_button}>
          <p className={style.simple1_button_texto}>
          Integra la IA a tu empresa
          </p>
        </button>
      </a> */}

    </div>
  )
}

export default Simple1
