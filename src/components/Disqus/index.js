import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

const Disqus = props => {
  const { title, slug, siteUrl, disqusShortname } = props
  if (!disqusShortname) {
    return null
  }
  const url = siteUrl + slug

  return (
    <ReactDisqusComments
      shortname={disqusShortname}
      identifier={slug}
      title={title}
      url={url}
      onNewComment={() => console.log("New Comment!")}
    />
  )
}

Disqus.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  disqusShortname: PropTypes.string.isRequired,
}

export default Disqus
