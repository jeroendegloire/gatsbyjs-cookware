import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_greenpan from '../images/logo_greenpan.jpg'

export default () => (
  <StaticQuery
    query={graphql`
      query GreenpanQuery {
        greenpansidebar: file(relativePath: { eq: "popups/1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail1: file(relativePath: { eq: "popups/2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail2: file(relativePath: { eq: "popups/3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail3: file(relativePath: { eq: "popups/4.jpg" }) {
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
            <Img fluid={data.greenpansidebar.childImageSharp.fluid} />
          </div>
          <div className="col-md-6">
            <div className="logo-wrapper">
              <img alt="Logo Greenpan" src={logo_greenpan} />
            </div>
            <div className="text-wrapper">
              In 2007 GreenPan introduced healthy ceramic non-stick cookware
              into the market. It was the start of a worldwide cookware
              revolution. Unlike traditional non-stick cookware GreenPan doesn’t
              use any toxic chemicals. Its Thermolon™ coating is made with
              natural materials, such as sand, and doesn’t contain PFOA, PFAS,
              lead or cadmium. The beautiful design and high quality materials
              result in a unique cooking experience. It’s the perfect brand for
              passionate chefs who want to cook healthy without compromising on
              performance!
            </div>

            <a
              className="link"
              href="https://www.greenpan.com/"
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
              className="link-next"
              to="/greenchef"
              asModal
            >
              Go to Greenchef →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
