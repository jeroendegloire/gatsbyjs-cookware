import React from 'react'
import Fade from 'react-reveal/Fade';

import factories from '../../images/factories.svg'

export default () => (
    <div class="waw-factories-bake">
      <Fade>
        <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-9">
            <div class="waw-sec-content-main center">
              <div class="row no-gutters justify-content-center">
                <div class="col-12">
                  <div class="waw-sec-title">
                    <img
                      src={factories}
                      alt="Icon General management"
                      class="waw-sec-icon"
                    />
                    <h2>Our factories</h2>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div class="w-c-box-main">
                    <div class="w-c-box">
                      <h3>ANOTECH JIANGMEN</h3>
                      <ul>
                        <li>
                          GOLDEN LEE<span class="function">PRESIDENT</span>
                        </li>
                        <li>
                          JENNY HUANG<span class="function">CFO</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div class="w-c-box-main">
                    <div class="w-c-box">
                      <h3>THERMOLON KOREA</h3>
                      <ul>
                        <li>
                          C.K. PARK
                          <br />
                          <span class="function">PRESIDENT</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div class="w-c-box-main">
                    <div class="w-c-box">
                      <h3>MERTEN &amp; STORCK</h3>
                      <ul>
                        <li>
                          JENS JUNGMANN
                          <span class="function">PRESIDENT</span>
                        </li>
                        <li>
                          KATHY MERCKX
                          <span class="function">CFO</span>
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