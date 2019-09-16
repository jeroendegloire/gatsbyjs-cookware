import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Iframe from 'react-iframe'

import Us from '../images/cb-icon-4.png'
import backIcon from '../images/back-icon.svg'
import officesLegend from '../images/map-legend--offices.svg'

const Office = styled.div`
  .temp:before {
    background-image: url(${Us});
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
                      <h1>The Cookware Company USA </h1>
                      <h2>(United States)</h2>
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
                        <p>
                          94 North Broadway <br />
                          Irvington, New York 10533 <br />
                          United States of America
                          <br />
                          <br />
                          JP Morgan Chase Bank, N.A. <br />
                          IBAN: 780159310 <br />
                          Routing N° 021000021 <br />
                          SWIFT: CHASUS33
                        </p>
                      </div>
                      <div className="col-md-6">
                        <Iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.118698552834!2d-73.86488618458486!3d41.04453327929718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2eb22de4964a9%3A0x51ce794de04add2e!2s94%20N%20Broadway%2C%20Irvington%2C%20NY%2010533%2C%20USA!5e0!3m2!1sen!2sbe!4v1568621883533!5m2!1sen!2sbe"
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
