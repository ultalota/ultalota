import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import ContactPageTemplate from "../../components/ContactPageTemplate"

const ContactPagePreview = ({ entry }) => {
  return (
    <div>
      <Layout>
        <ContactPageTemplate
          title={entry.getIn(["data", "title"])}
          subtitle={entry.getIn(["data", "subtitle"])}
          meta_title={entry.getIn(["data", "meta_title"])}
          meta_description={entry.getIn(["data", "meta_description"])}
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
