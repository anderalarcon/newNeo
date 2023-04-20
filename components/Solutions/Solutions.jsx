import Card from './_children/Card/Card.jsx'
import PropTypes from 'prop-types'
import style from './Solutions.module.scss'
const Solutions = ({ solutions, urlHasUtm, router }) => {
  return (
    <section id='solutions' className={style.solutions}>
      <div className={style.solutions_container}>
        <h2 className={style.solutions_container_title}>Contamos con soluciones en</h2>
        <div className={style.solutions_container_services}>
          {solutions.map(({ iconSrc, service, description, url, eventCategory, eventLabel }) => {
            return (
              <Card iconSrc={iconSrc.src} service={service} key={service} description={description} url={url} urlHasUtm={urlHasUtm} router={router} eventCategory={eventCategory} eventLabel={eventLabel} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
Solutions.propTypes = {
  solutions: PropTypes.array,
  urlHasUtm: PropTypes.bool,
  router: PropTypes.object,
  eventCategory: PropTypes.array,
  eventLabel: PropTypes.array
}
export default Solutions
