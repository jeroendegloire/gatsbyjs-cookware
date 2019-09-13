import React from 'react'
import Fade from 'react-reveal/Fade';

import factories from '../../images/factories.svg'

export default () => (
    <div className="waw-factories-bake">
      <Fade>
        <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="waw-sec-content-main center">
              <div className="row no-gutters justify-content-center">
                <div className="col-12">
                  <div className="waw-sec-title">
                    <img
                      src={factories}
                      alt="Icon General management"
                      className="waw-sec-icon"
                    />
                    <h2>Our factories</h2>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div className="w-c-box-main">
                    <div className="w-c-box">
                      <h3>ANOTECH JIANGMEN</h3>
                      <ul>
                        <li>
                          GOLDEN LEE<span className="function">PRESIDENT</span>
                        </li>
                        <li>
                          JENNY HUANG<span className="function">CFO</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div className="w-c-box-main">
                    <div className="w-c-box">
                      <h3>THERMOLON KOREA</h3>
                      <ul>
                        <li>
                          C.K. PARK
                          <br />
                          <span className="function">PRESIDENT</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div className="w-c-box-main">
                    <div className="w-c-box">
                      <h3>MERTEN &amp; STORCK</h3>
                      <ul>
                        <li>
                          JENS JUNGMANN
                          <span className="function">PRESIDENT</span>
                        </li>
                        <li>
                          KATHY MERCKX
                          <span className="function">CFO</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </Fade>
    </div>
)