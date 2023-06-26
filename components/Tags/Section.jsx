import React from 'react'
import PropTypes from 'prop-types'
import './Section.module.scss'
const Section = ({ children }) => {
  return <section className="section container">{children}</section>
}

Section.propTypes = {
  children: PropTypes.array
}

export default Section
