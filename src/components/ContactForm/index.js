import React from "react"
import { Formik, Form, Field } from "formik"
import { navigate } from "gatsby-link"
import validationSchema from "./validationSchema"
import { encode } from "../../utils"

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    fetch("/?no-cache=1", {
      //eslint-disable-line
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...values,
      }),
    })
      .then(() => {
        navigate("/success")
        setSubmitting(false)
      })
      .catch(error => {
        console.log(error)
        alert("Error: Please Try Again!") //eslint-disable-line
        setSubmitting(false)
      })
  }

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className="field">
            <label className="label">Name*</label>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left">
                  <Field
                    className={`input ${
                      touched.name && errors.name ? "is-danger" : "is-white"
                    }`}
                    type="text"
                    id="name"
                    name="name"
                    aria-label="Name"
                  />

                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </p>
                {touched.name && errors.name && (
                  <p className="help is-danger">{errors.name}</p>
                )}
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Email*</label>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded has-icons-left has-icons-right">
                  <Field
                    className={`input ${
                      touched.email && errors.email ? "is-danger" : "is-white"
                    }`}
                    type="email"
                    id="email"
                    name="email"
                    aria-label="Email"
                  />

                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                </p>
                {touched.email && errors.email && (
                  <p className="help is-danger">{errors.email}</p>
                )}
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Message*</label>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <Field
                    className={`textarea ${
                      touched.message && errors.message
                        ? "is-danger"
                        : "is-primary"
                    }`}
                    component="textarea"
                    rows="6"
                    id="message"
                    name="message"
                    placeholder="Write a message..."
                    aria-label="Message"
                  />
                </div>
                {touched.message && errors.message && (
                  <p className="help is-danger">{errors.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="field is-grouped is-grouped-right">
            <p className="control">
              <input
                id="submit"
                name="submit"
                aria-label="Send Message"
                type="submit"
                value="Send Message"
                disabled={isSubmitting}
                className="button is-primary"
              />
            </p>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
