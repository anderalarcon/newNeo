import style from './Reto1.module.scss'

import retopacasmayo from '../../../public/assets/CasosDeExito/Pacasmayo/reto_pacasmayo.png'

const Reto1 = () => {
  return (
    <div className={style.reto}>
      <div className={style.reto_container}>
        <div className={style.reto_container_left}>
          <h2 className={style.reto_container_left_titulo}>
            ¿Cuál fue el reto?
          </h2>
          <p className={style.reto_container_left_descripcion}>
            Tradicionalmente, las empresas industriales no han interactuado directamente con su consumidor final. Por eso, para poder llegar a ellos, se han apalancado de sus distintos intermediarios: empresas mayoristas o minoristas, los cuales permiten que el consumidor final tenga acceso a sus productos.
          </p>
          <p className={style.reto_container_left_descripcion}>
            Sin embargo, esta dependencia genera una limitante en el productor: se pierde de información valiosa que permita conocer mejor a su consumidor final y a sus intermediarios.
          </p>
        </div>

        <div className={style.reto_container_right}>
          <img className={style.reto_container_right_img}
            src={retopacasmayo.src} alt="reto pacasmayo" />
        </div>
      </div>
    </div>
  )
}

export default Reto1
