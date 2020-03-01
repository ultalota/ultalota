import React from "react"
import Layout from "../../components/Layout"

const SuccessPage = () => (
  <Layout>
    <section className="hero is-primary is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section has-text-centered">
                <h1 className="title">Success</h1>
                <h2 className="subtitle">
                  Your Message Was Sent Successfully.
                </h2>
                <br />
                <p>We'll contact you ASAP.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default SuccessPage
