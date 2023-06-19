import style from './Vwocomp2.module.scss'
import icon1 from '../../public/assets/Landings_next/vwo/Vwocomp2/icon_1.svg'
import icon2 from '../../public/assets/Landings_next/vwo/Vwocomp2/icon_2.svg'
import icon3 from '../../public/assets/Landings_next/vwo/Vwocomp2/icon_3.svg'
import icon4 from '../../public/assets/Landings_next/vwo/Vwocomp2/icon_4.svg'
import icon5 from '../../public/assets/Landings_next/vwo/Vwocomp2/icon_5.svg'
import icon6 from '../../public/assets/Landings_next/vwo/Vwocomp2/icon_6.svg'

const Vwocomp2 = () => {
  return (
        <div className={style.section}>
        <div className={style.section_container}>
            <h3 className={style.section_container_title}>
                ¿Por qué elegir  VWO?
            </h3>
            <div className={style.section_container_cards}>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon1.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>+ 40 Bn</p>
                    <p className={style.section_container_cards_card_texto}>Experiencias optmizadas</p>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon2.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>+ 1.1Mn</p>
                    <p className={style.section_container_cards_card_texto}>Experimentos realizados</p>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon3.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>+ 450k</p>
                    <p className={style.section_container_cards_card_texto}>Páginas web potenciadas</p>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon4.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>+ 20 000</p>
                    <p className={style.section_container_cards_card_texto}>Clientes atendidos</p>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon5.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>+ 150</p>
                    <p className={style.section_container_cards_card_texto}>Paises</p>
                </div>
                <div className={style.section_container_cards_card}>
                    <img className={style.section_container_cards_card_imagen} src={icon6.src} alt="icon" />
                    <p className={style.section_container_cards_card_dato}>+ 13</p>
                    <p className={style.section_container_cards_card_texto}>Años</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Vwocomp2
