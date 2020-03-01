import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/Layout"
import ArticleTemplate from "../../components/ArticleTemplate"

const ArticlePreview = ({ entry, widgetFor }) => (
  <div>
    <Layout>
      <ArticleTemplate
        content={widgetFor("body")}
        cover={entry.getIn(["data", "cover"])}
        meta_title={entry.getIn(["data", "meta_title"])}
        meta_desc={entry.getIn(["data", "meta_description"])}
        tags={entry.getIn(["data", "tags"])}
        title={entry.getIn(["data", "title"])}
      />
    </Layout>
  </div>
)

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArticlePreview
