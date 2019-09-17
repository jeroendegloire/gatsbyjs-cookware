import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_vitaverde from '../images/logo_vitaverde.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query VitaVerdeQuery {
        vitaverdesidebar: file(relativePath: { eq: "popups/13.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail1: file(relativePath: { eq: "popups/14.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail2: file(relativePath: { eq: "popups/15.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail3: file(relativePath: { eq: "popups/16.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className="brand-popup row">
          <div className="col-md-6">
            <Img fluid={data.vitaverdesidebar.childImageSharp.fluid} />
          </div>
          <div className="col-md-6">
            <div className="logo-wrapper">
              <img alt="Logo VitaVerde" src={logo_vitaverde} />
            </div>
            <div className="text-wrapper">
              <p>
                VitaVerde is a brand for people who want to discover healthy
                ceramic non-stick cookware without breaking the bank. VitaVerde
                offers easy to use cookware for every day. The design is basic
                but functional and all products have a natural ceramic non-stick
                coating.
              </p>
            </div>

            <a
              className="link"
              href="https://www.vitaverde-cookware.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&#8250;&#8250;</span> VISIT WEBSITE
            </a>

            <div className="image-row-wrapper">
              <div className="image-wrapper">
                <Img fluid={data.thumbnail1.childImageSharp.fluid} />
              </div>
              <div className="image-wrapper">
                <Img fluid={data.thumbnail2.childImageSharp.fluid} />
              </div>
              <div className="image-wrapper">
                <Img fluid={data.thumbnail3.childImageSharp.fluid} />
              </div>
            </div>

            <Link
              className="button-back"
              to="/"
              state={{
                noScroll: true,
              }}
            >
              <img src={backIcon} className="back-icon" alt="" />
            </Link>

            <Link className="link-previous" to="/greenlife" asModal>
              ← Go to Greenlife
            </Link>

            <Link className="link-next" to="/food-e" asModal>
              Go to Food-E →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
