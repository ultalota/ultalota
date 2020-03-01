import React from "react"
import PropTypes from "prop-types"
import ContactForm from "../ContactForm"

const ContactPageTemplate = props => {
  const { title, subtitle } = props

  return (
    <section className="section">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h1 className="title">{title}</h1>

            <h2 className="subtitle">{subtitle}</h2>
          </div>

          <section className="section">
            <ContactForm />
          </section>
        </div>
      </div>
    </section>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default ContactPageTemplate
