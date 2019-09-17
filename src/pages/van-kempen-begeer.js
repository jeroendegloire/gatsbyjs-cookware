import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_vkb from '../images/logo_vankempenbegeer.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query VanKempenBegeerQuery {
        vkbsidebar: file(relativePath: { eq: "popups/26.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail1: file(relativePath: { eq: "popups/27.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail2: file(relativePath: { eq: "popups/28.jpg" }) {
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
            <Img fluid={data.vkbsidebar.childImageSharp.fluid} />
          </div>
          <div className="col-md-6">
            <div className="logo-wrapper">
              <img alt="Logo Van Kempen &amp; Begeer" src={logo_vkb} />
            </div>
            <div className="text-wrapper">
              <p>
                Koninklijke Van Kempen &amp; Begeer is an iconic Dutch brand, known
                for its beautiful, high-quality silver and silver plated
                tableware. The brand has a long-standing history, going back to
                1789 when it was founded by J.M. Kempen. Over the years the
                company grew into the largest and most innovative sterling
                silverware producer in the Netherlands. Van Kempen &amp; Begeer has
                been a pioneer from the very start, introducing new products and
                new techniques. Their extraordinary handmade craftsmanship was
                rewarded with the royal predicate in 1858. Up to today, the
                company remains a supplier of the Dutch Royal Family.
              </p>
            </div>

            <a
              href="https://www.kempen-begeer.nl/"
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

            <Link className="link-previous" to="/gero" asModal>
              ← Go to Gero
            </Link>

            <Link className="link-next" to="/keltum" asModal>
              Go to Keltum →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
