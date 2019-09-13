import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Netherlands from '../images/cb-icon-1.png'
import backIcon from '../images/back-icon.svg'
import officesLegend from '../images/map-legend--offices.svg'

const Office = styled.div`
  .temp:before {
    background-image: url(${Netherlands});
  }

  .back-icon {
    position: absolute;
    right: 100px;
    bottom: 50px;
    margin: 0 !important;
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
      <div className="city-temp-inner">
        <div className="temp-header-bake temp dark-perot">
          <div className="container">
            <div className="temp-header-inner">
              <div className="row ">
                <div className="col-md-12">
                  <div className="temp-title">
                    <h1>
                      BK Cookware BV,
                      <br />
                      BV Koninklijke Van Kempen en Begeer
                    </h1>
                    <h2>(Delft, The Netherlands)</h2>
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
                <div className="col-md-8">
                  <div className="office-address-bake pt50">
                    <div className="office-icon pt60">
                      <img src={officesLegend} alt="" />
                      <span>Sales office</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="office-adderess">
                        <h5>BK Cookware BV </h5>
                        <p className="mb20">
                          Rotterdamseweg 196
                          <br />
                          2628 AR Delft
                          <br />
                          Nederland
                        </p>
                        <p>
                          BTW NL8224 29 743 B 01
                          <br />
                          ABN AMRO
                          <br />
                          IBAN: NL15 ABNA 0405 50 6171
                          <br />
                          SWIFT: ABNANL2A
                        </p>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="office-adderess">
                        <h5>BV Koninklijke Van Kempen en Begeer </h5>
                        <p className="mb20">
                          Rotterdamseweg 196
                          <br />
                          2628 AR Delft
                          <br />
                          Nederland
                        </p>
                        <p>
                          BTW NL0035 23 482 B 01
                          <br />
                          ABN AMRO
                          <br />
                          IBAN: NL77 ABNA 0550 9125 17
                          <br />
                          SWIFT: ABNANL2A
                        </p>
                      </div>
                    </div>
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
