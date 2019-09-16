import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import logoSlogan from '../images/logo--slogan.svg'

const Hero = styled.section`
  position: relative;
  height: 700px;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .gatsby-image-wrapper {
    height: 700px;

    img {
      object-fit: cover;
    }
  }

  .container {
    padding: 150px 0px 130px 0px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    height: 700px;
    font-family: 'Montserrat';
    font-weight: 700;

    h1 {
      transform: translateY(-1.5rem);
      opacity: 0.5;
      position: relative;
      font-size: 56px;
      font-weight: 700;
      line-height: 60px;
      color: #fff;
      margin-bottom: 30px;

      ${breakpoint('md')`
        font-size: 82px;
        line-height: 84px;
      `}
    }

    img {
      transform: translateY(-1.5rem);
      opacity: 0.5;
      position: relative;
      max-width: 200px;
    }
  }
`

export default () => (
  <Hero id="Hero">
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          file(relativePath: { eq: "hero.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000, maxHeight: 700) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.file.childImageSharp.fluid} />}
    />

    <div className="container">
      <div className="col-md-11 col-lg-8">
        <h1 className="animate-pop-in">
          Driven
          <br />
          by innovation.
          <br />
          Empowered
          <br />
          by people.
        </h1>
        <img
          className="animate-pop-in"
          src={logoSlogan}
          alt="Slogan: House of innovation."
        />
      </div>
    </div>
  </Hero>
)
