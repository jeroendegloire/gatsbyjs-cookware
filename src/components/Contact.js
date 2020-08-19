import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { Parallax } from 'react-scroll-parallax'
import Offices from '../components/subsections/Offices'
import Factories from '../components/subsections/Factories'

import spoon from '../images/spoon.svg'

const Contact = styled.section`
  position: relative;
  z-index: 1;

  .waw-contact-us-bake {
    text-align: center;
    background: #676260;
    padding: 35px 0 45px;
    position: relative;
    z-index: 1;

    &:before {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 45px 45px 0 45px;
      border-color: #676260 transparent transparent transparent;
      content: '';
      bottom: -45px;
      position: absolute;
      left: calc(50% - 45px);
      right: 0;
    }
  }

  .waw-contact-us-title h2 {
    font-size: 64px;
    color: #fff;
    font-family: Montserrat;
    font-weight: 700;
  }

  .waw-contact-us-content-main {
    font-family: 'HelveticaNeueRoman';
    color: #fff;

    p {
      font-size: 29px;
      margin: 15px 0;
    }

    .button {
      background: #cdd476;
      text-align: center;
      padding: 12px 0 7px;
      color: white;
      font-weight: bold;
      width: 480px;
      max-width: 100%;
      display: inline-block;
      transition: 500ms;
      letter-spacing: 1.5px;
      font-size: 18px;

      &:hover {
        background: #b4bb5d;
      }
    }
  }
`

export default () => (
  <Contact className="page-section waw-sec-wrep" id="contact">
    <div className="waw-contact-us-bake">
      <Fade>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="waw-contact-us-title">
              <h2 className="center">Contact us</h2>
            </div>
            <div className="waw-contact-us-content-main">
              <div className="center">
                <p>Do you want to get in touch? Let’s talk!</p>
                <a href="mailto:info@cookware-co.com" className="button">
                  INFO@COOKWARE-CO.COM
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>

    <Parallax className="spoon" x={[-50, 0]} tagOuter="figure">
      <img src={spoon} />
    </Parallax>
    <Offices />
    <Factories />
  </Contact>
)
