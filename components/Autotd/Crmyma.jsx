import style from './Crmyma.module.scss'
import neo from '../../public/assets/Landings_next/crmyma/minilogoneo.png'
import cuadro1 from '../../public/assets/Landings_next/autotd/cuadro1auto.png'
import cuadro2 from '../../public/assets/Landings_next/autotd/cuadro2auto.png'

const Crmyma = () => {
  return (
        <section className={style.section}>
            <div className={style.section_container}>

                <div className={style.section_container_pa1}>

                    <h1 className={style.section_container_pa1_titulo}>
                    Autodiagnóstico de Transformación Digital
                    </h1>
                    <h4 className={style.section_container_pa1_dedicatoria}>
                      Por:    <img src={neo.src} alt="Neo" width="40%"/>
                    </h4>
                    <h3 className={style.section_container_pa1_subtitulo}>
                    Evalúa integralmente las 6 dimensiones de la Transformación Digital en tu organización.
                    </h3>
                    <a target="_blank" href="" rel="noreferrer" >
                      <button className={style.section_container_pa1_boton}>
                        Iniciar test
                      </button>
                    </a>
                </div>

                <div className={style.section_container_pa2}>
                  <h2 className={style.section_container_pa2_titulo}>
                  Nuestro modelo de madurez de Transformación Digital
                  </h2>
                  <img className={style.section_container_pa2_imagen} src={cuadro1.src} alt="cuadro1"/>
                </div>

                <div className={style.section_container_pa3}>
                  <h3 className={style.section_container_pa3_titulo}>
                  Al final del autodiagnóstico conocerás la etapa en la que te encuentras y recibirás recomendaciones para pasar a la siguiente etapa.
                  </h3>
                  <img className={style.section_container_pa3_imagen} src={cuadro2.src} alt="cuadro2"/>
                </div>

            </div>
        </section>
  )
}

export default Crmyma
