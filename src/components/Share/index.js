import React from "react"
import PropTypes from "prop-types"
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share"
import "./styles.sass"

const Share = props => {
  const { title, slug, excerpt, pathPrefix, siteUrl } = props
  const realPrefix = pathPrefix === "/" ? "" : pathPrefix
  const url = siteUrl + realPrefix + slug

  return (
    <div className="social-links">
      <RedditShareButton url={url} title={title}>
        <span className="icon has-text-grey">
          <i className="fab fa-reddit-square fa-2x" aria-hidden="true" />
        </span>
      </RedditShareButton>

      <TwitterShareButton url={url} title={title}>
        <span className="icon has-text-grey">
          <i className="fab fa-twitter-square fa-2x" aria-hidden="true" />
        </span>
      </TwitterShareButton>

      <WhatsappShareButton url={url}>
        <span className="icon has-text-grey">
          <i className="fab fa-whatsapp-square fa-2x" aria-hidden="true" />
        </span>
      </WhatsappShareButton>

      <FacebookShareButton url={url} quote={excerpt}>
        <span className="icon has-text-grey">
          <i className="fab fa-facebook fa-2x" aria-hidden="true" />
        </span>
      </FacebookShareButton>

      <LinkedinShareButton url={url} title={title} description={excerpt}>
        <span className="icon has-text-grey">
          <i className="fab fa-linkedin fa-2x" aria-hidden="true" />
        </span>
      </LinkedinShareButton>
    </div>
  )
}

Share.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  excerpt: PropTypes.string,
  pathPrefix: PropTypes.string,
  siteUrl: PropTypes.string,
}

export default Share
