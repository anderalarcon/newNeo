import style from './Solucion1.module.scss'

import solPacasmayo1 from '../../../public/assets/CasosDeExito/Siderperu/sider_solucion3v2.png'

const Solucion1 = () => {
  return (
    <div className={style.solucion}>
      <div className={style.solucion_container}>
        <h2 className={style.solucion_container_titulo}>
          ¿Cómo lo solucionamos?
        </h2>
        <p className={style.solucion_container_texto}>
          El proceso se llevó a cabo en 6 principales macro-etapas:
        </p>
        <div className={style.solucion_container_imagenes}>
          <img src={solPacasmayo1.src} alt="solucion siderperu" />
          {/* <img src={solPacasmayo2.src} alt="solucion pacasmayo" /> */}
        </div>
      </div>
    </div>
  )
}

export default Solucion1
