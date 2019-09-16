import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_gero from '../images/logo_gero.svg'

export default () => (
  <StaticQuery
    query={graphql`
      query GeroQuery {
        gerosidebar: file(relativePath: { eq: "popups/25.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        # thumbnail1: file(relativePath: { eq: "popups/22.jpg" }) {
        #   childImageSharp {
        #     fluid(maxWidth: 1200, maxHeight: 1200) {
        #       ...GatsbyImageSharpFluid_withWebp
        #     }
        #   }
        # }
        # thumbnail2: file(relativePath: { eq: "popups/23.jpg" }) {
        #   childImageSharp {
        #     fluid(maxWidth: 1200, maxHeight: 1200) {
        #       ...GatsbyImageSharpFluid_withWebp
        #     }
        #   }
        # }
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
            <Img fluid={data.gerosidebar.childImageSharp.fluid} />
          </div>
          <div className="col-md-6">
            <div className="logo-wrapper">
              <img alt="Logo Gero" src={logo_gero} />
            </div>
            <div className="text-wrapper">
              <p>
                Gero is a traditional Dutch cookware brand with over 100 years
                of experience. The brand is known for its cutlery and cookware
                related products. Their collections are qualitative, but
                affordable. Perfect for everyday use !
              </p>
            </div>

            {/* <a
              href="https://www.bk.nl/"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              <span>&#8250;&#8250;</span> VISIT WEBSITE
            </a> */}

            {/* <div className="image-row-wrapper">
              <div className="image-wrapper">
                <Img fluid={data.thumbnail1.childImageSharp.fluid} />
              </div>
              <div className="image-wrapper">
                <Img fluid={data.thumbnail2.childImageSharp.fluid} />
              </div>
              <div className="image-wrapper">
                <Img fluid={data.thumbnail3.childImageSharp.fluid} />
              </div>
            </div> */}

            <Link
              className="button-back"
              to="/"
              state={{
                noScroll: true,
              }}
            >
              <img src={backIcon} className="back-icon" alt="" />
            </Link>

            <Link className="link-previous" to="/bk" asModal>
              ← Go to BK
            </Link>

            <Link className="link-next" to="/van-kempen-begeer" asModal>
              Go to Van Kempen &amp; Begeer →
            </Link>
          </div>
        </div>
      </Layout>
    )}
  />
)
