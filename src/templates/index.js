import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import config from "../../config"
import Layout from "../components/Layout"
import ArticleList from "../components/ArticleList"

const PaginationLink = props => {
  if (!props.test) {
    return (
      <Link to={props.url} className="button is-rounded">
        {props.text}
      </Link>
    )
  } else {
    return (
      <span disabled className="button is-rounded is-disabled">
        {props.text}
      </span>
    )
  }
}

PaginationLink.propTypes = {
  test: PropTypes.boolean,
  url: PropTypes.string,
  text: PropTypes.string,
}

const HomePage = props => {
  const { pageContext } = props
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? "" : "/" + (index - 1).toString()
  const nextUrl = "/" + (index + 1).toString()

  /*eslint-disable */
  const websiteSchemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: config.siteUrl,
    name: config.siteTitle,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
  }
  /* eslint-enable */

  return (
    <Layout>
      <Helmet>
        <title>Home | {config.siteTitle}</title>
        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchemaOrgJSONLD)}
        </script>
        <link rel="canonical" href={config.siteUrl} />
      </Helmet>
      <div>
        <ArticleList posts={group} />
        <section className="section">
          <div className="buttons is-centered">
            <PaginationLink
              test={first}
              url={previousUrl}
              text="Previous Page"
            />
            <PaginationLink test={last} url={nextUrl} text="Next Page" />
          </div>
        </section>
      </div>
    </Layout>
  )
}

HomePage.propTypes = {
  pageContext: PropTypes.shape({
    index: PropTypes.number,
    first: PropTypes.boolean,
    last: PropTypes.boolean,
    group: PropTypes.array,
  }),
}

export default HomePage
