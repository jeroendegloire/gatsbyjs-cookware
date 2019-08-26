import React from 'react'
import Fade from 'react-reveal/Fade';

import offices from '../../images/offices.svg'

export default () => (
    <div class="waw-offices-bake">
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
                      src={offices}
                      alt="Icon General management"
                      class="waw-sec-icon"
                    />
                    <h2>Our offices</h2>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div class="w-c-box-main">
                    <div class="w-c-box">
                      <h3>EMEA</h3>
                      <ul>
                        <li>
                          SOPHIE WETSELS
                          <span class="function">PRESIDENT</span>
                        </li>
                        <li>
                          KATHY MERCKX
                          <span class="function">CFO</span>
                        </li>
                        <li>
                          RICHARD FRERIKS
                          <span class="function">DIRECTOR BK</span>
                        </li>
                        <li>
                          NADIA BOGAERT
                          <span class="function">
                            SALES MANAGER BELGIUM &amp; FRANCE
                          </span>
                        </li>
                        <li>
                          WANNES FONTAINE
                          <span class="function">SALES MANAGER EMEA</span>
                        </li>
                        <li class="mb-0">SOFIE KNOCKAERT</li>
                        <li>
                          ELIZA GABRIËL
                          <br />
                          <span class="function">HR</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div class="w-c-box-main">
                    <div class="w-c-box">
                      <h3>UNITED STATES</h3>
                      <ul>
                        <li>
                          JACOB MAURER
                          <span class="function">PRESIDENT</span>
                        </li>
                        <li>
                          DON HILDEBRAND
                          <span class="function">CFO</span>
                        </li>
                        <li>
                          TABITHA LUCKETT
                          <span class="function">VICE PRESIDENT SALES</span>
                        </li>
                        <li>
                          KRYSTA PUZEK
                          <span class="function">HR</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div class="w-c-box-main">
                    <div class="w-c-box">
                      <h3>ASIA</h3>
                      <ul>
                        <li>
                          DIETER NAESSENS
                          <span class="function">PRESIDENT</span>
                        </li>
                        <li>
                          JESSICA HUANG
                          <span class="function">CFO</span>
                        </li>
                        <li>
                          MASAMARU TAKAO
                          <span class="function">MANAGING DIRECTOR</span>
                        </li>
                        <li>
                          LISE VAN DEN BERGHE
                          <span class="function">
                            SALES &amp; MARKETING MANAGER
                          </span>
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