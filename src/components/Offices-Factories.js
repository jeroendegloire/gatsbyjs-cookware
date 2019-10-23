import React from 'react'
import { Link } from 'gatsby-plugin-modal-routing'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'

import map from '../images/world-map-optimized.svg'
import forkknife from '../images/fork-knife.svg'
import flagBelgium from '../images/flag--belgium.svg'
import flagChina from '../images/flag--china.svg'
import flagGermany from '../images/flag--germany.svg'
import flagHongKong from '../images/flag--hong-kong.svg'
import flagJapan from '../images/flag--japan.svg'
import flagNetherlands from '../images/flag--netherlands.svg'
import flagSouthKorea from '../images/flag--south-korea.svg'
import flagUk from '../images/flag--uk.svg'
import flagUs from '../images/flag--us.svg'

import officesLegend from '../images/map-legend--offices.svg'
import factoriesLegend from '../images/map-legend--factories.svg'
import officesMarker from '../images/map-marker--offices.svg'
import factoriesMarker from '../images/map-marker--factories.svg'

const OfficesFactories = styled.section`
  position: relative;
  z-index: 6;

  .map-inner {
    background: #efeeea;
    position: relative;
    padding: 60px 0;
  }

  .waw-title h2 {
    color: #676260;
    font-size: 64px;
    position: relative;
    font-family: Montserrat;
    font-weight: 700;
    display: inline-block;
    margin-bottom: 5rem;

    &:after {
      position: absolute;
      content: '';
      bottom: -7px;
      width: 90px;
      height: 3px;
      background: #676260;
      right: 0;
      left: auto;
      z-index: 9;
    }
  }

  .city-name-inner {
    text-align: center;
  }

  .city-name button {
    display: inline-block;
    line-height: 50px;
    width: 115px;
    text-align: center;
    color: #fff;
    font-size: 10px;
    font-family: 'Montserrat';
    font-weight: 700;
    letter-spacing: 2px;
    border-radius: 40px;
    position: relative;
    margin: 10px 15px;
    text-transform: uppercase;

    &:before {
      content: '';
      position: absolute;
      background-repeat: no-repeat;
      background-size: cover;
      width: 22px;
      height: 22px;
      border: 1px solid #fff;
      border-radius: 30px;
      left: -6px;
      top: -5px;
    }
  }

  .marker1 {
    left: calc(29% - 25px);
    top: calc(29% - 30px);
  }

  .marker2 {
    left: calc(47% - 25px);
    top: calc(23.5% - 30px);
  }

  .marker3 {
    left: calc(49.5% - 25px);
    top: calc(27% - 30px);
  }

  .marker4 {
    left: calc(52% - 25px);
    top: calc(25% - 30px);
  }

  .marker5 {
    left: calc(54% - 25px);
    top: calc(26% - 30px);
  }

  .marker6 {
    left: calc(78% - 25px);
    top: calc(44% - 30px);
  }

  .marker7 {
    left: calc(79.5% - 25px);
    top: calc(43% - 30px);
  }

  .marker8 {
    left: calc(82.6% - 25px);
    top: calc(36% - 30px);
  }

  .marker9 {
    left: calc(85.5% - 25px);
    top: calc(37% - 30px);
  }

  .legends {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 60px;
    img {
      width: 65px;
      margin-bottom: 15px;
    }

    span {
      display: block;
      font-family: Montserrat;
      font-size: 14px;
      letter-spacing: 1px;
      color: #676260;
    }

    > div {
      display: inline-block;
      margin-right: 2rem;
    }
  }

  .map-markers__mark--offices {
    background: url(${officesMarker}) no-repeat;
  }

  .map-markers__mark--factories {
    background: url(${factoriesMarker}) no-repeat;
  }

  .light-gray {
    background: #b9b8ab;
  }

  .dark-perot {
    background: #7c8c42;
  }

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
  .city-7:before {
    background-image: url(${flagChina});
  }
  .city-8:before {
    background-image: url(${flagSouthKorea});
  }
  .city-9:before {
    background-image: url(${flagGermany});
  }
`

export default class OfficesFactoriesComponent extends React.Component {
  render() {
    const { match } = this.props

    return (
      <OfficesFactories id="OfficesFactories">
        <Fade>
          <div className="page-section map-wrep" id="of">
            <div className="map-inner pboth60">
              <Parallax className="fork-knife" x={[50, 10]} tagOuter="figure">
                <img src={forkknife} />
              </Parallax>
              <div className="container">
                <div className="row justify-content-end">
                  <div className="col-md-7 col-lg-5 col-sm-6">
                    <div className="waw-title map-title">
                      <h2>
                        Our offices
                        <br />
                        &amp; factories
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="map-image-wrep">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="map-image hidetablet">
                        {/* <!--                                <img src="images/map-icon.jpg" alt="">--> */}
                        <img alt="" src={map} />
                      </div>
                      <div className="map-markers hidetablet">
                        <Link to="us" asModal>
                          <div
                            className="map-markers__mark map-markers__mark--offices marker1"
                            data-fancybox="temp1"
                            data-src="#temp1"
                          ></div>
                        </Link>
                        <Link to="uk" asModal>
                          <div
                            className="map-markers__mark map-markers__mark--offices marker2"
                            data-left="45%"
                            data-top="23.5%"
                            data-fancybox="temp2"
                            data-src="#temp2"
                          ></div>
                        </Link>
                        <Link to="belgium" asModal>
                          <div
                            className="map-markers__mark map-markers__mark--offices marker3"
                            data-left="47.5%"
                            data-top="27%"
                            data-fancybox="temp3"
                            data-src="#temp3"
                          ></div>
                        </Link>
                        <Link to="netherlands" asModal>
                          <div
                            className="map-markers__mark map-markers__mark--offices marker4"
                            data-left="50%"
                            data-top="25%"
                            data-fancybox="temp4"
                            data-src="#temp4"
                          ></div>
                        </Link>
                        <Link to="germany" asModal>
                        <div
                          className="map-markers__mark map-markers__mark--factories marker5"
                          data-left="52%"
                          data-top="26%"
                          data-fancybox="temp5"
                          data-src="#temp5"
                        ></div>
                        </Link>
                        <Link to="china" asModal>
                        <div
                          className="map-markers__mark map-markers__mark--factories marker6"
                          data-left="78%"
                          data-top="44%"
                          data-fancybox="temp6"
                          data-src="#temp6"
                        ></div>
                        </Link>
                        <Link to="hongkong" asModal>
                        <div
                          className="map-markers__mark map-markers__mark--offices marker7"
                          data-left="79.5%"
                          data-top="44%"
                          data-fancybox="temp7"
                          data-src="#temp7"
                        ></div>
                        </Link>
                        <Link to="south-korea" asModal>
                        <div
                          className="map-markers__mark map-markers__mark--factories marker8"
                          data-left="82%"
                          data-top="36%"
                          data-fancybox="temp8"
                          data-src="#temp8"
                        ></div>
                        </Link>
                        <Link to="japan" asModal>
                        <div
                          className="map-markers__mark map-markers__mark--offices marker9"
                          data-left="85.5%"
                          data-top="37%"
                          data-fancybox="temp9"
                          data-src="#temp9"
                        ></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="legends">
                  <div>
                    <img src={officesLegend}></img>
                    <span>Sales offices</span>
                  </div>
                  <div>
                    <img src={factoriesLegend}></img>
                    <span>Factories</span>
                  </div>
                </div>
                <div className="city-name-wrep">
                  <div className="row justify-content-center hidetablet">
                    <div className="col-md-11 col-lg-8 col-sm-12 ">
                      <div className="city-name-inner">
                        <div className="city-name">
                          <Link to="belgium" asModal>
                            <button className="dark-perot city-1">
                              Belgium
                            </button>
                          </Link>

                          <Link to="netherlands" asModal>
                            <button className="dark-perot city-2 no-letter-spacing ">
                              Netherlands
                            </button>
                          </Link>

                          <Link to="uk" asModal>
                            <button className="dark-perot city-3">Uk</button>
                          </Link>

                          <Link to="us" asModal>
                            <button className="dark-perot city-4">Us</button>
                          </Link>

                          <Link to="japan" asModal>
                            <button className="dark-perot city-5">Japan</button>
                          </Link>

                          <Link to="hongkong" asModal>
                            <button className="dark-perot city-6">
                              Hong Kong
                            </button>
                          </Link>

                          <Link to="china" asModal>
                            <button className="light-gray city-7">China</button>
                          </Link>

                          <Link to="south-korea" asModal>
                            <button className="light-gray city-8 no-letter-spacing ">
                              South Korea
                            </button>
                          </Link>

                          <Link to="germany" asModal>
                            <button className="light-gray city-9 no-letter-spacing ">
                              Germany
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-content-wrap"></div>
          </div>
        </Fade>
      </OfficesFactories>
    )
  }
}
