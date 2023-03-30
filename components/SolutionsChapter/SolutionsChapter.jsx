import style from './SolutionsChapter.module.scss'
import PropTypes from 'prop-types'
import Link from 'next/link'
import uuid from 'react-uuid'
import { useEffect, useState } from 'react'
import arrow from '../../public/assets/Swiper/right-arrow.svg'

const SolutionsChapter = ({ solutions, filter = false }) => {
  if (filter) {
    const [solutionsFiltered, setSolutionsFiltered] = useState([])
    const [activeLink, setActiveLink] = useState('Estrategia')

    const handleFilter = (category) => {
      setSolutionsFiltered(solutions?.find((s) => s.category === category))
      setActiveLink(category)
    }

    useEffect(() => {
      setSolutionsFiltered(solutions.find((s) => s.category === 'Estrategia'))
    }, [])

    return (
      <div id='solutions' className={style.solutions}>
        <h1 className={style.solutions_title}>
          Soluciones que impactarán en tu negocio
        </h1>
        <div className={style.solutions_container}>
          <div className={style.solutions_container_filters}>
            {solutions?.map(({ category }) => {
              return <h2 onClick={ () => handleFilter(category)} className={`${style.solutions_container_filters_filter} ${activeLink === category ? style.active : ''}`} key={uuid()}>{category}</h2>
            })}
          </div>
        {solutionsFiltered?.solutions?.map(({ solution, description, urlcontact, urlpage }) => {
          return (
              <div className={style.solutions_container_solution} key={uuid()}>
              <h2 className={style.solutions_container_solution_title}>{solution}</h2>
              <p className={style.solutions_container_solution_desc}>{description}</p>
              <div className={style.solutions_container_solution_ctn}>
                <Link className={style.solutions_container_solution_ctn_talk} href={urlcontact}>Conversemos</Link>
                <Link className={style.solutions_container_solution_ctn_more} href={urlpage}>Ver más <img alt='arrow neo consulting' src={arrow.src} width={16} height={16} /> </Link>
              </div>
              <hr className={style.solutions_container_solution_hr} />
            </div>
          )
        })}

        </div>
      </div>
    )
  }
  return (
    <div id='solutions' className={style.solutions}>
      <h1 className={style.solutions_title}>
        Soluciones que impactarán en tu negocio
      </h1>
      <div className={style.solutions_container}>
        {solutions.map(({ solution, description, urlcontact, urlpage }) => {
          return (
            <div className={style.solutions_container_solution} key={solution}>
              <h2 className={style.solutions_container_solution_title}>
                {solution}
              </h2>
              <p className={style.solutions_container_solution_desc}>
                {description}
              </p>
              <div className={style.solutions_container_solution_ctn}>
                <Link
                  className={style.solutions_container_solution_ctn_talk}
                  href={urlcontact}
                >
                  Conversemos
                </Link>
                <Link
                  className={style.solutions_container_solution_ctn_more}
                  href={urlpage}
                >
                  Ver más{' '}
                  <img
                    alt='arrow neo consulting'
                    src={arrow.src}
                    width={16}
                    height={16}
                  />{' '}
                </Link>
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
  solutions: PropTypes.array,
  filter: PropTypes.bool
}
