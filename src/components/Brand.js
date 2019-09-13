import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import backIcon from '../images/back-icon.svg'
import logo_greenpan from '../images/logo_greenpan.jpg'

export default () => (
  <StaticQuery
    query={graphql`
      query BrandImagesQuery {
        hero: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      },
    `}
    render={data => (
      <div className="brand-popup row">
        <div className="col-md-6">
          <Img fluid={data.hero.childImageSharp.fluid} />
        </div>
        <div className="col-md-6">
          <div className="logo-wrapper">
            <img alt="Logo Greenpan" src={logo_greenpan} />
          </div>
          <div className="text-wrapper">
            In 2007 GreenPan introduced healthy ceramic non-stick cookware into
            the market. It was the start of a worldwide cookware revolution.
            Unlike traditional non-stick cookware GreenPan doesn’t use any toxic
            chemicals. Its Thermolon™ coating is made with natural materials,
            such as sand, and doesn’t contain PFOA, PFAS, lead or cadmium. The
            beautiful design and high quality materials result in a unique
            cooking experience. It’s the perfect brand for passionate chefs who
            want to cook healthy without compromising on performance!
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
        </div>
      </div>
    )}
  />
)
