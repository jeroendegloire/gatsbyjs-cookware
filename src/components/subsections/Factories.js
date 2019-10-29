import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby-plugin-modal-routing'
import { Parallax } from 'react-scroll-parallax'
import styled from 'styled-components'

import factories from '../../images/factories.svg'
import forkknife from '../../images/fork-knife.svg'
import flagChina from '../../images/flag--china.svg'
import flagGermany from '../../images/flag--germany.svg'
import flagSouthKorea from '../../images/flag--south-korea.svg'
import map from '../../images/world-map-optimized.svg'

const Factories = styled.section`
  .city-7:before {
    background-image: url(${flagChina});
  }
  .city-8:before {
    background-image: url(${flagSouthKorea});
  }
  .city-9:before {
    background-image: url(${flagGermany});
  }

  .waw-sec-title {
    background-image: url(${map});
    background-repeat: no-repeat;
    background-position: center;
    padding: 30px 0;
  }
`

export default () => (
  <Factories className="waw-factories-bake">
    <Parallax className="fork-knife" x={[50, 10]} tagOuter="figure">
      <img src={forkknife} />
    </Parallax>
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
                        <h3>
                          <br />
                          ANOTECH JIANGMEN
                        </h3>
                        <ul className="city-name" s>
                          <li>
                            <Link to="china" asModal>
                              <button className="light-gray city-7">
                                Visit <br />
                                Factory
                                <br />
                                China
                              </button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                    <div className="w-c-box-main">
                      <div className="w-c-box">
                        <h3>
                          <br />
                          THERMOLON KOREA
                        </h3>
                        <ul className="city-name">
                          <li>
                            <Link to="south-korea" asModal>
                              <button className="light-gray city-8">
                                Visit <br />
                                Factory
                                <br />
                                South Korea
                              </button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                    <div className="w-c-box-main">
                      <div className="w-c-box">
                        <h3>MERTEN &amp; STORCK GERMANY</h3>
                        <ul className="city-name">
                          <li>
                            <Link to="germany" asModal>
                              <button className="light-gray city-9">
                                Visit
                                <br />
                                Factory
                                <br />
                                Germany
                              </button>
                            </Link>
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
  </Factories>
)
