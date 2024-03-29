import Card from './_children/Card/Card.jsx'
import PropTypes from 'prop-types'
import style from './Solutions.module.scss'
const Solutions = ({ solutions, urlHasUtm, router }) => {
  return (
    <section id='solutions' className={style.solutions}>
      <div className={style.solutions_container}>
        <h2 className={style.solutions_container_title}>Contamos con soluciones en</h2>
        <div className={style.solutions_container_services}>
          {solutions.map(({ iconSrc, service, description, url, eventName }) => {
            return (
              <Card iconSrc={iconSrc.src} service={service} key={service} description={description} url={url} urlHasUtm={urlHasUtm} router={router} eventName={eventName} />
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
  eventName: PropTypes.array
}
export default Solutions
