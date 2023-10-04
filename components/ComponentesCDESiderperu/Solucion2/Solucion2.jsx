import style from './Solucion2.module.scss'

import solucion1 from '../../../public/assets/CasosDeExito/Pacasmayo/solucion2_1.png'
import solucion2 from '../../../public/assets/CasosDeExito/Pacasmayo/solucion2_2.png'

const Solucion2 = () => {
  return (
    <div className={style.solucion}>
      <div className={style.solucion_container}>
        <div className={style.solucion_container_top}>
          <img className={style.solucion_container_top_img}
            src={solucion1.src} alt="solucion pacasmayo" />
        </div>
        <div className={style.solucion_container_main}>
          <div className={style.solucion_container_main}>
          <img className={style.solucion_container_main_img}
            src={solucion2.src} alt="solucion pacasmayo" />
          </div>
            <div className={style.solucion_container_main_descripcion}>
              <p className={style.solucion_container_main_descripcion}>
                Con esta solución, cada actor ingresa a este SaaS (software as a service) y puede comprar y vender productos industriales como un E-commerce, brindando una mejor experiencia al consumidor final.
              </p>
              <p className={style.solucion_container_main_descripcion}>
                Además, reciben información sobre el estado de sus pedidos, stock y data del negocio (p.e. productos más vendidos, ticket promedio, etc.)
              </p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Solucion2
