import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_greenlife from '../images/logo_greenlife.jpg'

export default () => (
  <StaticQuery
    query={graphql`
      query GreenlifeQuery {
        greenlifesidebar: file(relativePath: { eq: "popups/9.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        thumbnail1: file(relativePath: { eq: "popups/10.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail2: file(relativePath: { eq: "popups/11.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail3: file(relativePath: { eq: "popups/12.jpg" }) {
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
            <Img fluid={data.greenlifesidebar.childImageSharp.fluid} />
          </div>
          <div className="col-md-6">
            <div className="logo-wrapper">
              <img alt="Logo Greenlife" src={logo_greenlife} />
            </div>
            <div className="text-wrapper">
              <p>
                GreenLife is another sister brand of GreenPan and was created
                with one goal in mind: bring healthy cooking within everyone’s
                reach. The brand focuses on healthy, fuss-free cookware that’s
                perfect for every day cooking. The colourful designs are an
                eye-catcher in every kitchen!
              </p>
            </div>

            <a
              className="link"
              href="https://www.greenlife-cookware.com"
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

            <Link
              className="link-previous"
              to="/greenchef"
              asModal
            >
              ← Go to Greenchef
            </Link>

            <Link
              className="link-next"
              to="/vitaverde"
              asModal
            >
              Go to VitaVerde →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
