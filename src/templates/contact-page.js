import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import config from "../../config"
import Layout from "../components/Layout"
import ContactPageTemplate from "../components/ContactPageTemplate"

const ContactPage = props => {
  const {
    data: {
      markdownRemark: { frontmatter },
    },
  } = props

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.meta_title}</title>

        <meta name="description" content={frontmatter.meta_description} />

        <link rel="canonical" href={`${config.siteUrl}/contact`} />
      </Helmet>

      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        meta_title: PropTypes.string,
        meta_description: PropTypes.string,
      }),
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
      }
    }
  }
`
