import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image"
import "prismjs/themes/prism.css"
import config from "../../../config"
import Content from "../Content"
import ShareMini from "../ShareMini"

const ArticleTemplate = props => {
  const {
    content,
    date,
    contentComponent,
    cover,
    tags,
    title,
    slug,
    author,
    excerpt,
  } = props
  const PostContent = contentComponent || Content

  return (
    <article className="article content">
      <header className="article-header">
        <h1 className="is-size-2">{title}</h1>
      </header>

      <div className="article-meta">
        <div className="article-date">
          <small>
            <span className="has-text-primary">{date}</span>
          </small>
        </div>
        &nbsp;&nbsp;&#x7c;&nbsp;&nbsp;
        <div>
          <small>
            <span className="has-text-black-bis">{author}</span>
          </small>
        </div>
        &nbsp;&nbsp;&#x7c;&nbsp;&nbsp;
        <ShareMini
          title={title}
          slug={slug}
          excerpt={excerpt}
          siteUrl={config.siteUrl}
          pathPrefix={config.pathPrefix}
        />
        &nbsp;&nbsp;&#x7c;&nbsp;&nbsp;
        <div className="article-tags">
          {tags && tags.length ? (
            <div className="tags">
              {tags.map(tag => (
                <Link
                  to={`/tags/${_.kebabCase(tag)}`}
                  key={tag}
                  className="has-text-black is-italic"
                >
                  <small>#{tag}&nbsp;&nbsp;</small>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <br />
      <br />

      {!!cover && !!cover.childImageSharp ? (
        <Img
          className="image is-full"
          fluid={cover.childImageSharp.fluid}
          alt={title}
          style={{ width: "100%" }}
        />
      ) : (
        <img
          className="image is-full"
          src={cover.publicURL ? cover.publicURL : cover}
          alt={title}
          style={{ width: "100%" }}
        />
      )}

      <section className="section">
        <PostContent content={content} className="article-body" />
      </section>
    </article>
  )
}

ArticleTemplate.propTypes = {
  content: PropTypes.string,
  date: PropTypes.string,
  contentComponent: PropTypes.func,
  cover: PropTypes.any,
  tags: PropTypes.array,
  title: PropTypes.string,
  author: PropTypes.string,
  slug: PropTypes.string,
}

export default ArticleTemplate
