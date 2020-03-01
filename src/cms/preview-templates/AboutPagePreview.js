import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import AboutPageTemplate from "../../components/AboutPageTemplate"

const AboutPagePreview = ({ entry, widgetFor }) => (
  <div>
    <Layout>
      <AboutPageTemplate
        title={entry.getIn(["data", "title"])}
        image={entry.getIn(["data", "image"])}
        meta_title={entry.getIn(["data", "meta_title"])}
        meta_description={entry.getIn(["data", "meta_description"])}
        content={widgetFor("body")}
      />
    </Layout>
  </div>
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
