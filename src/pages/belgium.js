import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Iframe from 'react-iframe'

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
        <div className="temp-header-bake temp">
          <div className="container">
            <div className="temp-header-inner">
              <div className="row ">
                <div className="col-md-12">
                  <div className="temp-title">
                    <h1>The Cookware Company BV,</h1>
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
                        SOPHIE WETSELS{' '}
                        <span className="function">CEO LOYALTY</span>
                      </li>
                      <li>
                        KATHY MERCKX <span className="function">CFO</span>
                      </li>
                      <li>
                        NADIA BOGAERT{' '}
                        <span className="function">
                          SALES MANAGER BELGIUM &amp; FRANCE
                        </span>
                      </li>
                      <li>
                        WANNES FONTAINE{' '}
                        <span className="function">SALES MANAGER EMEA</span>
                      </li>
                      <li>
                        SOFIE KNOCKAERT <br />
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.0457963047115!2d3.652422215753267!3d51.05224217956287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c371efab35a105%3A0x98b1c48f802897c7!2sAntoon%20Catriestraat%2012%2C%209031%20Gent!5e0!3m2!1sen!2sbe!4v1568618880104!5m2!1sen!2sbe"
                    width="100%"
                    height="195"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen=""
                  />
                  <p>
                    <h5>The Cookware Company BV</h5>
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
                    IBAN BE48 0017 6513 1127
                    <br />
                    GEBABBEB
                  </p>
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
