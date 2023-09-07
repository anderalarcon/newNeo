import style from './Crmyma.module.scss'

const Crmyma2 = () => {
  return (
        <section className={style.section}>
            <div className={style.section_container}>

                <div className={style.section_container_pafinal}>
                    <h3 className={style.section_container_pafinal_subtitulo}>
                    Incrementa la proactividad, impulsa la innovación y mejora la experiencia de tus clientes.
                    </h3>
                    <a target="_blank" href="https://survey.alchemer.com/s3/7468944/Encuesta-Transformaci-n-Digital" rel="noreferrer" >
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
