import React from 'react'
import Fade from 'react-reveal/Fade'

import offices from '../../images/offices.svg'

export default () => (
  <div className="waw-offices-bake">
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
                        src={offices}
                        alt="Icon General management"
                        className="waw-sec-icon"
                      />
                      <h2>Our offices</h2>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                    <div className="w-c-box-main">
                      <div className="w-c-box">
                        <h3>EMEA</h3>
                        <ul>
                          <li>
                            SOPHIE WETSELS
                            <span className="function">PRESIDENT</span>
                          </li>
                          <li>
                            KATHY MERCKX
                            <span className="function">CFO</span>
                          </li>
                          <li>
                            RICHARD FRERIKS
                            <span className="function">DIRECTOR BK</span>
                          </li>
                          <li>
                            NADIA BOGAERT
                            <span className="function">
                              SALES MANAGER BELGIUM &amp; FRANCE
                            </span>
                          </li>
                          <li>
                            WANNES FONTAINE
                            <span className="function">SALES MANAGER EMEA</span>
                          </li>
                          <li className="mb-0">SOFIE KNOCKAERT</li>
                          <li>
                            ELIZA GABRIËL
                            <br />
                            <span className="function">HR</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                    <div className="w-c-box-main">
                      <div className="w-c-box">
                        <h3>UNITED STATES</h3>
                        <ul>
                          <li>
                            JACOB MAURER
                            <span className="function">PRESIDENT</span>
                          </li>
                          <li>
                            DON HILDEBRAND
                            <span className="function">CFO</span>
                          </li>
                          <li>
                            TABITHA LUCKETT
                            <span className="function">
                              VICE PRESIDENT SALES
                            </span>
                          </li>
                          <li>
                            SERENA SINGH
                            <span className="function">HR</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                    <div className="w-c-box-main">
                      <div className="w-c-box">
                        <h3>ASIA</h3>
                        <ul>
                          <li>
                            DIETER NAESSENS
                            <span className="function">PRESIDENT</span>
                          </li>
                          <li>
                            JESSICA HUANG
                            <span className="function">CFO</span>
                          </li>
                          <li>
                            MASAMARU TAKAO
                            <span className="function">MANAGING DIRECTOR</span>
                          </li>
                          <li>
                            LISE VAN DEN BERGHE
                            <span className="function">
                              SALES &amp; MARKETING MANAGER
                            </span>
                          </li>
                          <li>
                            SINEA LAI
                            <span className="function">HR</span>
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
