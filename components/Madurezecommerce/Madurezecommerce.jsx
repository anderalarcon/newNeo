import style from './Madurezecommerce.module.scss'
import neo from '../../public/assets/Landings_next/crmyma/minilogoneo.png'
import cuadro1 from '../../public/assets/Landings_next/madurezecommerce/cuadro1g.png'
import cuadro2 from '../../public/assets/Landings_next/madurezecommerce/cuadro2g.png'

const Madurezecommerce = () => {
  return (
        <section className={style.section}>
            <div className={style.section_container}>

                <div className={style.section_container_pa1}>

                    <h1 className={style.section_container_pa1_titulo}>
                      Autodiagnóstico de madurez Estrategia Ecommerce
                    </h1>
                    <h4 className={style.section_container_pa1_dedicatoria}>
                      Por:    <img src={neo.src} alt="Neo" width="40%"/>
                    </h4>
                    <h3 className={style.section_container_pa1_subtitulo}>
                      Evalúa integralmente el nivel de madurez de tu Ecommerce e identifica oportunidades para aumentar tus ventas.
                    </h3>
                    <a target="_blank" href="https://survey.alchemer.com/s3/7273697/Performance-E-commerce-Checklist" rel="noreferrer">
                      <button className={style.section_container_pa1_boton}>
                        Iniciar test
                      </button>
                    </a>
                </div>

                <div className={style.section_container_pa2}>
                  <h2 className={style.section_container_pa2_titulo}>
                    Dimensiones de nuestro modelo de madurez
                  </h2>
                  <img className={style.section_container_pa2_imagen} src={cuadro1.src} alt="cuadro1"/>
                </div>

                <div className={style.section_container_pa3}>
                  <h3 className={style.section_container_pa3_titulo}>
                    Al final del autodiagnóstico conocerás cuál es el nivel de madurez de cada componente de tu estrategia ecommerce e identificarás cuáles son tus puntos a mejorar para incrementar las conversiones en tu web.
                  </h3>
                  <img className={style.section_container_pa3_imagen} src={cuadro2.src} alt="cuadro2"/>
                </div>

            </div>
        </section>
  )
}

export default Madurezecommerce
