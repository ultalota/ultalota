import React from "react"
import PropTypes from "prop-types"
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"
import "./styles.sass"

const ShareMini = props => {
  const { title, slug, excerpt, pathPrefix, siteUrl } = props
  const realPrefix = pathPrefix === "/" ? "" : pathPrefix
  const url = siteUrl + realPrefix + slug

  return (
    <div className="social-links-mini">
      <TwitterShareButton url={url} title={title}>
        <span className="icon has-text-grey">
          <i className="fab fa-twitter" aria-hidden="true" />
        </span>
      </TwitterShareButton>

      <FacebookShareButton url={url} quote={excerpt}>
        <span className="icon has-text-grey">
          <i className="fab fa-facebook-f" aria-hidden="true" />
        </span>
      </FacebookShareButton>

      <WhatsappShareButton url={url}>
        <span className="icon has-text-grey">
          <i className="fab fa-whatsapp" aria-hidden="true" />
        </span>
      </WhatsappShareButton>

      <LinkedinShareButton url={url} title={title} description={excerpt}>
        <span className="icon has-text-grey">
          <i className="fab fa-linkedin-in" aria-hidden="true" />
        </span>
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title}>
        <span className="icon has-text-grey">
          <i className="fab fa-reddit-alien" aria-hidden="true" />
        </span>
      </RedditShareButton>
    </div>
  )
}

ShareMini.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  excerpt: PropTypes.string,
  pathPrefix: PropTypes.string,
  siteUrl: PropTypes.string,
}

export default ShareMini
