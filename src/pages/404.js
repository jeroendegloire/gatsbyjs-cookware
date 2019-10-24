import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import styled from 'styled-components'
import Img from 'gatsby-image'

import '../../node_modules/bootstrap-scss/bootstrap-grid.scss'

import logoSlogan from '../images/logo--slogan.svg'
import Layout from '../components/layout'

const NotFound = styled.div`
  background: #d6d6cd;
  min-height: 100vh;

  .hero {
    height: 400px;
    position: relative;

    .gatsby-image-wrapper {
      height: 100%;
    }

    :after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
    }

    .logo {
      max-width: 100%;
      width: 320px;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 50%;
      z-index: 1;
    }
  }

  p {
    text-align: center;
    font-family: 'HelveticaNeueRoman';
    font-size: 14px;
    line-height: 16px;
    color: #676260;
  }

  h1 {
    text-align: center;
    font-size: 53px;
    font-weight: 700;
    font-family: Montserrat;
    line-height: 64px;
    color: #676260;
    margin-top: 3rem;
    margin-bottom: 3rem;
    position: relative;

    &:after {
      position: absolute;
      content: '';
      bottom: -7px;
      left: 43%;
      width: 90px;
      height: 3px;
      background: #676260;
    }
  }

  .city-name-wrep {
    margin: 4rem 0;
  }

  .city-name-inner {
    text-align: center;
  }

  .city-name a {
    display: inline-block;
    line-height: 1rem;
    width: 115px;
    text-align: center;
    color: #fff;
    font-size: 10px;
    font-family: 'Montserrat';
    font-weight: 700;
    letter-spacing: 2px;
    border-radius: 40px;
    position: relative;
    margin: 10px 15px;
    text-transform: uppercase;
    padding-top: 1rem;
    padding-bottom: 1rem;

    &:before {
      content: '';
      position: absolute;
      background-repeat: no-repeat;
      background-size: cover;
      width: 22px;
      height: 22px;
      border: 1px solid #fff;
      border-radius: 30px;
      left: -6px;
      top: -5px;
    }
  }

  .light-gray {
    background: #b9b8ab;
  }

  .dark-perot {
    background: #7c8c42;
    color: white !important;
  }

  .button-back {
    position: relative;
    bottom: 4rem;
    text-align: center;
    display: block;
    margin-top: 4rem;
    margin-bottom: 0;
    right: 0;

    img {
      width: 80px;
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <NotFound>
      <div className="hero">
        <StaticQuery
          query={graphql`
            query NotFoundQuery {
              file(relativePath: { eq: "hero_vacancies.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 1600, maxHeight: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={data => <Img fluid={data.file.childImageSharp.fluid} />}
        />

        <img
          className="logo"
          src={logoSlogan}
          alt="Slogan: House of innovation."
        />
      </div>
      <div className="container page-vacancies">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9 ">
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </div>
      </div>
    </NotFound>
  </Layout>
)

export default NotFoundPage
