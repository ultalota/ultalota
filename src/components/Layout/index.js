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
          {
            name: `msapplication-TileColor`,
            content: config.themeColor,
          },
          {
            name: `theme-color`,
            content: config.themeColor,
          },
        ]}
        link={[
          {
            rel: `apple-touch-icon`,
            href: `/icons/apple-touch-icon.png`,
            sizes: `180x180`,
          },
          {
            rel: `icon`,
            type: `image/png`,
            href: `/favicon-32x32.png`,
            sizes: `32x32`,
          },
          {
            rel: `icon`,
            type: `image/png`,
            href: `/favicon-16x16.png`,
            sizes: `16x16`,
          },
          {
            rel: `mask-icon`,
            href: `/icons/safari-pinned-tab.svg`,
            color: config.themeColor,
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
