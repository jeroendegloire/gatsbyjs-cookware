import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_greenchef from '../images/logo_greenchef.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query GreenchefQuery {
        greenchefsidebar: file(relativePath: { eq: "popups/5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        thumbnail1: file(relativePath: { eq: "popups/6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail2: file(relativePath: { eq: "popups/7.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail3: file(relativePath: { eq: "popups/8.jpg" }) {
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
            <Img fluid={data.greenchefsidebar.childImageSharp.fluid} />
          </div>
          <div className="col-md-6">
            <div className="logo-wrapper">
              <img alt="Logo Greenchef" src={logo_greenchef} />
            </div>
            <div className="text-wrapper">
              <p>
                GreenChef is a sister brand of GreenPan, known for its natural
                ceramic non-stick coating and smart design. The products are
                affordable and easy to use. They’re great for people who want to
                cook healthy, but don’t want to spend hours in the kitchen!
              </p>
            </div>

            <a
            className="link"
              href="https://www.greenchef-cookware.com"
              target="_blank"
              rel="noreferrer noopener"
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
              to="/greenpan"
              asModal
            >
              ← Go to Greenpan
            </Link>

            <Link
              className="link-next"
              to="/greenlife"
              asModal
            >
              Go to Greenlife →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
