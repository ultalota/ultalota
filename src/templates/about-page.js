import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import config from "../../config"
import Layout from "../components/Layout"
import AboutPageTemplate from "../components/AboutPageTemplate"
import { HTMLContent } from "../components/Content"

const AboutPage = props => {
  const { data } = props
  const { markdownRemark: post } = data

  const breadcrumbSchemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": config.siteUrl,
          name: "Home",
          image: config.siteUrl + "/icons/icon-512x512.png",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": config.siteUrl + "/about/",
          name: "About",
          image: config.siteUrl + "/icons/icon-512x512.png",
        },
      },
    ],
  }

  const aboutPageSchemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "AboutPage",
    url: config.siteUrl + "/about/",
    headline: post.frontmatter.title,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": config.siteUrl + "/about/",
    },
    image: {
      "@type": "ImageObject",
      url: post.frontmatter.image,
      width: 3120,
      height: 1394,
    },
    publisher: {
      "@type": "Organization",
      name: config.siteTitle,
      logo: {
        "@type": "ImageObject",
        url: config.siteUrl + "/icons/icon-512x512.png",
        width: 512,
        height: 512,
      },
    },
    description: post.frontmatter.meta_description,
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>

        <meta name="description" content={post.frontmatter.meta_description} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchemaOrgJSONLD)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchemaOrgJSONLD)}
        </script>

        <link rel="canonical" href={`${config.siteUrl}/about`} />
      </Helmet>

      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.object,
        meta_title: PropTypes.string,
        meta_description: PropTypes.string,
      }),
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1075, quality: 72) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
        meta_title
        meta_description
      }
    }
  }
`
