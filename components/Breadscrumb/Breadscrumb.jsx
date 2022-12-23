import Link from 'next/link'
import proptypes from 'prop-types'
import style from './Breadscrumb.module.scss'
const Breadscrumb = ({ value, inside = false }) => {
  return (
    <div className={style.breadscrumb}>
      <div
        style={{ padding: inside ? '0' : ' ' }}
        className={style.breadscrumb_container}
      >
        <span className={style.breadscrumb_container_root}>
          <Link href={'/pe'}>Inicio</Link> /
        </span>
        <span className={style.breadscrumb_container_page}> {value}</span>
      </div>
    </div>
  )
}

Breadscrumb.propTypes = {
  value: proptypes.string,
  inside: proptypes.bool
}

export default Breadscrumb
