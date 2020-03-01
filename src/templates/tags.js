import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const TagRoute = props => {
  const {
    data: {
      allMarkdownRemark: { edges: posts, totalCount },
      site: {
        siteMetadata: { title },
      },
    },
    pageContext: { tag },
  } = props

  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`

  return (
    <Layout>
      <Helmet title={`${tag} | ${title}`} />

      <section className="section">
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>

              <ul className="taglist">
                {posts.map(post => (
                  <li key={post.node.fields.slug}>
                    <Link to={post.node.fields.slug}>
                      <h2 className="is-size-2">
                        {post.node.frontmatter.title}
                      </h2>
                    </Link>
                  </li>
                ))}
              </ul>

              <p>
                <Link to="/tags/" className="has-text-primary">
                  Browse all tags
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

TagRoute.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string,
  }),
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
      totalCount: PropTypes.number,
    }),
  }),
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
