import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Logo from '../images/merten-storck.svg'
import Germany from '../images/cb-icon-8.png'
import backIcon from '../images/back-icon.svg'
import factoriesLegend from '../images/map-legend--factories.svg'

const Office = styled.div`
  .temp:before {
    background-image: url(${Germany});
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
    width: 200px;
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
                      <h1>Merten &amp; Storck</h1>
                      <h2>(Drensteinfurt , Germany)</h2>
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
                    <p>
                      Am Ladestrang 1 <br />
                      48317 Drensteinfurt <br />
                      Deutschland
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img className="logo-ms" src={Logo} alt="Merten &amp; storck"/>
                    <p>
                      Merten &amp; Storck is a manufacturing company in Germany,
                      with 145 years of experience in enameling cookware. The
                      company includes a 10.000 m² production facility and a
                      3000 m² warehouse. Merten &amp; Storck has a yearly
                      capacity of 550.000 units, varying from cookware and
                      bakeware to pressure cookers and preservers.
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
