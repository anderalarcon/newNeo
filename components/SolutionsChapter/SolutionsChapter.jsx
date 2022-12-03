import style from './SolutionsChapter.module.scss'
import PropTypes from 'prop-types'
import Link from 'next/link'
import arrow from '../../public/assets/Crm/Solutions/arrow.svg'
const SolutionsChapter = ({ solutions }) => {
  return (
    <div className={style.solutions}>
      <h1 className={style.solutions_title}>Soluciones que impactarán en tu negocio</h1>
      <div className={style.solutions_container}>
        {solutions.map(({ solution, description, url }) => {
          return (
            <div className={style.solutions_container_solution} key={solution}>
              <h2 className={style.solutions_container_solution_title}>{solution}</h2>
              <p className={style.solutions_container_solution_desc}>{description}</p>
              <div className={style.solutions_container_solution_ctn}>
                <Link className={style.solutions_container_solution_ctn_talk} href={'/'}>Conversemos</Link>
                <Link className={style.solutions_container_solution_ctn_more} href={'/'}>Ver más <img alt='arrow neo consulting' src={arrow.src} width={16} height={16} /> </Link>
              </div>
              <hr className={style.solutions_container_solution_hr} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SolutionsChapter
SolutionsChapter.propTypes = {
  //   solution: PropTypes.string,
  //   description: PropTypes.string,
  //   url: PropTypes.string
  solutions: PropTypes.array
}
