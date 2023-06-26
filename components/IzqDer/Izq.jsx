import React, { useState } from 'react'
import style from './Izq.module.scss'
import flecha from '../../public/assets/Landings_next/IzqDer/flecha.svg'

import p1 from '../../public/assets/Landings_next/IzqDer/p1.svg'
import p2 from '../../public/assets/Landings_next/IzqDer/p2.svg'
import p3 from '../../public/assets/Landings_next/IzqDer/p3.svg'

import icon11 from '../../public/assets/Landings_next/IzqDer/icon11.svg'
import icon12 from '../../public/assets/Landings_next/IzqDer/icon12.svg'
import icon13 from '../../public/assets/Landings_next/IzqDer/icon13.svg'
import icon14 from '../../public/assets/Landings_next/IzqDer/icon14.svg'

import icon21 from '../../public/assets/Landings_next/IzqDer/icon21.svg'
import icon22 from '../../public/assets/Landings_next/IzqDer/icon22.svg'
import icon23 from '../../public/assets/Landings_next/IzqDer/icon23.svg'
import icon24 from '../../public/assets/Landings_next/IzqDer/icon24.svg'
import icon25 from '../../public/assets/Landings_next/IzqDer/icon25.svg'

import icon31 from '../../public/assets/Landings_next/IzqDer/icon31.svg'
import icon32 from '../../public/assets/Landings_next/IzqDer/icon32.svg'

// Define your different sets of cards here. Add or modify as needed.
const initialCards = [
  { icon: icon11, dato: 'Auditoría de Performance', texto: 'Analiza y detecta oportunidades de alto nivel en plataformas publicitarias.' },
  { icon: icon12, dato: 'Digital Analytics', texto: 'Explota las capacidades de tus herramientas de analítica digital.' },
  { icon: icon13, dato: 'Desarrollo de Dashboards 360', texto: 'Captura, analiza y presenta datos de diferentes fuentes para agilizar la toma de decisiones data driven.' },
  { icon: icon14, dato: 'Reporting SEO Automatizado', texto: 'Visualiza el desempeño de tu marca frente al de tus competidores en tiempo real y optimiza tus KPIs SEO.' }
  // Add more initial cards as needed
]

const advancedCards = [
  { icon: icon21, dato: 'Consultoría CRM', texto: 'Desbloquea todo el potencial de tu software de CRM para potenciar la adquisición, conversión y retención de clientes.' },
  { icon: icon22, dato: 'Growth Hacking', texto: 'Identifica palancas de crecimiento sostenible y agiliza la implementación de experimentos para potenciar tus ventas.' },
  { icon: icon23, dato: 'Perfiles dedicados', texto: 'Optimiza el reclutamiento de los perfiles digitales flexibles que necesita tu empresa y agiliza la obtención de resultados.' },
  { icon: icon24, dato: 'Squad as a service', texto: 'Agiliza la obtención de resultados con un equipo especializado y 100% enfocado a un proyecto o indicador.' },
  { icon: icon25, dato: 'Soluciones de AI Predictiva', texto: 'Analiza y obtén eficientemente información de grandes conjuntos de datos a través de técnicas de aprendizaje automático (ML , IA).' }
  // Add more advanced cards as needed
]

const executiveCards = [
  { icon: icon31, dato: 'Capacitaciones en Analítica Digital', texto: 'Entrena y desarrolla a tus colaboradores en el uso y análisis de datos con programas personalizados a la madurez digital de tu empresa.' },
  { icon: icon32, dato: 'Growth Hacking & AI', texto: 'Entrena y desarrolla a tus colaboradores en la identificación de palancas de crecimiento sostenible y en la aplicación de tecnología de vanguardia para generar eficiencia operativa.' }
  // Add more executive cards as needed
]

const Izq = () => {
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
      case 'Formacion Ejecutiva':
        setCards(executiveCards)
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
            <button className={currentTab === 'Formacion Ejecutiva' ? `${style.tab} ${style.tab_active}` : style.tab} onClick={() => handleTabClick('Formacion Ejecutiva')}>
                <img src={p3.src} alt="icon3" />
                Formacion Ejecutiva
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
export default Izq
