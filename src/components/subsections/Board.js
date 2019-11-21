import React from 'react'
import Fade from 'react-reveal/Fade'

import board from '../../images/board.svg'

export default () => (
  <div className="waw-board-bake">
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
                        src={board}
                        alt="Icon General management"
                        className="waw-sec-icon"
                      />
                      <h2>General management</h2>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                    <div className="w-c-box-main mb0">
                      <div className="w-c-box">
                        <h3>
                          BOARD OF
                          <br />
                          DIRECTORS
                        </h3>
                        <ul>
                          <li>
                            JAN HELSKENS
                            <span className="function">CHAIRMAN</span>
                          </li>
                          <li>
                            WIM DE VEIRMAN
                            <br />
                            SAM LIU
                            <br />
                            DIETER NAESSENS
                            <span className="function">MEMBERS</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                    <div className="w-c-box-main mb0">
                      <div className="w-c-box">
                        <h3>
                          <br />
                          CEO EMEA
                        </h3>
                        <ul>
                          <li>DIETER NAESSENS</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                    <div className="w-c-box-main">
                      <div className="w-c-box">
                        <h3>
                          <br />
                          CTO
                        </h3>
                        <ul>
                          <li>CHRIS PHILLIPS</li>
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
