import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Iframe from 'react-iframe'

import Japan from '../images/cb-icon-3.png'
import backIcon from '../images/back-icon.svg'
import officesLegend from '../images/map-legend--offices.svg'

const Office = styled.div`
  .temp:before {
    background-image: url(${Japan});
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
          <div className="temp-header-bake temp dark-perot">
            <div className="container">
              <div className="temp-header-inner">
                <div className="row ">
                  <div className="col-md-12">
                    <div className="temp-title">
                      <h1>GreenPan Japan Ltd.</h1>
                      <h2>(Japan)</h2>
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
                  <div className="col-md-12">
                    <div className="office-address-bake pt50">
                      <div className="office-icon pt60">
                        <img src={officesLegend} alt="" />
                        <span>Sales office</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 office-adderess">
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
                          HSBC GBP <br />
                          IBAN: GB64 MIDL 4004 0961 861018 61861018
                          <br />
                          Routing N° 400409
                          <br />
                          SWIFT: MIDLGB22
                        </p>
                      </div>
                      <div className="col-md-6">
                        <Iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.94117512624!2d0.22451095147210073!3d52.38767325368057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d812ea3e147117%3A0x1c96c61154780038!2sGrovemere%20Property!5e1!3m2!1sen!2sbe!4v1568620703099!5m2!1sen!2sbe"
                          width="100%"
                          height="300"
                          frameborder="0"
                          style="border:0;"
                          allowfullscreen=""
                        />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Office>
  </Layout>
)
