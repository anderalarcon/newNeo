import { useState } from 'react'
import style from './Form.module.scss'
import logoNeo from '../../public/assets/Form/logo_neo.svg'
import Breadscrumb from '../Breadscrumb/Breadscrumb'
import icon from '../../public/assets/Form/icon.svg'
const Form = () => {
  const [step, setStep] = useState(1)
  const [test, setTest] = useState('')

  const handleSteps = (e) => {
    e.preventDefault()
    setStep(step + 1)
    setTest('hola')
  }
  console.log(step)
  console.log(test)

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
                alt=''
              />
              <p
                className={
                  style.form_container_form_first_selects_left_header_service
                }
              >
                Consultoría CRM
              </p>
            </div>
            <p className={style.form_container_form_first_selects_left_desc}>
              Crea, desarrolla y mejora la relación con tus clientes.
            </p>
            <hr />
          </div>
          <div className={style.form_container_form_first_selects_right}>
            <div
              className={style.form_container_form_first_selects_right_input}
            >
              <input
                className={
                  style.form_container_form_first_selects_right_input_checkbox
                }
                type='checkbox'
                name=''
                id=''
              />{' '}
              <span
                className={
                  style.form_container_form_first_selects_right_input_title
                }
              >
                Quiero que gestionen mi CRM de manera integral
              </span>
            </div>
            <div
              className={style.form_container_form_first_selects_right_input}
            >
              <input
                className={
                  style.form_container_form_first_selects_right_input_checkbox
                }
                type='checkbox'
                name=''
                id=''
              />{' '}
              <span
                className={
                  style.form_container_form_first_selects_right_input_title
                }
              >
                Quiero que gestionen mi CRM de manera integral
              </span>
            </div>{' '}
            <div
              className={style.form_container_form_first_selects_right_input}
            >
              <input
                className={
                  style.form_container_form_first_selects_right_input_checkbox
                }
                type='checkbox'
                name=''
                id=''
              />{' '}
              <span
                className={
                  style.form_container_form_first_selects_right_input_title
                }
              >
                Quiero que gestionen mi CRM de manera integral
              </span>
            </div>{' '}
            <div
              className={style.form_container_form_first_selects_right_input}
            >
              <input
                className={
                  style.form_container_form_first_selects_right_input_checkbox
                }
                type='checkbox'
                name=''
                id=''
              />{' '}
              <span
                className={
                  style.form_container_form_first_selects_right_input_title
                }
              >
                Quiero que gestionen mi CRM de manera integral
              </span>
            </div>
          </div>
        </div>
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
            />
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
            />
          </div>{' '}
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
            />
          </div>{' '}
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
            />
          </div>{' '}
          <div className={style.form_container_form_second_inputs_input}>
            <label
              className={style.form_container_form_second_inputs_input_label}
              htmlFor=''
            >
              E-mail corporativo
            </label>
            <input
              className={style.form_container_form_second_inputs_input_text}
              type='text'
              placeholder='Escribe aquí tu E-mail'
            />
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
          ></label>
          <textarea
            className={style.form_container_form_third_input_area}
            type='textarea'
            rows='4'
          />
        </div>
      </div>
    )
  }
  return (
    <div className={style.form}>
      <div className={style.form_container}>
        <img
          className={style.form_container_logo}
          src={logoNeo.src}
          alt='Logo Neo Consulting'
        />
        <Breadscrumb />
        <div className={style.form_container_steps}>
          <div>
            <p>Nuestros Servicios</p>
          </div>
          <div>
            <p>Datos personales</p>
          </div>
          <div>
            <p>Sobre tu proyecto</p>
          </div>
        </div>
        <form className={style.form_container_form}>
          {step === 1 && getFirstStep()}
          {step === 2 && getSecondStep()}
          {step === 3 && getThirdStep()}

          {step !== 3 && (
            <button
              onClick={handleSteps}
              className={style.form_container_form_btn}
            >
              Siguiente
            </button>
          )}
          {step === 3 && (
            <button type='submit' className={style.form_container_form_btn}>
              Enviar
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default Form
