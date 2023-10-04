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
        La campaña navideña de venta de vales de pavo (Oct-Dic) en San Fernando es esencial para las ventas anuales, pero históricamente no tenía una experiencia óptima para clientes, ya que se requería ir a recoger los vales de forma presencial. En 2019, San Fernando buscó digitalizar y optimizar este proceso mediante una solución ecommerce.
        </p>
        <div className={style.solucion_container_imagenes}>
          {/* <img src={solPacasmayo1.src} alt="solucion pacasmayo" /> */}
          {/* <img src={solPacasmayo2.src} alt="solucion pacasmayo" /> */}
        </div>
      </div>
    </div>
  )
}

export default Solucion1
