import Card from './_children/Card/Card.jsx'
import PropTypes from 'prop-types'
import style from './Solutions.module.scss'
const SolutionsJobs = ({ solutions }) => {
  return (
    <section id='solutions' className={style.solutions}>
      <div className={style.solutions_container}>
        <h2 className={style.solutions_container_title}>Encuentra el equipo ideal para ti</h2>
        <h3 className={style.solutions_container_subtitle}>Trabajamos juntos para aprovechar el poder de los negocios para construir productos mejor para todos y todas. Si estás interesado en formar parte de Neo conoce más y escoge el equipo que mejor se adapte a ti.</h3>
        <div className={style.solutions_container_services}>
          {solutions.map(({ iconSrc, service, description, url }) => {
            return (
              <Card iconSrc={iconSrc.src} service={service} key={service} description={description} url={url} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
SolutionsJobs.propTypes = {
  solutions: PropTypes.array
}
export default SolutionsJobs
