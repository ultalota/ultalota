import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Content from "../Content"

const AboutPageTemplate = props => {
  const { title, content, image, contentComponent } = props
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <section>
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2 title">
                  {title}
                </h3>
              </div>
            </section>

            {!!image && !!image.childImageSharp ? (
              <Img
                className="image is-full"
                fluid={image.childImageSharp.fluid}
                alt={title}
                style={{ width: "100%" }}
              />
            ) : (
              <img
                className="image is-full"
                src={image.publicURL ? image.publicURL : image}
                alt={title}
                style={{ width: "100%" }}
              />
            )}

            <div className="section">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
