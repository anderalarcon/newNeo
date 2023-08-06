import style from './Crmyma.module.scss'

const Crmyma2 = () => {
  return (
        <section className={style.section}>
            <div className={style.section_container}>

                <div className={style.section_container_pafinal}>
                    <h3 className={style.section_container_pafinal_subtitulo}>
                      Impulsa el crecimiento de las ventas, maximiza la rentabilidad y obtén una ventaja competitiva en el mercado
                    </h3>
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf3qz9TO_yJDd9QOeFVOYlgDPFJZ2j7E5f7vYt4JHV0t85I0g/viewform" rel="noreferrer" >
                      <button className={style.section_container_pafinal_boton}>
                        Iniciar test
                      </button>
                    </a>
                </div>

            </div>
        </section>
  )
}

export default Crmyma2
