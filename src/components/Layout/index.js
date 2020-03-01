import React from "react"
import Helmet from "react-helmet"
import config from "../../../config"
import "../../assets/sass/styles.sass"
import "../../assets/css/fontawesome-all.min.css"
import NavBar from "../NavBar"
import Socials from "../Socials"
import Footer from "../Footer"

const Layout = props => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: `en`,
        }}
        title={config.siteTitle}
        meta={[
          {
            name: `description`,
            content: config.siteDescription,
          },
          {
            name: `viewport`,
            content: `width=device-width, initial-scale=1`,
          },
        ]}
      />
      <div className="wrapper">
        <Socials userLinks={config.userLinks} siteRss={config.siteRss} />
        <NavBar />
        <>{props.children}</>
        <Footer copyright={config.copyright} />
      </div>
    </>
  )
}

export default Layout
