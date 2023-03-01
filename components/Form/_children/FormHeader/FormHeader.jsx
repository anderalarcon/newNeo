import style from './FormHeader.module.scss'
import logoNeo from '../../../../public/assets/Form/logo_neo.svg'
import Link from 'next/link'

const FormHeader = () => {
  return (
    <div className={style.formheader}>
      <div className={style.formheader_container}>
      <Link href={'/'}>
          <img
            className={style.formheader_container_logo}
            src={logoNeo.src}
            alt='Logo Neo Consulting'
          />
      </Link>
      </div>
    </div>
  )
}

export default FormHeader
