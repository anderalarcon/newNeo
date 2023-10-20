import style from './Solucion1.module.scss'

import contextosvg from '../../../public/assets/CasosDeExito/Abbott/contexto_svg.svg'
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
        <p className={style.solucion_container_texto}>
        Entonces, recurrieron a Neo para diseñar una herramienta específica, enfocada en la simplicidad y eficacia. Neo, ya familiarizado con sus operaciones en LATAM, entendía sus desafíos y requerimientos globales.
        </p>
        {/* <div className={style.solucion_container_imagenes}>
          <img src={solPacasmayo1.src} alt="solucion pacasmayo" />
          <img src={solPacasmayo2.src} alt="solucion pacasmayo" />
        </div> */}
      </div>
      <div className={style.solucion_container2}>
        <img className={style.solucion_container2_img}
          src={contextosvg.src} alt="aqui imageeen" />
        <h3 className={style.solucion_container2_title}>
          ¿Cuál fue nuestro reto?
        </h3>
        <p className={style.solucion_container2_text}>
          Desarrollar un Ecommerce Maturity Model con validez global que permita evaluar la madurez de sus afiliadas, identificar brechas y oportunidades que potencien el impacto de las tiendas virtuales, y simplificar el diálogo entre los stakeholders internos.
        </p>
      </div>
    </div>
  )
}

export default Solucion1
