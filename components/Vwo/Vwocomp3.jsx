import style from './Vwocomp3.module.scss'

import img1 from '../../public/assets/Landings_next/vwo/Vwocomp3/img1.jpg'
import img2 from '../../public/assets/Landings_next/vwo/Vwocomp3/img2.jpg'

import icono1 from '../../public/assets/Landings_next/vwo/Vwocomp3/icono1.svg'
import icono2 from '../../public/assets/Landings_next/vwo/Vwocomp3/icono2.svg'
import icono3 from '../../public/assets/Landings_next/vwo/Vwocomp3/icono3.svg'
import icono4 from '../../public/assets/Landings_next/vwo/Vwocomp3/icono4.svg'

const Vwocomp3 = () => {
  return (
    <div className={style.section}>
        <div className={style.section_container1}>
            <div className={style.section_container1_lista}>
                <div className={style.section_container1_lista_item}>
                    <img src={icono1.src} alt="icono" />
                    <div className={style.section_container1_lista_item_contenido}>
                        <h3 className={style.section_container1_lista_item_contenido_titulo}>Experimenta el poder de la optimización</h3>
                        <h3 className={style.section_container1_lista_item_contenido_descripcion}>Accede a una suite completa de herramientas de optimización y personalización para perfeccionar tu experiencia digital. Desde pruebas A/B hasta segmentación avanzada, podrás impulsar la conversión y la satisfacción del usuario como nunca antes.</h3>
                    </div>
                </div>
                <div className={style.section_container1_lista_item}>
                    <img src={icono2.src} alt="icono" />
                    <div className={style.section_container1_lista_item_contenido}>
                        <h3 className={style.section_container1_lista_item_contenido_titulo}>Toma decisiones basadas en datos</h3>
                        <h3 className={style.section_container1_lista_item_contenido_descripcion}>Utilizando la inteligencia de datos de VWO y el conocimiento estratégico de Neo Consulting, podrás tomar decisiones informadas y estratégicas para mejorar continuamente tu sitio web y lograr tus objetivos comerciales.</h3>
                    </div>
                </div>
                <a href='#form'>
                    <button className={style.section_container1_lista_button}>
                        Contáctanos
                    </button>
                </a>
            </div>
            <div>
                <img className={style.section_container1_imagen} src={img1.src} alt="grafico" />
            </div>
        </div>

        <div className={style.section_container2}>
            <div className={style.section_container2_lista}>
                <div className={style.section_container2_lista_item}>
                    <img src={icono3.src} alt="icono" />
                    <div className={style.section_container2_lista_item_contenido}>
                        <h3 className={style.section_container2_lista_item_contenido_titulo}>Aprovecha la escalabilidad</h3>
                        <h3 className={style.section_container2_lista_item_contenido_descripcion}>Si gestionas un sitio web pequeño o un e-commerce a gran escala, la solución se adapta a tus necesidades. Alcanza el crecimiento deseado sin comprometer la calidad de tu experiencia de usuario.</h3>
                    </div>
                </div>
                <div className={style.section_container2_lista_item}>
                    <img src={icono4.src} alt="icono" />
                    <div className={style.section_container2_lista_item_contenido}>
                        <h3 className={style.section_container2_lista_item_contenido_titulo}>Obtén resultados rápidos</h3>
                        <h3 className={style.section_container2_lista_item_contenido_descripcion}>No más esperas interminables para ver los resultados de tus esfuerzos de optimización. Podrás implementar cambios rápidos, realizar pruebas en tiempo real y obtener resultados tangibles en un corto período de tiempo.</h3>
                    </div>
                </div>
                <a href='#form'>
                    <button className={style.section_container2_lista_button}>
                        Contáctanos
                    </button>
                </a>
            </div>
            <div>
                <img className={style.section_container2_imagen} src={img2.src} alt="grafico" />
            </div>
        </div>
    </div>
  )
}
export default Vwocomp3
