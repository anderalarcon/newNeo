import style from './Comp3Blog.module.scss'
// import Link from 'next/link'
import flecha from '../../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/flecha.svg'
import icon1 from '../../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/icon_1.svg'
import icon2 from '../../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/icon_2.svg'
import icon3 from '../../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/icon_3.svg'
import icon4 from '../../../public/assets/Landings_next/BlogNeo/homeBlog/HomeComp3/icon_4.svg'

const Comp3Blog = () => {
  return (
        <div className={style.section}>
        <div className={style.section_container}>
            <h3 className={style.section_container_title}>
                Visita los blogs de Neo Consulting
            </h3>
            <div className={style.section_container_cards}>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon1.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>Analytics & AI</p>
                    <p className={style.section_container_cards_card_texto}>Mejora las relaciones con tus clientes vía CRM y potencia tus resultados con Growth.</p>
                    <a href="#form">
                        <button className={style.section_container_cards_card_boton}>
                            <p className={style.section_container_cards_card_boton_texto}>Ver más</p>
                            <img src={flecha.src} alt="flecha" />
                        </button>
                    </a>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon2.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>Growth & CRM</p>
                    <p className={style.section_container_cards_card_texto}>Mejora las relaciones con tus clientes vía CRM y potencia tus resultados con Growth.</p>
                    <a href="#form">
                        <button className={style.section_container_cards_card_boton}>
                            <p className={style.section_container_cards_card_boton_texto}>Ver más</p>
                            <img src={flecha.src} alt="flecha" />
                        </button>
                    </a>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon3.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>Innovación</p>
                    <p className={style.section_container_cards_card_texto}>Mejora las relaciones con tus clientes vía CRM y potencia tus resultados con Growth.</p>
                    <a href="#form">
                        <button className={style.section_container_cards_card_boton}>
                            <p className={style.section_container_cards_card_boton_texto}>Ver más</p>
                            <img src={flecha.src} alt="flecha" />
                        </button>
                    </a>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon4.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>Experience Design</p>
                    <p className={style.section_container_cards_card_texto}>Mejora las relaciones con tus clientes vía CRM y potencia tus resultados con Growth.</p>
                    <a href="#form">
                        <button className={style.section_container_cards_card_boton}>
                            <p className={style.section_container_cards_card_boton_texto}>Ver más</p>
                            <img src={flecha.src} alt="flecha" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Comp3Blog
