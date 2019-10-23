import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Iframe from 'react-iframe'

import Logo from '../images/thermolon.svg'
import SouthKorea from '../images/cb-icon-9.png'
import backIcon from '../images/back-icon.svg'
import factoriesLegend from '../images/map-legend--factories.svg'

const Office = styled.div`
  .temp:before {
    background-image: url(${SouthKorea});
  }

  .back-icon {
    width: 50px;
    cursor: pointer;
  }

  .temp-header-bake {
    position: relative;
  }

  .temp-header-bake:after {
    content: '';
    background: #b9b8ab;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    top: -100px;
    width: 125%;
    transform: rotate(-2deg);
    margin-left: -100px;
    margin-right: -100px;
  }

  .logo-ms {
    width: 400px;
    margin-bottom: 3rem;
  }
`

export default () => (
  <Layout>
    <Office className="city-temp-wrep">
      <div className="city-temp-wrep">
        <div className="city-temp-inner">
          <div className="temp-header-bake temp">
            <div className="container">
              <div className="temp-header-inner">
                <div className="row ">
                  <div className="col-md-12">
                    <div className="temp-title">
                      <h1>
                        Thermolon<sup>TM</sup>
                      </h1>
                      <h2>(Busan , Republic of Korea)</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="temp-content-main">
            <div className="container">
              <div className="temp-content-inner pb100">
                <div className="row office-adderess">
                  <div className="col-md-5">
                    <div className="office-address-bake pt50">
                      <div className="office-icon pt60">
                        <img src={factoriesLegend} alt="" />
                        <span>Factory</span>
                      </div>
                    </div>
                    <h3>Who to contact?</h3>

                      <ul className="contact-list">
                        <li>C.K. PARK <span className="function">PRESIDENT</span></li>
                      </ul>
                    <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.118698552834!2d-73.86488618458486!3d41.04453327929718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2eb22de4964a9%3A0x51ce794de04add2e!2s94%20N%20Broadway%2C%20Irvington%2C%20NY%2010533%2C%20USA!5e0!3m2!1sen!2sbe!4v1568621883533!5m2!1sen!2sbe"
                        width="100%"
                        height="250"
                        frameborder="0"
                        style="border:0;"
                        allowfullscreen=""
                      />
                    <p>
                      <br/>
                      1530-2, Songjeong-dong, Gangseo-gu,
                      <br />
                      Busan, Republic of Korea
                      <br />
                      +82 51 831 8863
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img className="logo-ms" src={Logo} alt="Thermolon" />
                    <p>
                      The Thermolon™ factory is located in South-Korea and
                      includes an R&amp;D department as well as research
                      laboratories. Thermolon has always been a pioneer in
                      ceramic non-stick and the Thermolon™ coating technology is
                      based on more than 20 years of experience in the field of
                      ceramic non-stick.
                      <br />
                      <br />
                      High technology and outstanding functionality are at the
                      core of the patented Thermolon™ non-stick coating. That’s
                      why Thermolon keeps developing and improving ceramic
                      coatings for cookware, securing its position as worldwide
                      n°1 in ceramic non-stick.
                    </p>
                  </div>

                </div>
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
    </Office>
  </Layout>
)
