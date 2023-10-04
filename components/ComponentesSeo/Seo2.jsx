import style from './Seo2.module.scss'

import img1 from '../../public/assets/Landings_next/seo/seo2_img.png'

import icono1 from '../../public/assets/Landings_next/seo/seo2_ico1.svg'
import icono2 from '../../public/assets/Landings_next/seo/seo2_ico2.svg'

const Seo2 = () => {
  return (
    <div className={style.section}>
        <div className={style.section_container1}>
            <div className={style.section_container1_lista}>
                <h3 className={style.section_container1_lista_titulo}>
                ¿Qué obtendrás de la auditoría?
                </h3>
                <div className={style.section_container1_lista_item}>
                    <img src={icono1.src} alt="icono" />
                    <div className={style.section_container1_lista_item_contenido}>
                        <h3 className={style.section_container1_lista_item_contenido_titulo}>Análisis de posicionamiento frente a competidores</h3>
                        <h3 className={style.section_container1_lista_item_contenido_descripcion}>Un estudio que desglosa la posición de tu empresa en el mercado en relación con tus principales competidores.</h3>
                    </div>
                </div>
                <div className={style.section_container1_lista_item}>
                    <img src={icono2.src} alt="icono" />
                    <div className={style.section_container1_lista_item_contenido}>
                        <h3 className={style.section_container1_lista_item_contenido_titulo}>Diagnóstico de oportunidades de mejora y de capitalización de tráfico web</h3>
                        <h3 className={style.section_container1_lista_item_contenido_descripcion}>Una evaluación detallada de tu presencia online que destaca áreas de mejora y oportunidades inexploradas.</h3>
                    </div>
                </div>
                {/* <a href='#form'>
                    <button className={style.section_container1_lista_button}>
                        Contáctanos
                    </button>
                </a> */}
            </div>
            <div>
                <img className={style.section_container1_imagen} src={img1.src} alt="grafico" />
            </div>
        </div>

    </div>
  )
}
export default Seo2
