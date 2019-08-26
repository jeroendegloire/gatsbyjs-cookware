import React from 'react'
import Fade from 'react-reveal/Fade';

import board from '../../images/board.svg'

export default () => (
    <div class="waw-board-bake">
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
                      src={board}
                      alt="Icon General management"
                      class="waw-sec-icon"
                    />
                    <h2>General management</h2>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div class="w-c-box-main mb0">
                    <div class="w-c-box">
                      <h3>
                        BOARD OF
                        <br />
                        DIRECTORS
                      </h3>
                      <ul>
                        <li>
                          JAN HELSKENS
                          <span class="function">CHAIRMAN</span>
                        </li>
                        <li>
                          WIM DE VEIRMAN
                          <br />
                          SAM LIU
                          <br />
                          DIETER NAESSENS
                          <span class="function">MEMBERS</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div class="w-c-box-main mb0">
                    <div class="w-c-box">
                      <h3>
                        <br />
                        PRESIDENT
                      </h3>
                      <ul>
                        <li>DIETER NAESSENS</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-sm-6 col-12">
                  <div class="w-c-box-main">
                    <div class="w-c-box">
                      <h3>
                        <br />
                        CTO
                      </h3>
                      <ul>
                        <li>CHRIS PHILIPS</li>
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