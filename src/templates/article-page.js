import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import config from "../../config"
import Layout from "../components/Layout"
import SE0 from "../components/SEO"
import { HTMLContent } from "../components/Content"
import ArticleTemplate from "../components/ArticleTemplate"
import Share from "../components/Share"
import Disqus from "../components/Disqus"

const ArticlePage = props => {
  const {
    data: { markdownRemark: post },
  } = props

  return (
    <Layout>
      <SE0
        title={post.frontmatter.title}
        meta_title={post.frontmatter.meta_title}
        meta_desc={post.frontmatter.meta_description}
        cover={post.frontmatter.cover.publicURL}
        slug={post.fields.slug}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
      />

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ArticleTemplate
                content={post.html}
                contentComponent={HTMLContent}
                date={post.frontmatter.date}
                cover={post.frontmatter.cover}
                slug={post.fields.slug}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                excerpt={post.frontmatter.meta_description}
                author={post.frontmatter.author}
                siteUrl={config.siteUrl}
                pathPrefix={config.pathPrefix}
              />

              <Share
                title={post.frontmatter.title}
                slug={post.fields.slug}
                excerpt={post.frontmatter.meta_description}
                siteUrl={config.siteUrl}
                pathPrefix={config.pathPrefix}
              />

              <Disqus
                title={post.frontmatter.title}
                slug={post.fields.slug}
                siteUrl={config.siteUrl}
                disqusShortname={config.disqusShortname}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        cover: PropTypes.object,
        meta_title: PropTypes.string,
        meta_description: PropTypes.string,
        tags: PropTypes.array,
      }),
    }),
  }),
}

export default ArticlePage

export const articlePageQuery = graphql`
  query ArticlePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 1075, quality: 72) {
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
        author
        meta_title
        meta_description
        tags
      }
    }
  }
`
