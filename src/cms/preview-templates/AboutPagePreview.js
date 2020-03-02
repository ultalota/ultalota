import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import AboutPageTemplate from "../../components/AboutPageTemplate"

const AboutPagePreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(["data", "title"])
  const image = entry.getIn(["data", "image"])
  const meta_title = entry.getIn(["data", "meta_title"])
  const meta_description = entry.getIn(["data", "meta_description"])
  const content = widgetFor("body")

  return (
    <div>
      <Layout>
        <AboutPageTemplate
          title={title}
          image={image}
          meta_title={meta_title}
          meta_description={meta_description}
          content={content}
        />
      </Layout>
    </div>
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
