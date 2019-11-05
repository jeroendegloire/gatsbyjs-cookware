import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Layout from '../components/layout'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Iframe from 'react-iframe'

import Logo from '../images/merten-storck.svg'
import Germany from '../images/cb-icon-8.png'
import backIcon from '../images/back-icon.svg'
import factoriesLegend from '../images/map-legend--factories.svg'

const Office = styled.div`
  .temp:before {
    background-image: url(${Germany});
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
    width: 300px;
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

                    <h3>Who to contact?</h3>

                    <ul className="contact-list">
                      <li>
                        JENS JUNGMANN{' '}
                        <span className="function">PRESIDENT</span>
                      </li>
                      <li>
                        KATHY MERCKX <span className="function">CFO</span>
                      </li>
                    </ul>
                    <Iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.4899150605447!2d7.730231015780639!3d51.79720827968382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9a0387fd5f303%3A0xd9335092d83aa5d6!2sAm%20Ladestrang%201%2C%2048317%20Drensteinfurt%2C%20Germany!5e0!3m2!1sen!2sbe!4v1568619654972!5m2!1sen!2sbe"
                      width="100%"
                      height="250"
                      frameborder="0"
                      style="border:0;"
                      allowfullscreen=""
                    />
                    <p>
                      <br />
                      Am Ladestrang 1 <br />
                      48317 Drensteinfurt <br />
                      Deutschland
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img
                      className="logo-ms"
                      src={Logo}
                      alt="Merten &amp; storck"
                    />
                    <p>
                      Merten &amp; Storck is a manufacturing company in Germany,
                      with 145 years of experience in enameling cookware. The
                      company includes a 10.000 m² production facility and a
                      3000 m² warehouse. Merten &amp; Storck has a yearly
                      capacity of 550.000 units, varying from cookware and
                      bakeware to pressure cookers and preservers.
                    </p>

                    <a
                      className="link"
                      href="https://www.kochstar.de/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>&#8250;&#8250;</span> MORE INFO
                    </a>

                    <a href="mailto:info@kochstar.de" className="button">
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
