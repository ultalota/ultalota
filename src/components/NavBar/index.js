import React, { useState } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import SearchBox from "../SearchBox"

const NavBar = () => {
  const [active, setActive] = useState(false)

  const toggleNavBar = () => {
    setActive(!active)
  }

  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => (
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link
                className="navbar-item is-uppercase has-text-black is-size-5"
                to="/"
              >
                <strong>Ulta</strong>Lota
              </Link>

              <a
                role="button"
                className={`button navbar-burger has-text-black ${
                  active ? "is-active" : ""
                }`}
                data-target="navMenu"
                aria-label="menu"
                aria-expanded="false"
                onClick={toggleNavBar}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div
              className={`navbar-menu ${active ? "is-active" : ""}`}
              id="navMenu"
            >
              <div className="navbar-end">
                <SearchBox searchIndex={data.siteSearchIndex.index} />
                <Link
                  className="navbar-item has-text-primary has-text-right"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="navbar-item has-text-primary has-text-right"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="navbar-item has-text-primary has-text-right"
                  to="/contact"
                >
                  Connect
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    />
  )
}

export default NavBar
