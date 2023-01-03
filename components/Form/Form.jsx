/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import style from './Form.module.scss'
import Breadscrumb from '../Breadscrumb/Breadscrumb'
import icon from '../../public/assets/Form/icon.svg'
import axios from 'axios'
import { servicesData } from '../../utilities/global/services'
import { useRouter } from 'next/router'
import firstStepImg from '../../public/assets/Form/step_1.svg'
import secondStepImg from '../../public/assets/Form/step_2.svg'
import thirdStepImg from '../../public/assets/Form/step_3.svg'
import fourthStepImg from '../../public/assets/Form/step_4.svg'

import firstStepImgMob from '../../public/assets/Form/step_1_mobile.svg'
// import secondStepImgMob from '../../public/assets/Form/step_2_mobile.svg'
import thirdStepImgMob from '../../public/assets/Form/step_3_mobile.svg'
// import fourthStepImgMob from '../../public/assets/Form/step_4_mobile.svg'

const Form = () => {
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    country: '',
    company: '',
    charge: '',
    employees: '',
    area: '',
    details: ''
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [step, setStep] = useState(1)
  const [data, setData] = useState('')
  const [checkedServices, setCheckedServices] = useState([])
  const [errorServices, setErrorServices] = useState(false)
  const router = useRouter()
  const [direct, setDirect] = useState(false)
  console.log('step', step)
  console.log('form error:', formErrors)
  useEffect(() => {
    if (!router.isReady) return
    const getOptions = () => {
      if (
        router.query.service !== 'default' &&
        router.query.solution === 'default'
      ) {
        setData(servicesData.find((e) => e.service === router.query.service))
      }
      if (
        (router.query.service !== 'default' &&
          router.query.solution !== 'default') ||
        (router.query.service === 'default' &&
          router.query.solution === 'default')
      ) {
        setDirect(true)
        setStep(2)
        setData(servicesData.find((e) => e.service === router.query.service))
        setCheckedServices(
          servicesData
            ?.find((e) => e.service === router.query.service)
            ?.solutions.find((e) => e.solution === router.query.solution).option
        )
      }
    }
    getOptions()
  }, [router.isReady, checkedServices])
  // console.log(direct)
  const handleSteps = (e) => {
    e.preventDefault()
    if (step === 1) {
      if (checkedServices.length > 0) {
        setStep(2)
      } else {
        setErrorServices(true)
      }
    }
    if (step === 2) {
      setFormErrors(validate(formValues))
    }
    if (step === 3) {
      setFormErrors(validate(formValues))
    }
    if (step === 4) {
      setFormErrors(validate(formValues))
    }
  }

  const handleBack = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleCheckboxes = (e) => {
    const { value, checked } = e.target
    if (checked) {
      setCheckedServices((pre) => [...pre, value])
    } else {
      setCheckedServices((pre) => {
        return [...pre.filter((e) => e !== value)]
      })
    }
  }
  const validateEmail = (email) => {
    const re = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i
    return re.test(email)
  }

  const validate = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Nombre es requerido'
    }
    if (!values.phone) {
      errors.phone = 'Celular es requerido'
    }
    if (!values.country) {
      errors.country = 'País es requerido'
    }
    if (!values.email) {
      errors.email = 'Email es requerido'
    }
    if (formValues.email !== '') {
      if (!validateEmail(formValues.email)) {
        errors.email = 'Ingrese un email valido'
      }
    }
    if (!values.company && step === 3) {
      errors.company = 'Compañia es requerido'
    }
    if (!values.charge && step === 3) {
      errors.charge = 'Puesto es requerido'
    }
    if (!values.employees && step === 3) {
      errors.employees = 'Cantidad de empleados es requerida'
    }
    if (!values.area && step === 3) {
      errors.area = 'Area es requerida'
    }
    if (!values.details && step === 4) {
      errors.details = 'Detalle es requerido'
    }
    return errors
  }

  const handleSubmit = (e) => {
    e?.preventDefault()
    const { chanel, source, medium, campaign } = handleParams()

    const contactObj = {
      properties: {
        servicios_interesados: direct
          ? checkedServices
          : checkedServices.join(', '),
        firstname: formValues.name,
        phone: formValues.phone,
        pais: formValues.country,
        email: formValues.email,
        company: formValues.company,
        cargo: formValues.charge,
        cantidad_de_empleados: formValues.employees,
        area: formValues.area,
        detalle_proyecto: formValues.details,
        p_gina_de_origen__c: data?.title,
        fuente_medio__c: source && medium ? source + '/' + medium : '',
        canal__c: chanel,
        campa_a__c: campaign
      }
    }

    axios
      .post(
        'https://us-central1-blog-neo.cloudfunctions.net/app/hubspot/create-contact',
        contactObj
      )
      .then(function (response) {
        console.log(response)
        router.push('thanks')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const handleParams = () => {
    const { utm_source, utm_medium, utm_campaign } = router.query
    const params = {}
    if (!utm_source && !utm_medium && !utm_campaign) {
      params.chanel = 'direct'
      params.source = ''
      params.medium = ''
      params.campaign = ''
      return params
    }
    if (utm_source && utm_medium && utm_campaign) {
      params.source = utm_source
      params.medium = utm_medium
      params.campaign = utm_campaign
      if (utm_medium === 'social') {
        params.chanel = 'social'
        return params
      }
      if (utm_medium === 'organic') {
        params.chanel = 'organic'
        return params
      }
      if (utm_medium === 'paidsocial') {
        params.chanel = 'paidsocial'
        return params
      }
      if (utm_medium === 'cpc') {
        if (utm_source === 'google') {
          params.chanel = 'search'
          return params
        }
        if (utm_source === 'google_pmax') {
          params.chanel = 'performace max'
          return params
        }
        if (utm_source === 'google_display') {
          params.chanel = 'display'
          return params
        }
        if (utm_source === 'google_youtube') {
          params.chanel = 'youtube'
          return params
        }
      }
    }
  }
  useEffect(() => {
    console.log(Object.keys(formErrors))
    if (step === 2 && Object.keys(formErrors).length === 0) {
      setStep(3)
    }
    if (step === 3 && Object.keys(formErrors).length === 0) {
      setStep(4)
    }
    if (step === 4 && Object.keys(formErrors).length === 0) {
      handleSubmit()
    }
  }, [formErrors])

  const getFirstStep = () => {
    return (
      <div className={style.form_container_form_first}>
        <h1 className={style.form_container_form_first_title}>
          ¿Cómo podemos ayudarte?
        </h1>
        <p className={style.form_container_form_first_desc}>
          Selecciona los servicios que necesitas para tu proyecto.
        </p>
        <div className={style.form_container_form_first_selects}>
          <div className={style.form_container_form_first_selects_left}>
            <div
              className={style.form_container_form_first_selects_left_header}
            >
              <img
                className={
                  style.form_container_form_first_selects_left_header_img
                }
                src={icon.src}
                alt='Icon Neo Consulting'
              />
              <p
                className={
                  style.form_container_form_first_selects_left_header_service
                }
              >
                {data?.title}
              </p>
            </div>
            <p className={style.form_container_form_first_selects_left_desc}>
              {data?.desc}
            </p>
          </div>
          <div className={style.form_container_form_first_selects_right}>
            {data?.options?.map((e, i) => {
              return (
                <div
                  key={i}
                  className={
                    style.form_container_form_first_selects_right_input
                  }
                >
                  <input
                    className={
                      style.form_container_form_first_selects_right_input_checkbox
                    }
                    type='checkbox'
                    checked={checkedServices.includes(e)}
                    value={e}
                    onChange={handleCheckboxes}
                  />
                  <span
                    className={
                      style.form_container_form_first_selects_right_input_title
                    }
                  >
                    {e}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
        {errorServices && <h1>Seleccione por lo menos un servicio</h1>}
      </div>
    )
  }
  const getSecondStep = () => {
    return (
      <div className={style.form_container_form_second}>
        <h1 className={style.form_container_form_second_title}>
          Completa tus datos
        </h1>
        <p className={style.form_container_form_second_desc}>
          Tus datos nos sirven para comunicarnos contigo
        </p>
        <div className={style.form_container_form_second_inputs}>
          <div className={style.form_container_form_second_inputs_input}>
            <label
              className={style.form_container_form_second_inputs_input_label}
              htmlFor=''
            >
              Nombre
            </label>
            <input
              className={style.form_container_form_second_inputs_input_text}
              type='text'
              placeholder='Escribe aquí tu nombre'
              required
              name='name'
              value={formValues.name}
              onChange={handleChange}
            />
            <p>{formErrors.name}</p>
          </div>
          <div className={style.form_container_form_second_inputs_input}>
            <label
              className={style.form_container_form_second_inputs_input_label}
              htmlFor=''
            >
              Celular
            </label>
            <input
              className={style.form_container_form_second_inputs_input_text}
              type='text'
              placeholder='999 999 999'
              required
              name='phone'
              value={formValues.phone}
              onChange={handleChange}
            />
            <p>{formErrors.phone}</p>
          </div>
          <div className={style.form_container_form_second_inputs_input}>
            <label
              className={style.form_container_form_second_inputs_input_label}
              htmlFor=''
            >
              País
            </label>
            <select
              className={style.form_container_form_second_inputs_input_text}
              required
              name='country'
              value={formValues.country}
              onChange={handleChange}
            >
              <option value=''>Seleccione</option>
              <option value='Perú'>Perú</option>
              <option value='Chile'>Chile</option>
              <option value='Colombia'>Colombia</option>
              <option value='Ecuador'>Ecuador</option>
              <option value='México'>México</option>
              <option value='Estados Unidos'>Estados Unidos</option>
              <option value='Otros'>Otros</option>
            </select>
            <p>{formErrors.country}</p>
          </div>
          <div className={style.form_container_form_second_inputs_input}>
            <label
              className={style.form_container_form_second_inputs_input_label}
              htmlFor=''
            >
              E-mail corporativo
            </label>
            <input
              className={style.form_container_form_second_inputs_input_text}
              type='email'
              placeholder='Escribe aquí tu E-mail'
              required
              name='email'
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
          </div>
        </div>
      </div>
    )
  }
  const getThirdStep = () => {
    return (
      <div className={style.form_container_form_second}>
        <h1 className={style.form_container_form_second_title}>
          Completa tus datos
        </h1>
        <p className={style.form_container_form_second_desc}>
          Queremos saber cómo darte una experiencia personalizada.
        </p>
        <div className={style.form_container_form_second_inputs}>
          <div className={style.form_container_form_second_inputs_input}>
            <label
              className={style.form_container_form_second_inputs_input_label}
            >
              Nombre de empresa
            </label>
            <input
              className={style.form_container_form_second_inputs_input_text}
              type='text'
              placeholder='Escribe aquí el nombre de empresa'
              required
              name='company'
              value={formValues.company}
              onChange={handleChange}
            />
            <p>{formErrors.company}</p>
          </div>
          <div className={style.form_container_form_second_inputs_input}>
            <label
              className={style.form_container_form_second_inputs_input_label}
              htmlFor=''
            >
              Puesto
            </label>
            <select
              className={style.form_container_form_second_inputs_input_text}
              required
              name='charge'
              value={formValues.charge}
              onChange={handleChange}
            >
              <option value=''>Seleccione</option>
              <option value='Director'>Director</option>
              <option value='Gerente General'>Gerente General</option>
              <option value='Gerente'>Gerente</option>
              <option value='Jefe'>Jefe</option>
              <option value='Coordinador'>Coordinador</option>
              <option value='Analista'>Analista</option>
              <option value='Practicante'>Practicante</option>
              <option value='Estudiante'>Estudiante</option>
              <option value='Otro'>Otro</option>
            </select>
            <p>{formErrors.charge}</p>
          </div>
          <div className={style.form_container_form_second_inputs_input}>
            <label
              className={style.form_container_form_second_inputs_input_label}
              htmlFor=''
            >
              Cantidad de empleados
            </label>
            <select
              className={style.form_container_form_second_inputs_input_text}
              required
              name='employees'
              value={formValues.employees}
              onChange={handleChange}
            >
              <option value=''>Seleccione</option>
              <option value='De 1 a 200 '>De 1 a 200</option>
              <option value='De 201 a  500 personas'>
                De 201 a 500 personas
              </option>
              <option value='De 501 a 1000 personas'>
                De 501 a 1000 personas
              </option>
              <option value='De 1001 a 5000 personas'>
                De 1001 a 5000 personas
              </option>
              <option value='De 5001 a 10000 personas'>
                De 5001 a 10000 personas
              </option>
              <option value='Más de 10000 personas'>
                Más de 10000 personas
              </option>
              <option value='Soy independiente'>Soy independiente</option>
            </select>
            <p>{formErrors.employees}</p>
          </div>
          <div className={style.form_container_form_second_inputs_input}>
            <label
              className={style.form_container_form_second_inputs_input_label}
              htmlFor=''
            >
              Área
            </label>
            <select
              className={style.form_container_form_second_inputs_input_text}
              required
              name='area'
              value={formValues.area}
              onChange={handleChange}
            >
              <option value=''>Seleccione</option>
              <option value='Marketing'>Marketing</option>
              <option value='Ventas / Comercial'>Ventas / Comercial</option>
              <option value='Recursos Humanos'>Recursos Humanos</option>
              <option value='Finanzas / Operaciones'>
                Finanzas / Operaciones
              </option>
              <option value='Innovación / Transformación Digital'>
                Innovación / Transformación Digital
              </option>
              <option value='Gerencia / Directorio'>
                Gerencia / Directorio
              </option>
              <option value='Consultoría'>Consultoría</option>
              <option value='Tecnología'>Tecnología</option>
              <option value='Contabilidad'>Contabilidad</option>
              <option value='Compras'>Compras</option>
              <option value='Otros'>Otros</option>
            </select>
            <p>{formErrors.area}</p>
          </div>
        </div>
      </div>
    )
  }

  const getFourthStep = () => {
    return (
      <div className={style.form_container_form_third}>
        <h1 className={style.form_container_form_third_title}>
          Cuéntanos sobre tu proyecto
        </h1>
        <p className={style.form_container_form_third_desc}>
          Queremos conocer los requerimientos de tu proyecto{' '}
        </p>
        <div className={style.form_container_form_third_input}>
          <label
            className={style.form_container_form_third_input_label}
            htmlFor=''
          >
            Escribe aquí
          </label>
          <textarea
            className={style.form_container_form_third_input_area}
            type='textarea'
            rows='4'
            name='details'
            value={formValues.details}
            onChange={handleChange}
            placeholder='Quiero...'
          />
        </div>
        <p>{formErrors.details}</p>
      </div>
    )
  }

  const getBackButton = () => {
    if (direct) {
      if (step !== 2) {
        return (
          <>
            <button
              onClick={handleBack}
              className={style.form_container_form_btns_back}
            >
              Atras
            </button>
          </>
        )
      }
    }
    if (!direct) {
      if (step !== 1) {
        return (
          <button
            onClick={handleBack}
            className={style.form_container_form_btns_back}
          >
            Atras
          </button>
        )
      }
    }
  }
  const getNextButton = () => {
    if (direct) {
      if (step !== 4) {
        return (
          <>
            <button
              onClick={handleSteps}
              className={style.form_container_form_btns_next}
            >
              Siguiente
            </button>
          </>
        )
      }
    }
    if (step !== 4) {
      return (
        <button
          onClick={handleSteps}
          className={style.form_container_form_btns_next}
        >
          Siguiente
        </button>
      )
    }
  }

  const getSendButton = () => {
    if (direct) {
      if (step === 4) {
        return (
          <>
            <button
              type='submit'
              onClick={handleSteps}
              className={style.form_container_form_btns_next}
            >
              Enviar
            </button>
          </>
        )
      }
    }
  }
  return (
    <div className={style.form}>
      <div className={style.form_container}>
        <Breadscrumb inside={true} value={data?.title} />
        <div className={style.form_container_steps}>
          <div className={style.form_container_steps_mobile}>
            {step === 1 && <img src={firstStepImgMob.src} alt='' />}
            {step === 2 && <img src={secondStepImg.src} alt='Neo Consulting Contacto' />}
            {step === 3 && <img src={thirdStepImgMob.src} alt='' />}
            {step === 4 && <img src={fourthStepImg.src} alt='Neo Consulting Contacto' />}
          </div>
          <div className={style.form_container_steps_desk}>
            {step === 1 && <img src={firstStepImg.src} alt='' />}
            {step === 2 && <img src={secondStepImg.src} alt='Neo Consulting Contacto' />}
            {step === 3 && <img src={thirdStepImg.src} alt='' />}
            {step === 4 && <img src={fourthStepImg.src} alt='Neo Consulting Contacto' />}
          </div>
        </div>
        <form className={style.form_container_form}>
          {step === 1 && getFirstStep()}
          {step === 2 && getSecondStep()}
          {step === 3 && getThirdStep()}
          {step === 4 && getFourthStep()}
          <div className={style.form_container_form_btns}>
            {getBackButton()}
            {getNextButton()}
            {getSendButton()}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
