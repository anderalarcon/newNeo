import style from './Reto1.module.scss'

import retosanfernando from '../../../public/assets/CasosDeExito/SanFernando/reto_sanfernando.png'

const Reto1 = () => {
  return (
    <div className={style.reto}>
      <div className={style.reto_container}>
        <div className={style.reto_container_left}>
          <h2 className={style.reto_container_left_titulo}>
          ¿Cuál fue nuestro reto?
          </h2>
          <p className={style.reto_container_left_descripcion}>
          Digitalizar el proceso de entrega, y gestión de vale y canje de pavos.
          </p>
          <img className={style.reto_container_left_descripcion} src={retosanfernando.src} alt="" />
        </div>

        <div className={style.reto_container_right}>
          {/* <img className={style.reto_container_right_img}
            src={retopacasmayo.src} alt="reto pacasmayo" /> */}
        </div>
      </div>
    </div>
  )
}

export default Reto1
