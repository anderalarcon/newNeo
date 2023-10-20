import style from './Resultados1.module.scss'

import resulPacasmayo1 from '../../../public/assets/CasosDeExito/Abbott/resultados_abbot.svg'
import resulmovilab1 from '../../../public/assets/CasosDeExito/Abbott/abbot_r_movil1.png'
import resulmovilab2 from '../../../public/assets/CasosDeExito/Abbott/abbot_r_movil2.png'
import resulmovilab3 from '../../../public/assets/CasosDeExito/Abbott/abbot_r_movil3.png'
import resulmovilab4 from '../../../public/assets/CasosDeExito/Abbott/abbot_r_movil4.png'
import resulmovilab5 from '../../../public/assets/CasosDeExito/Abbott/abbot_r_movil5.png'

const Resultados1 = () => {
  return (
    <div className={style.resultado}>
      <div className={style.resultado_container}>
        <h2 className={style.resultado_container_titulo}>
          ¿Cuáles fueron los resultados?
        </h2>
        <div className={style.resultado_container_imagenes}>
          <img className={style.resultado_container_imagenes_desktop} src={resulPacasmayo1.src} alt="resultado" />
          <img className={style.resultado_container_imagenes_movil} src={resulmovilab1.src} alt="resultado" />
          <img className={style.resultado_container_imagenes_movil} src={resulmovilab2.src} alt="resultado" />
          <img className={style.resultado_container_imagenes_movil} src={resulmovilab3.src} alt="resultado" />
          <img className={style.resultado_container_imagenes_movil} src={resulmovilab4.src} alt="resultado" />
          <img className={style.resultado_container_imagenes_movil} src={resulmovilab5.src} alt="resultado" />

        </div>
      </div>
    </div>
  )
}

export default Resultados1
