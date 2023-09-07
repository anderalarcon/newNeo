import style from './Assesments.module.scss'
import Link from 'next/link'
import crm from '../../public/assets/Landings_next/assesments/crm.png'
import ecom from '../../public/assets/Landings_next/assesments/ecom.png'
import trans from '../../public/assets/Landings_next/assesments/transforprev.png'

const Assesments = () => {
  return (
    <div className={style.assesments}>
      <div className={style.assesments_container}>
        <div className={style.assesments_container_textos}>
                <h1 className={style.assesments_container_textos_titulo}>
                    Evalúa las capacidades de tu organización e impulsa tu rendimiento
                </h1>
                <h3 className={style.assesments_container_textos_pre}>
                    Assesments gratuitos
                </h3>
                <h2 className={style.assesments_container_textos_subtitulo}>
                    Evaluaciones diseñadas por expertos para medir las habilidades, conocimientos y competencias de tus equipos de manera objetiva y eficiente en Transformación Digital, Ecommerce, CRM y Marketing Automation.
                </h2>
        </div>
        <div className={style.assesments_container_cards}>
            <Link href="https://neoconsulting.ai/assesment-crmyma/">
                <div className={style.assesments_container_cards_card}>
                <div className={style.assesments_container_cards_card_left} />
                <div className={style.assesments_container_cards_card_right} />
                    <img className={style.assesments_container_cards_card_imagen} src={crm.src} alt="" />
                    <p className={style.assesments_container_cards_card_titulo}>
                        Autodiagnóstico de madurez de CRM y Marketing Automation
                    </p>
                    <p className={style.assesments_container_cards_card_descripcion}>
                        Evalúa integralmente el nivel de madurez en CRM y Marketing Automation en tu organización.
                    </p>
                </div>
            </Link>
            <Link href="https://neoconsulting.ai/assesment-madurezecommerce/">
                <div className={style.assesments_container_cards_card}>
                <div className={style.assesments_container_cards_card_left} />
                <div className={style.assesments_container_cards_card_right} />
                    <img className={style.assesments_container_cards_card_imagen} src={ecom.src} alt="" />
                    <p className={style.assesments_container_cards_card_titulo}>
                        Autodiagnóstico de madurez Estrategia Ecommerce
                    </p>
                    <p className={style.assesments_container_cards_card_descripcion}>
                        Evalúa integralmente el nivel de madurez de tu Ecommerce e identifica oportunidades para aumentar tus ventas.
                    </p>
                </div>
            </Link>
            <a href="https://neoconsulting.ai/assessment-dimensiones-de-transformacion-digital/">
                <div className={style.assesments_container_cards_card}>
                <div className={style.assesments_container_cards_card_left} />
                <div className={style.assesments_container_cards_card_right} />
                    <img className={style.assesments_container_cards_card_imagen} src={trans.src} alt="" />
                    <p className={style.assesments_container_cards_card_titulo}>
                        Autodiagnóstico de Transformación Digital
                    </p>
                    <p className={style.assesments_container_cards_card_descripcion}>
                        Evalúa integralmente las 6 dimensiones de la Transformación Digital en tu organización.
                    </p>
                </div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Assesments
