/* eslint-disable camelcase */
import style from './Form.module.scss'
import { useEffect, useState } from 'react'
import { servicesData } from '../../utilities/form/services'
import { useRouter } from 'next/router'
import axios from 'axios'

import Breadscrumb from '../Breadscrumb/Breadscrumb'
import icon from '../../public/assets/Form/icon.svg'

import firstStepImg from '../../public/assets/Form/step_1.svg'
import secondStepImg from '../../public/assets/Form/step_2.svg'
import thirdStepImg from '../../public/assets/Form/step_3.svg'
import fourthStepImg from '../../public/assets/Form/step_4.svg'

import firstStepImgMob from '../../public/assets/Form/step_1_mobile.svg'
import secondStepImgMob from '../../public/assets/Form/step_2_mobile.svg'
import thirdStepImgMob from '../../public/assets/Form/step_3_mobile.svg'
import fourthStepImgMob from '../../public/assets/Form/step_4_mobile.svg'

import { RotatingLines } from 'react-loader-spinner'

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
    details: '',
    knowing: ''
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [step, setStep] = useState(1)
  const [data, setData] = useState('')
  const [checkedServices, setCheckedServices] = useState([])
  const [errorServices, setErrorServices] = useState(false)
  const router = useRouter()
  const [direct, setDirect] = useState(false)
  const [isContact, setIsContact] = useState(false)
  const [isNewContact, setIsNewContact] = useState(false)
  const [isHandle, setIsHandle] = useState(false)
  const [contactId, setContactId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [politics, setPolitics] = useState(false)
  const [comunications, setComunications] = useState(false)

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
      setFormErrors(validateInputs(formValues))
    }
    if (step === 3) {
      setFormErrors(validateInputs(formValues))
    }
    if (step === 4) {
      setFormErrors(validateInputs(formValues))
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

  const handlePolitics = (e) => {
    if (e.target.name === 'politics') {
      setPolitics(e.target.checked)
    }
    if (e.target.name === 'comunications') {
      setComunications(e.target.checked)
    }
  }

  const validateEmail = (email) => {
    const re = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i
    return re.test(email)
  }

  const validateInputs = (values) => {
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
    if (!values.knowing) {
      errors.knowing = 'Campo requerido'
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

  const formatDate = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const searchContact = (email) => {
    axios
      .post(
        'https://us-central1-blog-neo.cloudfunctions.net/app/hubspot/search',
        email
      )
      .then(function (response) {
        console.log(response)
        setIsHandle(true)
        if (response.data.total > 0) {
          setIsContact(true)
          setContactId(response?.data?.results[0]?.id)
        } else {
          setIsNewContact(true)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const createContact = (contactObj) => {
    axios
      .post(
        'https://us-central1-blog-neo.cloudfunctions.net/app/hubspot/create-contact',
        contactObj
      )
      .then(function (response) {
        console.log(response)
        setIsLoading(false)
        router.push('thanks')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const updateContact = (contactObj, contactId) => {
    const updatedDataObj = contactObj.properties
    axios
      .put(
        `https://us-central1-blog-neo.cloudfunctions.net/app/hubspot/update/${contactId}`,
        updatedDataObj
      )
      .then(function (response) {
        console.log(response)
        setIsLoading(false)
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
      params.lead_source = 'Directo'
      return params
    }
    if (utm_source && utm_medium && utm_campaign) {
      params.source = utm_source
      params.medium = utm_medium
      params.campaign = utm_campaign
      if (utm_medium === 'social') {
        params.chanel = 'social'
        params.lead_source = 'Social'
        return params
      }
      if (utm_medium === 'organic') {
        params.chanel = 'organic'
        params.lead_source = 'Orgánico'
        return params
      }
      if (utm_medium === 'paidsocial') {
        params.chanel = 'paidsocial'
        params.lead_source = 'Advertisement'
        return params
      }
      if (utm_medium === 'cpc') {
        params.lead_source = 'Advertisement'
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

  const handleSubmit = (e) => {
    e?.preventDefault()
    if (!isHandle) {
      setIsLoading(true)
      searchContact({ email: formValues.email })
    }
    if (isHandle) {
      const { chanel, source, medium, campaign, lead_source } = handleParams()
      const contactObj = {
        properties: {
          servicios_interesados: direct
            ? checkedServices
            : checkedServices.join(', '),
          firstname: formValues.name,
          phone: formValues.phone,
          pais: formValues.country,
          email: formValues.email,
          como_supiste_de_neo_consulting_: formValues.knowing,
          company: formValues.company,
          cargo: formValues.charge,
          cantidad_de_empleados: formValues.employees,
          area: formValues.area,
          detalle_proyecto: formValues.details,
          p_gina_de_origen__c: data?.title,
          fuente_medio__c: source && medium ? source + '/' + medium : '',
          canal__c: chanel,
          campa_a__c: campaign,
          lifecyclestage: 'lead',
          chapter: data?.chapter,
          leadsource: lead_source,
          tipo_de_servicio: data?.service_type,
          acepta_politicas: politics ? 'Si' : 'No',
          acepta_comunicaciones: comunications ? 'Si' : 'No'
        }
      }
      console.log('data sended', contactObj)
      if (isContact) {
        updateContact(contactObj, contactId)
      }

      if (isNewContact) {
        contactObj.properties.fecha_de_registro = formatDate()
        createContact(contactObj)
      }
    }
  }

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

          <div className={style.form_container_form_second_inputs_input}>
            <label
              className={style.form_container_form_second_inputs_input_label}
              htmlFor=''
            >
              ¿Cómo supiste de Neo Consulting?
            </label>
            <select
              className={style.form_container_form_second_inputs_input_text}
              required
              name='knowing'
              value={formValues.knowing}
              onChange={handleChange}
            >
              <option value=''>Seleccione</option>
              <option value='Artículos y columnas en periódicos / revistas'>
                Artículos y columnas en periódicos / revistas
              </option>
              <option value='Conozco a alguien que trabaja en Neo'>
                Conozco a alguien que trabaja en Neo
              </option>
              <option value='Evento'>Evento</option>
              <option value='Publicidad en Redes Sociales'>
                Publicidad en Redes Sociales
              </option>
              <option value='Publicidad en Buscadores (ejem. Google)'>
                Publicidad en Buscadores (ejem. Google)
              </option>
              <option value='Publicidad en Correo / Otras Webs'>
                Publicidad en Correo / Otras Webs
              </option>
              <option value='Recomendación de un colega de trabajo'>
                Recomendación de un colega de trabajo
              </option>
              <option value='Redes sociales de Neo'>
                Redes sociales de Neo
              </option>
              <option value='Redes sociales de terceros'>
                Redes sociales de terceros
              </option>
            </select>
            <p>{formErrors.knowing}</p>
          </div>
        </div>
      </div>
    )
  }
  console.log(checkedServices);
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
              <option value='De 1 a 200'>De 1 a 200</option>
              <option value='De 201 a 500 personas'>De 201 a 500 personas</option>
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
          <div className={style.form_container_form_third_input_checkbox}>
            <input
              type='checkbox'
              checked={politics}
              name='politics'
              onChange={handlePolitics}
            />
            <span>
              Acepto las{' '}
              <a href='/politica-de-privacidad'>políticas de privacidad</a>
            </span>
          </div>
          <div className={style.form_container_form_third_input_checkbox}>
            <input
              type='checkbox'
              checked={comunications}
              name='comunications'
              onChange={handlePolitics}
            />
            <span>Acepto que Neo me envié comunicaciones</span>
          </div>
        </div>
        <p>{formErrors.details}</p>
      </div>
    )
  }

  const getBackButton = () => {
    if (direct && !isLoading) {
      if (step !== 2) {
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
    if (!direct && !isLoading) {
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
    if (direct && !isLoading) {
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
    if (step !== 4 && !isLoading) {
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
    if (!isLoading) {
      if (step === 4) {
        return (
          <button
            type='submit'
            onClick={handleSteps}
            className={style.form_container_form_btns_next}
          >
            Enviar
          </button>
        )
      }
    }
  }

  const getSteps = () => {
    if (step === 1) {
      return getFirstStep()
    }
    if (step === 2) {
      return getSecondStep()
    }
    if (step === 3) {
      return getThirdStep()
    }
    if (step === 4) {
      return getFourthStep()
    }
  }

  const getStepImgs = (resolution) => {
    if (resolution === 'mobile') {
      if (step === 1) {
        return <img src={firstStepImgMob.src} alt='Neo Consulting Contacto' />
      }
      if (step === 2) {
        return <img src={secondStepImgMob.src} alt='Neo Consulting Contacto' />
      }

      if (step === 3) {
        return <img src={thirdStepImgMob.src} alt='Neo Consulting Contacto' />
      }

      if (step === 4) {
        return <img src={fourthStepImgMob.src} alt='Neo Consulting Contacto' />
      }
    }
    if (resolution === 'desktop') {
      if (step === 1) {
        return <img src={firstStepImg.src} alt='Neo Consulting Contacto' />
      }
      if (step === 2) {
        return <img src={secondStepImg.src} alt='Neo Consulting Contacto' />
      }

      if (step === 3) {
        return <img src={thirdStepImg.src} alt='Neo Consulting Contacto' />
      }

      if (step === 4) {
        return <img src={fourthStepImg.src} alt='Neo Consulting Contacto' />
      }
    }
    return null
  }

  const getLoader = () => {
    if (isLoading) {
      return (
        <div style={{ textAlign: 'center' }}>
          <RotatingLines
            strokeColor='#05058C'
            strokeWidth='5'
            animationDuration='0.75'
            width='96'
            visible={true}
          />
        </div>
      )
    }
    return null
  }

  useEffect(() => {
    if (!router.isReady) return
    const getOptions = () => {
      if ( // home service
        router.query.service !== 'default' &&
        router.query.solution === 'default'
      ) {
        console.log('caso home service papa')
        setData(servicesData.find((e) => e.service === router.query.service))
      }
      if ( // home solution
        (router.query.service === 'default' &&
          router.query.solution === 'default')
      ) {
        console.log('caso homes paises')
        setDirect(true)
        setStep(2)
        setData(servicesData.find((e) => e.service === router.query.service))
        setCheckedServices(
          servicesData
            ?.find((e) => e.service === router.query.service)
            ?.solutions.find((e) => e.solution === router.query.solution).option
        )
      }

      if (router.query.service !== 'default' && router.query.solution !== 'default') { // caso servicio especifico
        console.log('nuevo')
        setDirect(true)
        setStep(2)
        setData((servicesData.find((e) => e.service === router.query.service).solutions.find((e) => e.solution === router.query.solution)))
        setCheckedServices(
          servicesData
            ?.find((e) => e.service === router.query.service)
            ?.solutions.find((e) => e.solution === router.query.solution).option
        )
        console.log((servicesData.find((e) => e.service === router.query.service).solutions.find((e) => e.solution === router.query.solution)))
      }
    }
    getOptions()
  }, [router.isReady, checkedServices])

  useEffect(() => {
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

  useEffect(() => {
    if (isHandle) {
      handleSubmit()
    }
  }, [isContact, isNewContact])

  return (
    <div className={style.form}>
      <div className={style.form_container}>
        <Breadscrumb inside={true} value={data?.title} />
        <div className={style.form_container_steps}>
          <div className={style.form_container_steps_mobile}>
            {getStepImgs('mobile')}
          </div>
          <div className={style.form_container_steps_desk}>
            {getStepImgs('desktop')}
          </div>
        </div>
        <form className={style.form_container_form}>
          {getSteps()}
          <div className={style.form_container_form_btns}>
            {getBackButton()}
            {getNextButton()}
            {getSendButton()}
          </div>
          {getLoader()}
        </form>
      </div>
    </div>
  )
}

export default Form
