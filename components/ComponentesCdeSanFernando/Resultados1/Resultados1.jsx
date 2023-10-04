import style from './Resultados1.module.scss'

import resulPacasmayo1 from '../../../public/assets/CasosDeExito/SanFernando/resultfernando_1.png'
import resulPacasmayo2 from '../../../public/assets/CasosDeExito/SanFernando/resultfernando_2.png'
import resulPacasmayo3 from '../../../public/assets/CasosDeExito/SanFernando/resultfernando_3.png'

const Resultados2 = () => {
  return (
    <div className={style.resultado}>
      <div className={style.resultado_container}>
        <h2 className={style.resultado_container_titulo}>
          ¿Cuáles fueron los resultados?
        </h2>
        <div className={style.resultado_container_imagenes}>
          <img src={resulPacasmayo1.src} alt="resultado" />
          <img src={resulPacasmayo2.src} alt="resultado" />
          <img src={resulPacasmayo3.src} alt="resultado" />
        </div>
      </div>
    </div>
  )
}

export default Resultados2
