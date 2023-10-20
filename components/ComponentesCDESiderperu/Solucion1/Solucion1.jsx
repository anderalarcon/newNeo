import style from './Solucion1.module.scss'

// import solPacasmayo1 from '../../../public/assets/CasosDeExito/Pacasmayo/solucion1_1.png'
// import solPacasmayo2 from '../../../public/assets/CasosDeExito/Pacasmayo/solucion1_2.png'

const Solucion1 = () => {
  return (
    <div className={style.solucion}>
      <div className={style.solucion_container}>
        <h2 className={style.solucion_container_titulo}>
          Contexto
        </h2>
        <p className={style.solucion_container_texto}>
        Un laboratorio global con sucursales en 160 países y 5 regiones enfrenta variaciones en su reporting de ventas y distribución debido a diferencias culturales y socioeconómicas. Buscando evaluar uniformemente la madurez de Ecommerce de las sucursales, intentaron 3 modelos sin éxito. Ninguno se adaptaba plenamente o era demasiado complicado.
        </p>
        {/* <div className={style.solucion_container_imagenes}>
          <img src={solPacasmayo1.src} alt="solucion pacasmayo" />
          <img src={solPacasmayo2.src} alt="solucion pacasmayo" />
        </div> */}
      </div>
    </div>
  )
}

export default Solucion1
