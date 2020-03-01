import React from "react"
import PropTypes from "prop-types"

const Footer = props => {
  const { copyright } = props

  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>{copyright}</p>

          <small>
            Made in&nbsp;
            <a
              href="https://theleakycauldronblog.com/contact"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              India
            </a>
            . Powered by&nbsp;
            <a
              href="https://www.gatsbyjs.org"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              Gatsby
            </a>
            .
          </small>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
}

export default Footer
