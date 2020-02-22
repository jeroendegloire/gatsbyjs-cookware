import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Uk from '../images/cb-icon-2.png'
import backIcon from '../images/back-icon.svg'
import officesLegend from '../images/map-legend--offices.svg'
import Iframe from 'react-iframe'

const Office = styled.div`
  .temp:before {
    background-image: url(${Uk});
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
    background: #7c8c42;
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
                      <h1>Anotech International UK Ltd.</h1>
                      <h2>(United Kingdom)</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="temp-content-main">
            <div className="container">
              <div className="temp-content-inner pb100">
                <div className="row ">
                  <div className="col-md-4">
                    <div className="office-address-bake pt50">
                      <div className="office-icon pt60">
                        <img src={officesLegend} alt="" />
                        <span>Sales office</span>
                      </div>

                      <h3>Who to contact?</h3>

                      <ul className="contact-list">
                        <li>
                          DIETER NAESSENS{' '}
                          <span className="function">CEO EMEA</span>
                        </li>
                        <li>
                          KATHY MERCKX <span className="function">CFO</span>
                        </li>
                        <li>
                          ELIZA GABRIËL <span className="function">HR</span>
                        </li>
                      </ul>

                      <a href="mailto:info@cookware-co.com" className="button">
                        <i className="icon-mail"></i>CONTACT US
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8 office-adderess">
                    <Iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.0483812336342!2d0.22451095140765787!3d52.387673253680646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d812ea3e147117%3A0x1c96c61154780038!2sGrovemere%20Property!5e0!3m2!1sen!2sbe!4v1568621397246!5m2!1sen!2sbe"
                      width="100%"
                      height="195"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen=""
                    />
                    <h5>Anotech International UK Ltd.</h5>
                    <p>
                      Unit 1H
                      <br />
                      Grovemere House
                      <br />
                      Lancaster Way Business Park
                      <br />
                      Ely, CB6 3NW
                      <br />
                      VAT: 980702221
                      <br />
                      HSBC GBP
                      <br />
                      IBAN: GB64 MIDL 4004 0961 861018 61861018
                      <br />
                      Routing N° 400409
                      <br />
                      SWIFT: MIDLGB22
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
