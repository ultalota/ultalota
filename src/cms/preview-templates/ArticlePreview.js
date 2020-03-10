import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import ArticleTemplate from "../../components/ArticleTemplate"

const ArticlePreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(["data", "title"])
  const cover = { publicURL: entry.getIn(['data', 'cover']) }
  const meta_title = entry.getIn(["data", "meta_title"])
  const meta_description = entry.getIn(["data", "meta_description"])
  const content = widgetFor("body")
  const tags = entry.getIn(["data", "tags"])

  return (
    <div>
      <Layout>
        <ArticleTemplate
          content={content}
          cover={cover}
          meta_title={meta_title}
          meta_desc={meta_description}
          tags={tags}
          title={title}
        />
      </Layout>
    </div>
  )
}

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePreview
