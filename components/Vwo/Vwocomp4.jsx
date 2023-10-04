import style from './Vwocomp4.module.scss'
// import Link from 'next/link'
import flecha from '../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/flecha.svg'
import icon1 from '../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/icon_1.svg'
import icon2 from '../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/icon_2.svg'
import icon3 from '../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/icon_3.svg'
import icon4 from '../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/icon_4.svg'
import icon5 from '../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/icon_5.svg'
import icon6 from '../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/icon_6.svg'

const Vwocomp4 = () => {
  return (
        <div className={style.section}>
        <div className={style.section_container}>
            <h3 className={style.section_container_title}>
                Nuestras soluciones con VWO con enfoque en CRO
            </h3>
            <div className={style.section_container_cards}>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon1.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>VWO Testing (Web)</p>
                    <p className={style.section_container_cards_card_texto}>Pruebas fáciles sin codificar para aumentar ingresos y mejorar conversiones.</p>
                    <a href="#form">
                        <button className={style.section_container_cards_card_boton}>
                            <p className={style.section_container_cards_card_boton_texto}>Pedir información</p>
                            <img src={flecha.src} alt="flecha" />
                        </button>
                    </a>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon2.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>VWO Insights</p>
                    <p className={style.section_container_cards_card_texto}>Combina grabaciones, heatmaps y encuestas para diagnosticar problemas y mejorar la experiencia del visitante.</p>
                    <a href="#form">
                        <button className={style.section_container_cards_card_boton}>
                            <p className={style.section_container_cards_card_boton_texto}>Pedir información</p>
                            <img src={flecha.src} alt="flecha" />
                        </button>
                    </a>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon3.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>VWO Personalize</p>
                    <p className={style.section_container_cards_card_texto}>Personalización del sitio web para cada segmento de visitantes y facilitar el viaje de compra.</p>
                    <a href="#form">
                        <button className={style.section_container_cards_card_boton}>
                            <p className={style.section_container_cards_card_boton_texto}>Pedir información</p>
                            <img src={flecha.src} alt="flecha" />
                        </button>
                    </a>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon4.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>VWO Server-side testing</p>
                    <p className={style.section_container_cards_card_texto}>Ejecuta experimentos y gestiona funciones de forma rápida y escalable.</p>
                    <a href="#form">
                        <button className={style.section_container_cards_card_boton}>
                            <p className={style.section_container_cards_card_boton_texto}>Pedir información</p>
                            <img src={flecha.src} alt="flecha" />
                        </button>
                    </a>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon5.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>VWO Mobile app testing</p>
                    <p className={style.section_container_cards_card_texto}>Experimentación dirigida en aplicaciones móviles para monetizar y mejorar conversiones.</p>
                    <a href="#form">
                        <button className={style.section_container_cards_card_boton}>
                            <p className={style.section_container_cards_card_boton_texto}>Pedir información</p>
                            <img src={flecha.src} alt="flecha" />
                        </button>
                    </a>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon6.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>VWO Deploy</p>
                    <p className={style.section_container_cards_card_texto}>Mejora tu sitio web sin ayuda de TI, desplegando actualizaciones y destacando ideas.</p>
                    <a href="#form">
                        <button className={style.section_container_cards_card_boton}>
                            <p className={style.section_container_cards_card_boton_texto}>Pedir información</p>
                            <img src={flecha.src} alt="flecha" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Vwocomp4
