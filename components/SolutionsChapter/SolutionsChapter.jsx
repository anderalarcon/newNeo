import style from './SolutionsChapter.module.scss'
import PropTypes from 'prop-types'
import Link from 'next/link'
import uuid from 'react-uuid'
import { useEffect, useState } from 'react'
import arrow from '../../public/assets/Swiper/right-arrow.svg'

const SolutionsChapter = ({ solutions, filter = false, urlHasUtm, router }) => {
  if (filter) {
    const [solutionsFiltered, setSolutionsFiltered] = useState([])
    const [activeLink, setActiveLink] = useState('Estrategia')

    const handleFilter = (category) => {
      setSolutionsFiltered(solutions?.find((s) => s.category === category))
      setActiveLink(category)
    }

    const handlePush = (url) => {
      const urlWithUtm = urlHasUtm ? `${url}&utm_medium=${router.query.utm_medium}&utm_source=${router.query.utm_source}&utm_campaign=${router.query.utm_campaign}` : ''
      router.push(urlWithUtm)
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
              <h2 className={style.solutions_container_solution_title}>
                {solution}
              </h2>
              <p className={style.solutions_container_solution_desc}>
                {description}
              </p>
              <div className={style.solutions_container_solution_ctn}>
                <a
                  className={style.solutions_container_solution_ctn_talk}
                  onClick={() => handlePush(urlcontact)}
                >
                  Conversemos
                </a>
                <Link
                  className={style.solutions_container_solution_ctn_more}
                  href={{
                    pathname: urlpage,
                    query: {
                      ...(urlHasUtm && {
                        utm_medium: router?.query?.utm_medium || 'empty',
                        utm_source: router?.query?.utm_source || 'empty',
                        utm_campaign: router?.query?.utm_campaign || 'empty'
                      })
                    }
                  }}
                  // href={urlpage}
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
  solutions: PropTypes.array,
  filter: PropTypes.bool,
  urlHasUtm: PropTypes.bool,
  router: PropTypes.object
}
