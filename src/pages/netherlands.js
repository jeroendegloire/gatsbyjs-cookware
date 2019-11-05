import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Iframe from 'react-iframe'

import Netherlands from '../images/cb-icon-1.png'
import backIcon from '../images/back-icon.svg'
import officesLegend from '../images/map-legend--offices.svg'

const Office = styled.div`
  .temp:before {
    background-image: url(${Netherlands});
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
      <div className="city-temp-inner">
        <div className="temp-header-bake temp">
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
              <div className="row pt100">
                <div className="col-md-4">
                  <div className="office-address-bake">
                    <div className="office-icon">
                      <img src={officesLegend} alt="" />
                      <span>Sales office</span>
                    </div>

                    <h3>Who to contact?</h3>

                    <ul className="contact-list">
                      <li>
                        SOPHIE WETSELS{' '}
                        <span className="function">PRESIDENT</span>
                      </li>
                      <li>
                        KATHY MERCKX <span className="function">CFO</span>
                      </li>
                      <li>
                        RICHARD FRERIKS{' '}
                        <span className="function">DIRECTEUR BK</span>
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
                <div className="col-md-4">
                  <div className="office-adderess">
                    <Iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.3005614815934!2d4.364698515788193!3d52.001400879719355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5947f3b835f%3A0x7289c317adc8f156!2sRotterdamseweg%20196%2C%202628%20AR%20Delft%2C%20Netherlands!5e0!3m2!1sen!2sbe!4v1568623349628!5m2!1sen!2sbe"
                      width="100%"
                      height="195"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen=""
                    />
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
                <div className="col-md-4">
                  <div className="office-adderess">
                    <Iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.300561481596!2d4.364698516068017!3d52.001400879719306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5947f3b835f%3A0x7289c317adc8f156!2sRotterdamseweg%20196%2C%202628%20AR%20Delft%2C%20Nederland!5e0!3m2!1snl!2sbe!4v1571830704790!5m2!1snl!2sbe"
                      width="100%"
                      height="195"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen=""
                    />
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
