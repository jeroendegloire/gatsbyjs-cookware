import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_bluediamond from '../images/logo_bluediamond.jpg'

export default () => (
  <StaticQuery
    query={graphql`
      query BlueDiamondQuery {
        bksidebar: file(relativePath: { eq: "popups/35.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail1: file(relativePath: { eq: "popups/36.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail2: file(relativePath: { eq: "popups/37.jpg" }) {
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
            <Img fluid={data.bksidebar.childImageSharp.fluid} />
          </div>
          <div className="col-md-6">
            <div className="logo-wrapper">
              <img alt="Logo Blue Diamond" src={logo_bluediamond} />
            </div>
            <div className="text-wrapper">
              <p>
                Blue Diamond is a new DRTV-brand, which offers strong,
                long-lasting ceramic non-stick cookware infused with millions of
                diamonds! The non-stick coating lasts 10x longer than any other
                non-stick coating. Plus, Blue Diamond is 5x harder and transfers
                heat 4x faster and more evenly than other cookware products.
                It’s the new standard in non-stick, toxin-free cookware!
              </p>
            </div>

            <a
              href="https://www.bluediamondpan.com/"
              className="link"
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

            <Link className="link-previous" to="/kochstar" asModal>
              ← Go to Kochstar
            </Link>

            <Link className="link-next" to="/chop-grill" asModal>
              Go to Chop &amp; Grill →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
