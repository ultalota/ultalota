import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../../components/Layout"

const TagsPage = props => {
  const {
    data: {
      allMarkdownRemark: { group },
      site: {
        siteMetadata: { title },
      },
    },
  } = props

  return (
    <Layout>
      <Helmet title={`Tags | ${title}`} />
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <section>
                <div className="content">
                  <h3 className="has-text-weight-semibold is-size-2 title">
                    Tags
                  </h3>
                </div>
              </section>
              <ul className="taglist">
                {group.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link
                      className="has-text-primary"
                      to={`/tags/${_.kebabCase(tag.fieldValue)}/`}
                    >
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array,
    }),
  }),
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
