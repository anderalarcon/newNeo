import style from './Resultados1.module.scss'

import resulPacasmayo1 from '../../../public/assets/CasosDeExito/Pacasmayo/resultado1.png'
import resulPacasmayo2 from '../../../public/assets/CasosDeExito/Pacasmayo/resultado2.png'
import resulPacasmayo3 from '../../../public/assets/CasosDeExito/Pacasmayo/resultado3.png'
import resulPacasmayo4 from '../../../public/assets/CasosDeExito/Pacasmayo/resultado4.png'

const Resultados1 = () => {
  return (
    <div className={style.resultado}>
      <div className={style.resultado_container}>
        <h2 className={style.resultado_container_titulo}>
          ¿Cuáles fueron los resultados?
        </h2>
        <div className={style.resultado_container_imagenes}>
          <img src={resulPacasmayo1.src} alt="resultado pacasmayo" />
          <img src={resulPacasmayo2.src} alt="resultado pacasmayo" />
          <img src={resulPacasmayo3.src} alt="resultado pacasmayo" />
          <img src={resulPacasmayo4.src} alt="resultado pacasmayo" />
        </div>
      </div>
    </div>
  )
}

export default Resultados1
