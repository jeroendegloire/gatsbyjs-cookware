import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_keltum from '../images/logo_keltum.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query KeltumQuery {
        keltumsidebar: file(relativePath: { eq: "popups/29.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail1: file(relativePath: { eq: "popups/30.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail2: file(relativePath: { eq: "popups/31.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        # thumbnail3: file(relativePath: { eq: "popups/32.jpg" }) {
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
            <Img fluid={data.keltumsidebar.childImageSharp.fluid} />
          </div>
          <div className="col-md-6">
            <div className="logo-wrapper">
              <img alt="Logo Keltum" src={logo_keltum} />
            </div>
            <div className="text-wrapper">
              <p>
                Keltum is a famous Dutch brand, which was founded in 1936. It’s
                part of the renowned Dutch company Van Kempen &amp; Begeer. Keltum
                has a long tradition of silver plated stainless steel cutlery. The brand is
                known for its craftsmanship and high-quality materials. The
                beautiful collections have a timeless design and turn every
                dinner into a special experience. Recently, Keltum launched its
                first tableware collection: Table Talks.
              </p>
            </div>

            <a
              href="https://www.keltum.nl"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&#8250;&#8250;</span> VISIT WEBSITE
            </a>

            <a href="https://www.keltum-tabletalks.com/" className="link" target="_blank" rel="noopener noreferrer">Keltum Tabletalks</a>

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

            <Link className="link-previous" to="/food-e" asModal>
              ← Go to Van Kempen &amp; Begeer
            </Link>

            <Link className="link-next" to="/kochstar" asModal>
              Go to Kochstar →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
