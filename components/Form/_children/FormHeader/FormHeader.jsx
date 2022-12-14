import style from './FormHeader.module.scss'
import logoNeo from '../../../../public/assets/Form/logo_neo.svg'

const FormHeader = () => {
  return (
    <div className={style.formheader}>
      <div className={style.formheader_container}>
        <img
          className={style.formheader_container_logo}
          src={logoNeo.src}
          alt='Logo Neo Consulting'
        />
      </div>
    </div>
  )
}

export default FormHeader
