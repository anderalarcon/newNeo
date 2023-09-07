import style from './Solucion1.module.scss'

import solPacasmayo1 from '../../../public/assets/CasosDeExito/Pacasmayo/solucion1_1.png'
import solPacasmayo2 from '../../../public/assets/CasosDeExito/Pacasmayo/solucion1_2.png'

const Solucion1 = () => {
  return (
    <div className={style.solucion}>
      <div className={style.solucion_container}>
        <h2 className={style.solucion_container_titulo}>
          La solución
        </h2>
        <p className={style.solucion_container_texto}>
          Diseñar una plataforma online de ventas  B2B2C que responda a las necesidades comerciales, vincule las operaciones internas en los 3 segmentos de sus clientes (productores a mayoristas, mayoristas a minoristas y minoristas a consumidor final) y  permita la visibilidad completa de la cadena de distribución e información del consumidor.
        </p>
        <div className={style.solucion_container_imagenes}>
          <img src={solPacasmayo1.src} alt="solucion pacasmayo" />
          <img src={solPacasmayo2.src} alt="solucion pacasmayo" />
        </div>
      </div>
    </div>
  )
}

export default Solucion1
