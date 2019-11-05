import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Iframe from 'react-iframe'

import Logo from '../images/logo_anotech.jpg'
import China from '../images/cb-icon-7.png'
import backIcon from '../images/back-icon.svg'
import factoriesLegend from '../images/map-legend--factories.svg'

const Office = styled.div`
  .temp:before {
    background-image: url(${China});
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
                      <h1>ANOTECH</h1>
                      <h2>(Jiangmen, China)</h2>
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
                      <li>
                        GOLDEN LEE <span className="function">PRESIDENT</span>
                      </li>
                      <li>
                        JENNY HUANG <span className="function">CFO</span>
                      </li>
                    </ul>

                    <Iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7081223891414!2d113.09610131495923!3d22.552603985193123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34022482cb41dad7%3A0xf1cfd277ea095f58!2s28%20Jin&#39;ou%20Rd%2C%20Jianghai%20Qu%2C%20Jiangmen%20Shi%2C%20Guangdong%20Sheng%2C%20China%2C%20529020!5e0!3m2!1sen!2sbe!4v1568619611456!5m2!1sen!2sbe"
                      width="100%"
                      height="250"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen=""
                    />

                    <p>
                      <br />
                      Jiangmen Anotech Cookware <br />
                      Manufacturing Company Ltd. <br />
                      No. 28, Jinou Road, Jiang Hai District,
                      <br />
                      Jiangmen, Guangdong
                      <br />
                      People’s Republic of China
                    </p>

                    <div className="mt1rem"></div>
                  </div>
                  <div className="col-md-7">
                    <img className="logo-ms" src={Logo} alt="Anotech" />
                    <p>
                      Anotech is a manufacturing company in Hong Kong,
                      specialized in cookware products. The company consists of
                      an Engineering &amp; R&amp;D department, a QC/QA
                      department and a factory. <br />
                      <br />
                      The production facility has a yearly capacity of about 18
                      million pieces, covering a wide range of non-stick and
                      dishwasher coatings. Its automated production processes
                      are environmentally friendly and state-of-the-art
                      technology ensures high-quality standards.
                    </p>

                    <a
                      className="link"
                      href="https://www.anotech-intl.com/company.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>&#8250;&#8250;</span> MORE INFO
                    </a>

                    <a href="mailto:info@anotech-intl.com" className="button">
                      <i className="icon-mail"></i>CONTACT US
                    </a>
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
