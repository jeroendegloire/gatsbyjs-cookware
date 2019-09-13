import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Belgium from '../images/cb-icon-5.png'
import backIcon from '../images/back-icon.svg'
import officesLegend from '../images/map-legend--offices.svg'

const Office = styled.div`
  .temp:before {
    background-image: url(${Belgium});
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
    <Office className="city-temp-wrep" id="temp1">
      <div className="city-temp-inner">
        <div className="temp-header-bake temp dark-perot">
          <div className="container">
            <div className="temp-header-inner">
              <div className="row ">
                <div className="col-md-12">
                  <div className="temp-title">
                    <h1>The Cookware Company BVBA,</h1>
                    <h2>(Drongen, Belgium)</h2>
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
                      The Cookware Company BVBA
                      <br />
                      Antoon Catriestraat 12
                      <br />
                      9031 Drongen
                      <br />
                      België
                      <br />
                      BTW BE0635 907 452
                      <br />
                      BNP PARIBAS FORTIS
                      <br />
                      IBAN BE48 0017 65143 1127
                      <br />
                      GEBABBEB
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
    </Office>
  </Layout>
)
