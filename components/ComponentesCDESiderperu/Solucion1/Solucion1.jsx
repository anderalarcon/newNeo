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
          En 2019, Siderperú buscaba agilizar su proceso de transformación digital. Para ello, optaron por una consultoría que desarrolle las capacidades necesarias y establezca una estructura de gestión interna que la sostenga a largo plazo.
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
