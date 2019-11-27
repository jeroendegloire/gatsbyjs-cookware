import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Link } from 'gatsby-plugin-modal-routing'

import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Img from 'gatsby-image'

import '../../node_modules/bootstrap-scss/bootstrap-grid.scss'

import logoSlogan from '../images/logo--slogan.svg'
import backIcon from '../images/back-icon.svg'
import flagBelgium from '../images/flag--belgium.svg'
import flagChina from '../images/flag--china.svg'
import flagGermany from '../images/flag--germany.svg'
import flagHongKong from '../images/flag--hong-kong.svg'
import flagJapan from '../images/flag--japan.svg'
import flagNetherlands from '../images/flag--netherlands.svg'
import flagSouthKorea from '../images/flag--south-korea.svg'
import flagUk from '../images/flag--uk.svg'
import flagUs from '../images/flag--us.svg'

import Layout from '../components/layout'

const Vacancies = styled.div`
  background: #d6d6cd;

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

  .marker1 {
    left: calc(29% - 25px);
    top: calc(29% - 30px);
  }

  .marker2 {
    left: calc(47% - 25px);
    top: calc(23.5% - 30px);
  }
  .city-1:before {
    background-image: url(${flagBelgium});
  }
  .city-2:before {
    background-image: url(${flagNetherlands});
  }
  .city-3:before {
    background-image: url(${flagUk});
  }
  .city-4:before {
    background-image: url(${flagUs});
  }
  .city-5:before {
    background-image: url(${flagJapan});
  }
  .city-6:before {
    background-image: url(${flagHongKong});
  }
  .city-7:before {
    background-image: url(${flagChina});
  }
  .city-8:before {
    background-image: url(${flagSouthKorea});
  }
  .city-9:before {
    background-image: url(${flagGermany});
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

const VacanciesPage = () => (
  <Layout>
    <Vacancies>
      <div className="hero">
        <StaticQuery
          query={graphql`
            query VacanciesQuery {
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
            <h1>We want you!</h1>

            <p>
              As a company we look out for high potentials to create innovative
              cookware.
              <br />
              Creating a global house of cookware brands by acquisitions and
              strategic partnership, we are vertical integrated, establishing
              every process in house.
              <br />
              <br />
              Within our house, we invest in creativity and people and make
              choices based on technology, branding and distribution.
              <br />
              <br />
              As a true pioneer, we believe that non toxic materials are the
              only sustainable way, the way to the future. Putting up high
              quality standards, not only for a healthy and safe way of cooking,
              but also to have a minimal impact on our environment.
              <br />
              <br />
              Driven and ready to disrupt the cookware industry? Willing to dive
              into a kitchen of international challenges? Join our table at The
              Cookware Company.
              <br />
              <br />
            </p>

            <br />
            <br />

            <p>
              <strong>
                IF YOU WANT TO TAKE A CHANCE VISIT ONE OF OUR VACANCY PAGES!
              </strong>
            </p>

            <div className="city-name-wrep">
              <div className="city-name-inner">
                <div className="city-name">
                  <a
                    className="dark-perot city-1"
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.greenpan.be/nl-be/vacatures"
                  >
                    Belgium office
                  </a>

                  <a
                    className="dark-perot city-2"
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.bk.nl/vacatures"
                  >
                    Netherland office
                  </a>

                  <a
                    className="dark-perot city-4"
                    target="_blank" rel="noopener noreferrer"
                    href="https://www.greenpan.us/wewantyou"
                  >
                    Us <br />
                    office
                  </a>

                </div>
              </div>
            </div>
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
      </div>
    </Vacancies>
  </Layout>
)

export default VacanciesPage
