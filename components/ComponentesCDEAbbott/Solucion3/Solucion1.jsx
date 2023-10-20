import style from './Solucion1.module.scss'

import solAbbot from '../../../public/assets/CasosDeExito/Abbott/solucionamos_abbot.png'

const Solucion1 = () => {
  return (
    <div className={style.solucion}>
      <div className={style.solucion_container}>
        <h2 className={style.solucion_container_titulo}>
          ¿Cómo lo solucionamos?
        </h2>
        {/* <p className={style.solucion_container_texto}>
          El proceso se llevó a cabo en 6 principales macro-etapas:
        </p> */}
        <div className={style.solucion_container_imagenes}>
          <img src={solAbbot.src} alt="solucion" />
          {/* <img src={solPacasmayo2.src} alt="solucion pacasmayo" /> */}
        </div>
      </div>
    </div>
  )
}

export default Solucion1
