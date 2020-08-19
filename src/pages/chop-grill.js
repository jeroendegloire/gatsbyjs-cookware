import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_chopgrill from '../images/logo_chopgrill.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query ChopGrillQuery {
        bksidebar: file(relativePath: { eq: "popups/38.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail1: file(relativePath: { eq: "popups/39.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail2: file(relativePath: { eq: "popups/40.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        # thumbnail3: file(relativePath: { eq: "popups/24.jpg" }) {
        #   childImageSharp {
        #     fluid(maxWidth: 1200, maxHeight: 1200) {
        #       ...GatsbyImageSharpFluid_withWebp
        #     }
        #   }
        # }
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
              <img alt="Logo Chopp &amp; Grill" src={logo_chopgrill} />
            </div>
            <div className="text-wrapper">
              <p>
                Chop &amp; Grill has been designed as a loyalty collection for
                GreenPan. The range contains everything you need to create the
                most delicious grilled dishes! Prepare your meat, fish, and
                vegetables like a professional with high-quality sets of knives.
                Or show off your skills with the special grill pan and table
                bbq! The Chop &amp; Grill collection by GreenPan is made of
                high-quality materials and has a beautiful design. An
                eye-catcher in every kitchen!
              </p>
            </div>

            <a
              href="https://chopandgrill.greenpan.com/"
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
              {/* <div className="image-wrapper">
                <Img fluid={data.thumbnail3.childImageSharp.fluid} />
              </div> */}
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

            <Link className="link-previous" to="/blue-diamond" asModal>
              ← Go to Blue Diamond
            </Link>

            <Link className="link-next" to="/moods" asModal>
              Go to Moods →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
