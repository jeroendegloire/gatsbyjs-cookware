import React from 'react'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby-plugin-modal-routing'
import styled from 'styled-components'

import offices from '../../images/offices.svg'

import flagBelgium from '../../images/flag--belgium.svg'
import flagHongKong from '../../images/flag--hong-kong.svg'
import flagJapan from '../../images/flag--japan.svg'
import flagNetherlands from '../../images/flag--netherlands.svg'
import flagUk from '../../images/flag--uk.svg'
import flagUs from '../../images/flag--us.svg'
import map from '../../images/world-map-optimized.svg'

const Offices = styled.section`
  .city-1:before {
    background-image: url(${flagBelgium});
  }
  .city-2:before {
    background-image: url(${flagNetherlands});
  }
  .city-3:before {
    background-image: url(${flagUk});
  }
  .city-4:before {
    background-image: url(${flagUs});
  }
  .city-5:before {
    background-image: url(${flagJapan});
  }
  .city-6:before {
    background-image: url(${flagHongKong});
  }

  .waw-sec-title {
    background-image: url(${map});
    background-repeat: no-repeat;
    background-position: center;
    padding: 30px 0;
  }
`

export default () => (
  <Offices className="waw-offices-bake" id="of">
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
                        <ul className="city-name">
                          <li>
                            <Link to="belgium" asModal>
                              <button className="dark-perot city-1">
                                Visit
                                <br />
                                Belgium
                                <br />
                                Office
                              </button>
                            </Link>
                          </li>
                          <li>
                            <Link to="netherlands" asModal>
                              <button className="dark-perot city-2">
                                Visit
                                <br />
                                Netherlands
                                <br />
                                Office
                              </button>
                            </Link>
                          </li>
                          <li>
                            <Link to="uk" asModal>
                              <button className="dark-perot city-3">
                                Visit
                                <br /> Uk
                                <br /> Office
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
                        <h3>UNITED STATES</h3>
                        <ul className="city-name">
                          <li>
                            <Link to="us" asModal>
                              <button className="dark-perot city-4">
                                Visit
                                <br /> USA
                                <br /> Office
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
                        <h3>ASIA</h3>
                        <ul className="city-name">
                          <li>
                            <Link to="hongkong" asModal>
                              <button className="dark-perot city-6">
                                Visit
                                <br /> Hong Kong
                                <br /> Office
                              </button>
                            </Link>
                          </li>
                          <li>
                            <Link to="japan" asModal>
                              <button className="dark-perot city-5">
                                Visit
                                <br /> Japan
                                <br /> Office
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
  </Offices>
)
