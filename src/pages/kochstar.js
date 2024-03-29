import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_kochstar from '../images/logo_kochstar.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query KochstarQuery {
        bksidebar: file(relativePath: { eq: "popups/32.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail1: file(relativePath: { eq: "popups/33.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail2: file(relativePath: { eq: "popups/34.jpg" }) {
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
              <img alt="Logo Kochstar" src={logo_kochstar} />
            </div>
            <div className="text-wrapper">
              <p>
                Kochstar is a German brand, with 115 years of experience in the
                production and development of cookware. The brand is known for
                its technological know-how, high-quality production and focus on
                functionality. Their collections offer easy, healthy and
                energy-efficient cookware solutions for every day.
              </p>
            </div>

            <a
              href="https://www.kochstar.de/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&#8250;&#8250;</span> VISIT WEBSITE
            </a>

            <Link
              className="button-back"
              to="/"
              state={{
                noScroll: true,
              }}
            >
              <img src={backIcon} className="back-icon" alt="" />
            </Link>

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

            <Link className="link-previous" to="/keltum" asModal>
              ← Go to Keltum
            </Link>

            <Link className="link-next" to="/blue-diamond" asModal>
              Go to Blue Diamond →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
