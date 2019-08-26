import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'
import Popup from 'reactjs-popup'
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
import Belgium from '../images/cb-icon-5.png'
import Netherlands from '../images/cb-icon-1.png'
import Uk from '../images/cb-icon-2.png'
import Us from '../images/cb-icon-4.png'
import China from '../images/cb-icon-7.png'
import Japan from '../images/cb-icon-3.png'
import HongKong from '../images/cb-icon-6.png'
import SouthKorea from '../images/cb-icon-9.png'
import Germany from '../images/cb-icon-8.png'
import officesLegend from '../images/map-legend--offices.svg'
import factoriesLegend from '../images/map-legend--factories.svg'
import officesMarker from '../images/map-marker--offices.svg'
import factoriesMarker from '../images/map-marker--factories.svg'
import backIcon from '../images/back-icon.svg'

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

  .light-gray {
    background: #b9b8ab;
  }

  .dark-perot {
    background: #7c8c42;
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
    margin: 15px 5px;
    text-transform: uppercase;

    &:before {
      content: '';
      position: absolute;
      background-repeat: no-repeat;
      width: 22px;
      height: 22px;
      border: 1px solid #fff;
      border-radius: 30px;
      left: -6px;
      top: -5px;
    }
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

  .temp1:before {
    background-image: url(${Belgium});
  }
  .temp2:before {
    background-image: url(${Netherlands});
  }
  .temp3:before {
    background-image: url(${Uk});
  }
  .temp4:before {
    background-image: url(${Us});
  }
  .temp5:before {
    background-image: url(${Japan});
  }
  .temp6:before {
    background-image: url(${HongKong});
  }
  .temp7:before {
    background-image: url(${China});
  }
  .temp8:before {
    background-image: url(${SouthKorea});
  }
  .temp9:before {
    background-image: url(${Germany});
  }

  .temp-header-bake,
  .temp-content-main {
    text-align: left;
  }

  .temp-content-inner {
    padding: 100px 50px;
  }

  .temp-header-bake:before {
    position: absolute;
    content: '';
    width: 220px;
    background-position: top left;
    height: 100%;
    background-repeat: no-repeat;
  }

  .temp-title {
    padding: 45px 0px 70px;
  }

  .temp-header-bake .container {
    max-width: 960px;
  }

  .temp-title h1,
  .temp-title h2 {
    font-family: Montserrat;
    font-weight: 700;
    color: #fff;
  }

  .temp-title h2 {
    font-size: 38px;
    display: inline;
    position: relative;

    &:before {
      position: absolute;
      content: '';
      width: 70px;
      height: 2px;
      background: #fff;
      left: 5px;
      bottom: -15px;
    }
  }

  .office-adderess h5 {
    font-family: 'Montserrat';
    font-weight: 700;
    color: #676260;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .office-adderess p {
    font-family: 'Montserrat';
    color: #676260;
    font-size: 14px;
    line-height: 23px;
  }

  .office-icon {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    img {
      width: 75px;
    }

    span {
      font-family: Montserrat;
      font-size: 18px;
      letter-spacing: 2px;
      margin-left: 15px;
      color: #676260;
    }
  }

  .back-icon {
    position: absolute;
    right: 100px;
    bottom: 50px;
    margin: 0 !important;
    width: 50px;
    cursor: pointer;
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
      font-weight: 700;
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

  .marker1 {
    left: calc(27% - 25px);
    top: calc(29% - 30px);
  }

  .marker2 {
    left: calc(45% - 25px);
    top: calc(23.5% - 30px);
  }

  .marker3 {
    left: calc(47.5% - 25px);
    top: calc(27% - 30px);
  }

  .marker4 {
    left: calc(50% - 25px);
    top: calc(25% - 30px);
  }

  .marker5 {
    left: calc(52% - 25px);
    top: calc(26% - 30px);
  }

  .marker6 {
    left: calc(78% - 25px);
    top: calc(44% - 30px);
  }

  .marker7 {
    left: calc(79.5% - 25px);
    top: calc(44% - 30px);
  }

  .marker8 {
    left: calc(82% - 25px);
    top: calc(36% - 30px);
  }

  .marker9 {
    left: calc(85.5% - 25px);
    top: calc(37% - 30px);
  }
`

export default () => (
  <OfficesFactories id="OfficesFactories">
    <StaticQuery
      query={graphql`
        query offices {
          file(relativePath: { eq: "hero.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000, maxHeight: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Fade>
          <div class="page-section map-wrep" id="of">
            <div class="map-inner pboth60">
              <Parallax
                className="fork-knife"
                x={[50, 10]}
                tagOuter="figure"
              >
                <img src={forkknife} />
              </Parallax>
              <div class="container">
                <div class="row justify-content-end">
                  <div class="col-md-7 col-lg-5 col-sm-6">
                    <div class="waw-title map-title">
                      <h2>
                        Our offices
                        <br />
                        &amp; factories
                      </h2>
                    </div>
                  </div>
                </div>
                <div class="map-image-wrep">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="map-image hidetablet">
                        {/* <!--                                <img src="images/map-icon.jpg" alt="">--> */}
                        <img alt="" src={map} />
                      </div>
                      <div class="map-markers hidetablet">
                        <div
                          class="map-markers__mark map-markers__mark--offices marker1"
                          data-fancybox="temp1"
                          data-src="#temp1"
                        ></div>
                        <div
                          class="map-markers__mark map-markers__mark--offices marker2"
                          data-left="45%"
                          data-top="23.5%"
                          data-fancybox="temp2"
                          data-src="#temp2"
                        ></div>
                        <div
                          class="map-markers__mark map-markers__mark--offices marker3"
                          data-left="47.5%"
                          data-top="27%"
                          data-fancybox="temp3"
                          data-src="#temp3"
                        ></div>
                        <div
                          class="map-markers__mark map-markers__mark--offices marker4"
                          data-left="50%"
                          data-top="25%"
                          data-fancybox="temp4"
                          data-src="#temp4"
                        ></div>
                        <div
                          class="map-markers__mark map-markers__mark--factories marker5"
                          data-left="52%"
                          data-top="26%"
                          data-fancybox="temp5"
                          data-src="#temp5"
                        ></div>
                        <div
                          class="map-markers__mark map-markers__mark--factories marker6"
                          data-left="78%"
                          data-top="44%"
                          data-fancybox="temp6"
                          data-src="#temp6"
                        ></div>
                        <div
                          class="map-markers__mark map-markers__mark--offices marker7"
                          data-left="79.5%"
                          data-top="44%"
                          data-fancybox="temp7"
                          data-src="#temp7"
                        ></div>
                        <div
                          class="map-markers__mark map-markers__mark--factories marker8"
                          data-left="82%"
                          data-top="36%"
                          data-fancybox="temp8"
                          data-src="#temp8"
                        ></div>
                        <div
                          class="map-markers__mark map-markers__mark--offices marker9"
                          data-left="85.5%"
                          data-top="37%"
                          data-fancybox="temp9"
                          data-src="#temp9"
                        ></div>
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
                <div class="city-name-wrep">
                  {/* <div class="city-dropdown">
                  <select name="map-select" id="map-select">
                    <option value="BELGIUM">BELGIUM</option>
                    <option value="NETHERLANDS">NETHERLANDS</option>
                    <option value="UK">UK</option>
                    <option value="US">US</option>
                    <option value="JAPAN">JAPAN</option>
                    <option value="HONG KONG">HONG KONG</option>
                    <option value="CHINA">CHINA</option>
                    <option value="SOUTH KOREA">SOUTH KOREA</option>
                    <option value="GERMANY">GERMANY</option>
                  </select>
                </div> */}
                  <div class="row justify-content-center hidetablet">
                    <div class="col-md-11 col-lg-7 col-sm-12 ">
                      <div class="city-name-inner">
                        <div class="city-name">
                          <Popup
                            trigger={
                              <button className="dark-perot city-1">
                                Belgium
                              </button>
                            }
                            modal
                            closeOnDocumentClick
                          >
                            {close => (
                              <div class="city-temp-wrep" id="temp1">
                                <div class="city-temp-inner">
                                  <div class="temp-header-bake temp1 dark-perot">
                                    <div class="container">
                                      <div class="temp-header-inner">
                                        <div class="row ">
                                          <div class="col-md-12">
                                            <div class="temp-title">
                                              <h1>The Cookware Company BVBA</h1>
                                              <h2>(Drongen, Belgium)</h2>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="temp-content-main">
                                    <div class="container">
                                      <div class="temp-content-inner pb100">
                                        <div class="row ">
                                          <div class="col-md-7">
                                            <div class="office-address-bake pt50">
                                              <div class="office-icon pt60">
                                                <img
                                                  src={officesLegend}
                                                  alt=""
                                                />
                                                <span>Sales office</span>
                                              </div>
                                            </div>
                                            <div class="row">
                                              <div class="col-md-7">
                                                <div class="office-adderess">
                                                  <h5>
                                                    Anotech International UK
                                                    Ltd.
                                                  </h5>
                                                  <p>
                                                    The Cookware Company BVBA
                                                    <br />
                                                    Antoon Catriestraat 12
                                                    <br />
                                                    9031 Drongen
                                                    <br />
                                                    België
                                                    <br />
                                                    BTW BE0635 907 452
                                                    <br />
                                                    BNP PARIBAS FORTIS
                                                    <br />
                                                    IBAN BE48 0017 65143 1127
                                                    <br />
                                                    GEBABBEB
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-md-5">
                                            <div class="office-image pt60">
                                              <img
                                                src="images/i-7.png"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <img
                                  onClick={close}
                                  src={backIcon}
                                  className="back-icon"
                                  alt=""
                                />
                              </div>
                            )}
                          </Popup>
                          <Popup
                            trigger={
                              <button className="dark-perot city-2">
                                Netherlands
                              </button>
                            }
                            modal
                            closeOnDocumentClick
                          >
                            {close => (
                              <div class="city-temp-wrep">
                                <div class="city-temp-inner">
                                  <div class="temp-header-bake temp2 dark-perot">
                                    <div class="container">
                                      <div class="temp-header-inner">
                                        <div class="row ">
                                          <div class="col-md-12">
                                            <div class="temp-title">
                                              <h1>
                                                BK Cookware BV,
                                                <br />
                                                BV Koninklijke Van Kempen en
                                                Begeer
                                              </h1>
                                              <h2>(Delft, The Netherlands)</h2>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="temp-content-main">
                                    <div class="container">
                                      <div class="temp-content-inner pb100">
                                        <div class="row ">
                                          <div class="col-md-8">
                                            <div class="office-address-bake pt50">
                                              <div class="office-icon pt60">
                                                <img
                                                  src={officesLegend}
                                                  alt=""
                                                />
                                                <span>Sales office</span>
                                              </div>
                                            </div>
                                            <div class="row">
                                              <div class="col-md-5">
                                                <div class="office-adderess">
                                                  <h5>BK Cookware BV </h5>
                                                  <p class="mb20">
                                                    Rotterdamseweg 196
                                                    <br />
                                                    2628 AR Delft
                                                    <br />
                                                    Nederland
                                                  </p>
                                                  <p>
                                                    BTW NL8224 29 743 B 01
                                                    <br />
                                                    ABN AMRO
                                                    <br />
                                                    IBAN: NL15 ABNA 0405 50 6171
                                                    <br />
                                                    SWIFT: ABNANL2A
                                                  </p>
                                                </div>
                                              </div>
                                              <div class="col-md-7">
                                                <div class="office-adderess">
                                                  <h5>
                                                    BV Koninklijke Van Kempen en
                                                    Begeer{' '}
                                                  </h5>
                                                  <p class="mb20">
                                                    Rotterdamseweg 196
                                                    <br />
                                                    2628 AR Delft
                                                    <br />
                                                    Nederland
                                                  </p>
                                                  <p>
                                                    BTW NL0035 23 482 B 01
                                                    <br />
                                                    ABN AMRO
                                                    <br />
                                                    IBAN: NL77 ABNA 0550 9125 17
                                                    <br />
                                                    SWIFT: ABNANL2A
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-md-4">
                                            <div class="office-image pt60">
                                              <img
                                                src="images/i-7.png"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <img
                                  onClick={close}
                                  src={backIcon}
                                  className="back-icon"
                                  alt=""
                                />
                              </div>
                            )}
                          </Popup>
                          <Popup
                            trigger={
                              <button className="dark-perot city-3">Uk</button>
                            }
                            modal
                            closeOnDocumentClick
                          >
                            {close => (
                              <div class="city-temp-wrep">
                                <div class="city-temp-inner">
                                  <div class="temp-header-bake temp3 dark-perot">
                                    <div class="container">
                                      <div class="temp-header-inner">
                                        <div class="row ">
                                          <div class="col-md-12">
                                            <div class="temp-title">
                                              <h1>
                                                Anotech International UK Ltd.
                                              </h1>
                                              <h2>(United Kingdom)</h2>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="temp-content-main">
                                    <div class="container">
                                      <div class="temp-content-inner pb100">
                                        <div class="row ">
                                          <div class="col-md-7">
                                            <div class="office-address-bake pt50">
                                              <div class="office-icon pt60">
                                                <img
                                                  src={officesLegend}
                                                  alt=""
                                                />
                                                <span>Sales office</span>
                                              </div>
                                            </div>
                                            <div class="row">
                                              <div class="col-md-7">
                                                <div class="office-adderess">
                                                  <h5>
                                                    Anotech International UK
                                                    Ltd.
                                                  </h5>
                                                  <p>
                                                    Unit 1H
                                                    <br />
                                                    Grovemere House
                                                    <br />
                                                    Lancaster Way Business Park
                                                    <br />
                                                    Ely, CB6 3NW
                                                    <br />
                                                    VAT: 980702221
                                                    <br />
                                                    HSBC GBP
                                                    <br />
                                                    IBAN: GB64 MIDL 4004 0961
                                                    861018 61861018
                                                    <br />
                                                    Routing N° 400409
                                                    <br />
                                                    SWIFT: MIDLGB22
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-md-5">
                                            <div class="office-image pt60">
                                              <img
                                                src="images/i-7.png"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <img
                                  onClick={close}
                                  src={backIcon}
                                  className="back-icon"
                                  alt=""
                                />
                              </div>
                            )}
                          </Popup>
                          <Popup
                            trigger={
                              <button className="dark-perot city-4">Us</button>
                            }
                            modal
                            closeOnDocumentClick
                          >
                            {close => (
                              <div class="city-temp-wrep" id="temp5">
                                <div class="city-temp-inner">
                                  <div class="temp-header-bake temp4 dark-perot">
                                    <div class="container">
                                      <div class="temp-header-inner">
                                        <div class="row ">
                                          <div class="col-md-12">
                                            <div class="temp-title">
                                              <h1>The Cookware Company USA</h1>
                                              <h2>(United States)</h2>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="temp-content-main">
                                    <div class="container">
                                      <div class="temp-content-inner pb100">
                                        <div class="row ">
                                          <div class="col-md-7">
                                            <div class="office-address-bake pt50">
                                              <div class="office-icon pt60">
                                                <img
                                                  src={officesLegend}
                                                  alt=""
                                                />
                                                <span>Sales office</span>
                                              </div>
                                            </div>
                                            <div class="row">
                                              <div class="col-md-7">
                                                <div class="office-adderess">
                                                  <h5>
                                                    Anotech International UK
                                                    Ltd.
                                                  </h5>
                                                  <p class="mb20">
                                                    94 North Broadway
                                                    <br />
                                                    Irvington, New York 10533
                                                    <br />
                                                    United States of America
                                                  </p>
                                                  <p>
                                                    JP Morgan Chase Bank, N.A.
                                                    <br />
                                                    IBAN: 780159310
                                                    <br />
                                                    Routing N° 021000021
                                                    <br />
                                                    SWIFT: CHASUS33
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-md-5">
                                            <div class="office-image pt60">
                                              <img
                                                src="images/i-7.png"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <img
                                  onClick={close}
                                  src={backIcon}
                                  className="back-icon"
                                  alt=""
                                />
                              </div>
                            )}
                          </Popup>
                          <Popup
                            trigger={
                              <button className="dark-perot city-5">
                                Japan
                              </button>
                            }
                            modal
                            closeOnDocumentClick
                          >
                            {close => (
                              <div class="city-temp-wrep" id="temp3">
                                <div class="city-temp-inner">
                                  <div class="temp-header-bake temp3 dark-perot">
                                    <div class="container">
                                      <div class="temp-header-inner">
                                        <div class="row ">
                                          <div class="col-md-12">
                                            <div class="temp-title">
                                              <h1>GreenPan Japan Ltd.</h1>
                                              <h2>(Japan)</h2>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="temp-content-main">
                                    <div class="container">
                                      <div class="temp-content-inner pb100">
                                        <div class="row ">
                                          <div class="col-md-7">
                                            <div class="office-address-bake pt50">
                                              <div class="office-icon pt60">
                                                <img
                                                  src={officesLegend}
                                                  alt=""
                                                />
                                                <span>Sales office</span>
                                              </div>
                                            </div>
                                            <div class="row">
                                              <div class="col-md-7">
                                                <div class="office-adderess">
                                                  <h5>
                                                    Anotech International UK
                                                    Ltd.
                                                  </h5>
                                                  <p>
                                                    Unit 1H
                                                    <br />
                                                    Grovemere House
                                                    <br />
                                                    Lancaster Way Business Park
                                                    <br />
                                                    Ely, CB6 3NW
                                                    <br />
                                                    VAT: 980702221
                                                    <br />
                                                    HSBC GBP
                                                    <br />
                                                    IBAN: GB64 MIDL 4004 0961
                                                    861018 61861018
                                                    <br />
                                                    Routing N° 400409
                                                    <br />
                                                    SWIFT: MIDLGB22
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-md-5">
                                            <div class="office-image pt60">
                                              <img
                                                src="images/i-7.png"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <img
                                  onClick={close}
                                  src={backIcon}
                                  className="back-icon"
                                  alt=""
                                />
                              </div>
                            )}
                            s
                          </Popup>
                          <Popup
                            trigger={
                              <button className="dark-perot city-6">
                                Hong Kong
                              </button>
                            }
                            modal
                            closeOnDocumentClick
                          >
                            <div>Popup content here !!</div>
                          </Popup>
                          <Popup
                            trigger={
                              <button className="dark-perot city-7">
                                China
                              </button>
                            }
                            modal
                            closeOnDocumentClick
                          >
                            <div>Popup content here !!</div>
                          </Popup>
                          <Popup
                            trigger={
                              <button className="light-gray city-8">
                                South Korea
                              </button>
                            }
                            modal
                            closeOnDocumentClick
                          >
                            <div>Popup content here !!</div>
                          </Popup>
                          <Popup
                            trigger={
                              <button className="light-gray city-9">
                                Germany
                              </button>
                            }
                            modal
                            closeOnDocumentClick
                          >
                            <div>Popup content here !!</div>
                          </Popup>
                          {/* <a
                          class="dark-perot letter-space-0 city-2"
                          data-fancybox="temp2"
                          data-src="#temp2"
                          href="javascript:;"
                        >
                          NETHERLANDS
                        </a>
                        <a
                          class="dark-perot city-3"
                          data-fancybox="temp3"
                          data-src="#temp3"
                          href="javascript:;"
                        >
                          UK
                        </a>
                        <a
                          class="dark-perot city-4"
                          data-fancybox="temp4"
                          data-src="#temp4"
                          href="javascript:;"
                        >
                          US
                        </a>
                        <a
                          class="dark-perot city-5"
                          data-fancybox="temp5"
                          data-src="#temp5"
                          href="javascript:;"
                        >
                          JAPAN
                        </a>
                        <a
                          class="dark-perot letter-space-0 city-6"
                          data-fancybox="temp6"
                          data-src="#temp6"
                          href="javascript:;"
                        >
                          HONG KONG
                        </a>
                        <a
                          class="light-gray city-7"
                          data-fancybox="temp7"
                          data-src="#temp7"
                          href="javascript:;"
                        >
                          CHINA
                        </a>
                        <a
                          class="light-gray letter-space-0 city-8"
                          data-fancybox="temp8"
                          data-src="#temp8"
                          href="javascript:;"
                        >
                          SOUTH KOREA
                        </a>
                        <a
                          class="light-gray city-9"
                          data-fancybox="temp9"
                          data-src="#temp9"
                          href="javascript:;"
                        >
                          GERMANY
                        </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="map-content-wrap"></div>
          </div>
        </Fade>
      )}
    />
  </OfficesFactories>
)
