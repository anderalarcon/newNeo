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

import firstStepImgMob from '../../public/assets/Form/step_1_mobile.svg'
import secondStepImgMob from '../../public/assets/Form/step_2_mobile.svg'
import thirdStepImgMob from '../../public/assets/Form/step_3_mobile.svg'

const Form = () => {
  const initialValues = {
    company: '',
    name: '',
    phone: '',
    job: '',
    email: '',
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
            .find((e) => e.service === router.query.service)
            .solutions.find((e) => e.solution === router.query.solution).option
        )
      }
    }
    getOptions()
  }, [router.isReady, checkedServices])

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
  }

  const handleBack = () => {
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
    if (!values.company) {
      errors.company = 'Compañia es requerido'
    }
    if (!values.name) {
      errors.name = 'Nombre es requerido'
    }
    if (!values.phone) {
      errors.phone = 'Celular es requerido'
    }
    if (!values.job) {
      errors.job = 'Cargo es requerido'
    }
    if (!values.email) {
      errors.email = 'Email es requerido'
    }
    if (formValues.email !== '') {
      if (!validateEmail(formValues.email)) {
        errors.email = 'Ingrese un email valido'
      }
    }
    if (!values.details && step === 3) {
      errors.details = 'Detalle es requerido'
    }
    return errors
  }

  const handleSubmit = (e) => {
    e?.preventDefault()
    const contactObj = {
      properties: {
        servicios_interesados: direct
          ? checkedServices
          : checkedServices.join(', '),
        company: formValues.company,
        firstname: formValues.name,
        phone: formValues.phone,
        jobtitle: formValues.job,
        email: formValues.email,
        detalle_proyecto: formValues.details,
        p_gina_de_origen__c: 'to do',
        fuente_medio__c: 'to do',
        canal__c: 'to do',
        campa_a__c: 'to do'
      }
    }

    axios
      .post(
        'http://127.0.0.1:5001/blog-neo/us-central1/app/hubspot/create-contact',
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

  useEffect(() => {
    if (step === 2 && Object.keys(formErrors).length === 0) {
      setStep(3)
    }
    if (step === 3 && Object.keys(formErrors).length === 0) {
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
            {/* <hr /> */}
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
              Empresa
            </label>
            <input
              className={style.form_container_form_second_inputs_input_text}
              type='text'
              placeholder='Escribe aquí la empresa'
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
              Cargo
            </label>
            <input
              className={style.form_container_form_second_inputs_input_text}
              type='text'
              placeholder='Escribe aquí tu cargo'
              required
              name='job'
              value={formValues.job}
              onChange={handleChange}
            />
            <p>{formErrors.job}</p>
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
      <div className={style.form_container_form_third}>
        <h1 className={style.form_container_form_third_title}>
          Cuéntanos sobre tu proyecto
        </h1>
        <p className={style.form_container_form_third_desc}>
          Tus datos nos sirven para comunicarnos contigo
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
  return (
    <div className={style.form}>
      <div className={style.form_container}>
        <Breadscrumb inside={true} value={data?.title} />
        <div className={style.form_container_steps}>
          <div className={style.form_container_steps_mobile}>
            {step === 1 && <img src={firstStepImgMob.src} alt='' />}
            {step === 2 && <img src={secondStepImgMob.src} alt='' />}
            {step === 3 && <img src={thirdStepImgMob.src} alt='' />}
          </div>
          <div className={style.form_container_steps_desk}>
            {step === 1 && <img src={firstStepImg.src} alt='' />}
            {step === 2 && <img src={secondStepImg.src} alt='' />}
            {step === 3 && <img src={thirdStepImg.src} alt='' />}
          </div>
        </div>
        <form className={style.form_container_form}>
          {step === 1 && getFirstStep()}
          {step === 2 && getSecondStep()}
          {step === 3 && getThirdStep()}

          {step !== 3 && (
            <div className={style.form_container_form_btns}>
              {step !== 1 && !direct && (
                <button
                  type='submit'
                  onClick={handleBack}
                  className={style.form_container_form_btns_back}
                >
                  Atras
                </button>
              )}

              <button
                type='submit'
                onClick={handleSteps}
                className={style.form_container_form_btns_next}
              >
                Siguiente
              </button>
            </div>
          )}
          {step === 3 && (
            <div className={style.form_container_form_btns}>
              <button
                onClick={handleBack}
                className={style.form_container_form_btns_back}
              >
                Atras
              </button>

              <button
                type='submit'
                onClick={handleSteps}
                className={style.form_container_form_btns_next}
              >
                Enviar
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Form
