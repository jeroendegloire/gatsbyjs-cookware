import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import HongKong from '../images/cb-icon-6.png'
import backIcon from '../images/back-icon.svg'
import officesLegend from '../images/map-legend--offices.svg'

const Office = styled.div`
  .temp:before {
    background-image: url(${HongKong});
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
                      <h1>The Cookware Company Asia Ltd.</h1>
                      <h2>(Hong Kong)</h2>
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
                  <div className="col-md-7">
                    <div className="office-address-bake pt50">
                      <div className="office-icon pt60">
                        <img src={officesLegend} alt="" />
                        <span>Sales office</span>
                      </div>
                    </div>
                    <div className="office-adderess">
                      <p>
                        Unit 3201, 32/F, Tower 1, Enterprise Square Five <br />
                        38 Wang Chiu Road
                        <br />
                        Kowloon Bay, Hong Kong
                        <br />
                        +852 3171-2202 <br />
                        <br />
                        Hang Seng Bank Limited
                        <br />
                        IBAN : 390-152767-201
                        <br />
                        SWIFT : HASEHKHH
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5">
                    
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
