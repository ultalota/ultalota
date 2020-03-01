import React from "react"
import PropTypes from "prop-types"

const Socials = props => {
  const { userLinks, siteRss } = props

  return (
    <div className="tabs is-small is-right">
      <ul>
        {userLinks.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <span className="icon">
                <i className={link.iconClassName} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
        <li>
          <a href={`feed:https://ultalota.com${siteRss}`}>
            <span className="icon">
              <i className="fas fa-rss" aria-hidden="true" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}

Socials.propTypes = {
  userLinks: PropTypes.array,
  siteRss: PropTypes.string,
}

export default Socials
