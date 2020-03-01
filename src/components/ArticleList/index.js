import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import _ from "lodash"
import config from "../../../config"
import ShareMini from "../ShareMini"

const ArticleList = props => {
  const { posts } = props

  return (
    <div className="container">
      {posts
        .filter(post => post.node.frontmatter.templateKey === "article-page")
        .map(({ node: post }) => {
          return (
            <section key={post.id} className="section">
              <article className="article content">
                <header className="article-header">
                  <h1 className="is-size-2">
                    <span className="has-text-primary">
                      {post.frontmatter.date}&nbsp;
                    </span>

                    <Link className="has-text-black" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </h1>
                </header>

                <div className="article-meta">
                  <ShareMini
                    title={post.frontmatter.title}
                    slug={post.fields.slug}
                    excerpt={post.frontmatter.meta_description}
                    siteUrl={config.siteUrl}
                    pathPrefix={config.pathPrefix}
                  />
                  &nbsp;&nbsp;&#x7c;&nbsp;&nbsp;
                  <div className="article-tags">
                    {post.frontmatter.tags.map(tag => (
                      <Link
                        to={`/tags/${_.kebabCase(tag)}`}
                        key={tag}
                        className="has-text-black is-italic"
                      >
                        <small>#{tag} &nbsp;</small>
                      </Link>
                    ))}
                  </div>
                </div>

                <br />

                <p>
                  <small className="has-text-weight-light has-text-grey-light is-uppercase">
                    {post.excerpt}
                  </small>
                </p>

                <br />

                <Link className="button is-small" to={post.fields.slug}>
                  Continue Reading →
                </Link>
              </article>
            </section>
          )
        })}
    </div>
  )
}

ArticleList.propTypes = {
  posts: PropTypes.array,
}

export default ArticleList
