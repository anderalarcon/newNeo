import React, { useState } from 'react'
import style from './Izq.module.scss'
import flecha from '../../public/assets/Landings_next/IzqDer/flecha.svg'

import p1 from '../../public/assets/Landings_next/IzqDer/p1.svg'
import p2 from '../../public/assets/Landings_next/IzqDer/p2.svg'
// import p3 from '../../public/assets/Landings_next/IzqDer/p3.svg'

import icon11 from '../../public/assets/Landings_next/IzqDer/icon11.svg'
import icon12 from '../../public/assets/Landings_next/IzqDer/icon12.svg'
import icon13 from '../../public/assets/Landings_next/IzqDer/icon13.svg'
// import icon14 from '../../public/assets/Landings_next/IzqDer/icon14.svg'

import icon21 from '../../public/assets/Landings_next/IzqDer/icon21.svg'
import icon22 from '../../public/assets/Landings_next/IzqDer/icon22.svg'
// import icon23 from '../../public/assets/Landings_next/IzqDer/icon23.svg'
// import icon24 from '../../public/assets/Landings_next/IzqDer/icon24.svg'
// import icon25 from '../../public/assets/Landings_next/IzqDer/icon25.svg'

// import icon31 from '../../public/assets/Landings_next/IzqDer/icon31.svg'
// import icon32 from '../../public/assets/Landings_next/IzqDer/icon32.svg'

// Define your different sets of cards here. Add or modify as needed.
const initialCards = [
  { icon: icon11, dato: 'Brand Tracking', texto: 'Captura, integra y visualiza eficientemente  los indicadores de branding para optimizarla efectividad de acciones / campañas de marketing.' },
  { icon: icon12, dato: 'Diseño de experiencias', texto: 'Mejora la conversión en las etapas del customer Journey del cliente; tanto en canales digitales como en puntos de contacto offline.' },
  { icon: icon13, dato: 'Transformación Digital', texto: 'Define, diseña e implementa tu estrategia de transformación digital en la organización para alcanzar tus objetivos de negocio.' }
  // Add more initial cards as needed
]

const advancedCards = [
  { icon: icon21, dato: 'Research y Mapeo de experiencias', texto: 'Analiza y detecta oportunidades de alto nivel en plataformas publicitarias.' },
  { icon: icon22, dato: 'Digital Assessments', texto: 'Explota las capacidades de tus herramientas de analítica digital.' }
  // Add more advanced cards as needed
]

const Der = () => {
  const [currentTab, setCurrentTab] = useState('Iniciales')
  const [cards, setCards] = useState(initialCards)

  const handleTabClick = (tabName) => {
    setCurrentTab(tabName)
    switch (tabName) {
      case 'Iniciales':
        setCards(initialCards)
        break
      case 'Avanzadas':
        setCards(advancedCards)
        break
      default:
        setCards(initialCards)
    }
  }

  return (
    <div className={style.section} id='soluciones'>
      <div className={style.section_container}>
        <h3 className={style.section_container_title}>
            Soluciones que impactan en tu negocio
        </h3>
        <div className={style.tabs}>
            <button className={currentTab === 'Iniciales' ? `${style.tab} ${style.tab_active}` : style.tab} onClick={() => handleTabClick('Iniciales')}>
                <img src={p1.src} alt="icon1" />
                Iniciales
            </button>
            <button className={currentTab === 'Avanzadas' ? `${style.tab} ${style.tab_active}` : style.tab} onClick={() => handleTabClick('Avanzadas')}>
                <img src={p2.src} alt="icon2" />
                Avanzadas
            </button>
        </div>
        <div className={style.section_container_cards}>
          {cards.map((card, index) => (
            <div className={style.section_container_cards_card} key={index}>
              <img className={style.section_container_cards_card_imagen} src={card.icon.src} alt="icon" />
              <p className={style.section_container_cards_card_dato}>{card.dato}</p>
              <p className={style.section_container_cards_card_texto}>{card.texto}</p>
              <a href="#form">
                <button className={style.section_container_cards_card_boton}>
                  <p className={style.section_container_cards_card_boton_texto}>Pedir información</p>
                  <img src={flecha.src} alt="flecha" />
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Der
