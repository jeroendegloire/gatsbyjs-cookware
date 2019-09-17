import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_bk from '../images/logo_bk.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query BKQuery {
        bksidebar: file(relativePath: { eq: "popups/21.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail1: file(relativePath: { eq: "popups/22.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail2: file(relativePath: { eq: "popups/23.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail3: file(relativePath: { eq: "popups/24.jpg" }) {
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
              <img alt="Logo BK" src={logo_bk} />
            </div>
            <div className="text-wrapper">
              <p>
                BK is a renowned Dutch cookware brand which was launched in
                1851. The brand offers a wide range of cookware products,
                varying from pans and casseroles to smart kitchen solutions.
                Over the years BK has proven to be a true pioneer and the brand
                has an impressive heritage. In 1951 BK received the royal
                predicate from Queen Juliana and the crown was added to the
                logo. Up to today BK remains a high-quality cookware brand that
                inspires and turns cooking into a unique experience!
              </p>
            </div>

            <a
              className="link"
              href="https://www.bk.nl/"
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

            <Link className="link-previous" to="/food-e" asModal>
              ← Go to Food-E
            </Link>

            <Link className="link-next" to="/gero" asModal>
              Go to Gero →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
