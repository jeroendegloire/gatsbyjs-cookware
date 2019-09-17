import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_foode from '../images/logo_foode.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query FoodeQuery {
        foodesidebar: file(relativePath: { eq: "popups/17.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        thumbnail1: file(relativePath: { eq: "popups/18.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail2: file(relativePath: { eq: "popups/19.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        thumbnail3: file(relativePath: { eq: "popups/20.jpg" }) {
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
            <Img fluid={data.foodesidebar.childImageSharp.fluid} />
          </div>
          <div className="col-md-6">
            <div className="logo-wrapper">
              <img alt="Logo Food-E" src={logo_foode} />
            </div>
            <div className="text-wrapper">
              <p>
                Food-E is all about great healthy cookware for price conscious
                shoppers! The healthy ceramic non-stick coating doesn’t contain
                any harmful substances and will help you prepare tasty, everyday
                meals. It’s easy to use and easy to clean. The creative design
                turns cooking into a fun experience, perfect for boys and girls
                who know that healthy cooking is cool!
              </p>
            </div>

            <a href="https://www.food-e.us/" className="link" target="_blank" rel="noopener noreferrer">
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

            <Link className="link-previous" to="/vitaverde" asModal>
              ← Go to VitaVerde
            </Link>

            <Link className="link-next" to="/bk" asModal>
              Go to BK →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
