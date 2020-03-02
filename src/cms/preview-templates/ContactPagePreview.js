import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import ContactPageTemplate from "../../components/ContactPageTemplate"

const ContactPagePreview = ({ entry }) => {
  const title = entry.getIn(["data", "title"])
  const subtitle = entry.getIn(["data", "subtitle"])
  const meta_title = entry.getIn(["data", "meta_title"])
  const meta_description = entry.getIn(["data", "meta_description"])

  return (
    <div>
      <Layout>
        <ContactPageTemplate
          title={title}
          subtitle={subtitle}
          meta_title={meta_title}
          meta_description={meta_description}
        />
      </Layout>
    </div>
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ContactPagePreview
