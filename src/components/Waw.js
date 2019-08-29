import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade';

import timelineEven from '../images/timeline--even.png'
import timelineOdd from '../images/timeline--odd.png'
import timelineArrow from '../images/timeline--arrow.svg'
import pot2 from '../images/pot-2.svg'
import fork from '../images/fork.svg'

const Waw = styled.section`
  h2,
  h3,
  h4 {
    font-family: Montserrat;
    font-weight: 700;
  }

  h2 {
    position: relative;

    font-size: 64px;

    color: #676260;
  }

  h3 {
    font-size: 36px;
    line-height: 34px;
    color: #7c8c42;
  }

  .waw-title h2:after {
    position: absolute;
    content: '';
    bottom: -7px;
    left: 0;
    width: 90px;
    height: 3px;
    background: #676260;
  }

  .waw-inner {
    background: #d6d6cd;
    padding: 100px 0px;
    position: relative;
  }

  .waw-content-wrep {
    padding: 40px 0px;
  }

  .waw-content-left {
    margin-bottom: 50px;

    ${breakpoint('desktop')`
      padding-right: 20px;
    `}

    p {
      margin-bottom: 40px;
    }
  }

  .waw-content-right {

    ${breakpoint('desktop')`
      padding-left: 20px;
    `}

    p {
      margin: 40px 0;
    }
  }

  .waw-content p {
    color: #676260;
    font-size: 14px;
    font-weight: 700;
    text-align: justify;
    line-height: 16px;
    letter-spacing: 2.3px;
  }

  .cookware-box {
    h3 {
      font-size: 22px;
      line-height: 26px;
      color: #fff;
    }
  }

  .cm-before:before {
    position: absolute;
    content: ' ';
    border: solid transparent;
    border-width: 25px;
    border-color: rgba(136, 183, 213, 0);
    z-index: 5;
    top: 20%;
    left: -50px;
    border-right-color: #7c8c42;
    border-right-width: 25px;
  }

  .cm-after::after {
    position: absolute;
    content: ' ';
    border: solid transparent;
    border-width: 25px;
    border-color: rgba(136, 183, 213, 0);
    z-index: 5;
    bottom: 20%;
    right: -50px;
    border-left-color: #7c8c42;
    border-left-width: 25px;
  }

  .cw-box-content {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: #7c8c42;
    position: relative;
    padding: 10px;
  }

  .timeline-title {
    font-size: 38px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 70px;
    margin-bottom: 70px;
  }

  ul.timeline-content {
    padding-top: 40px;
    display: flex;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 54%;
      height: 3px;
      background: #7c8c42;
      left: -25px;
      right: -15px;
    }

    &:after {
      content: '';
      background: url(${timelineArrow}) no-repeat right;
      position: absolute;
      right: -30px;
      width: 29px;
      height: 33px;
      top: 54%;
      transform: translateY(-45%);
      background-size: cover;
    }

    li {
      padding: 0 15px;
      position: relative;

      &:nth-of-type(odd) {
        background: url(${timelineOdd}) no-repeat center;
        background-size: 65px;

        &:before {
          display: block;
          content: '';
          width: 1px;
          height: 85px;
          background: #676260;
          left: 50%;
          position: absolute;
          bottom: calc(50% + 20px);
        }

        &::after {
          display: block;
          content: '';
          width: 1px;
          height: 85px;
          background: #676260;
          left: 50%;
          position: absolute;
          top: calc(50% + 20px);
        }

        .tc-item {
          height: 200px;

          &:last-child {
            padding-top: 120px;
          }
        }
      }

      &:nth-of-type(even) {
        background: url(${timelineEven}) no-repeat center;
        background-size: 65px;

        &:before {
          display: block;
          content: '';
          width: 1px;
          height: 35px;
          background: #676260;
          left: 50%;
          position: absolute;
          bottom: calc(50% + 20px);
        }

        &:after {
          display: block;
          content: '';
          width: 1px;
          height: 35px;
          background: #676260;
          left: 50%;
          position: absolute;
          top: calc(50% + 20px);
        }

        .tc-item:first-child {
          margin-top: 50px;
        }

        .tc-item:last-child {
          padding-top: 70px;
        }
      }
    }
  }

  .tc-item {
    max-width: 130px;
    height: 150px;

    h5 {
      font-family: 'Montserrat';
      font-size: 35px;
      color: #7c8c42;
    }

    span {
      font-size: 13px;
      color: #676260;
      font-family: 'Montserrat';
      font-weight: Bold;
      display: block;
      text-transform: uppercase;
    }
  }
`



export default () => (
  <Waw className="page-section waw-wrep" id="waw">
    <StaticQuery
      query={graphql`
        query WawOneQuery {
          imageOne: file(relativePath: { eq: "greenpan-people.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 381, maxHeight: 172) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageTwo: file(relativePath: { eq: "cookware-coocking.jpg" }) {
            childImageSharp {
              fluid(maxHeight: 177, maxWidth: 190) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageThree: file(relativePath: { eq: "cookware-coocking-2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 190, maxHeight: 176) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageFour: file(relativePath: { eq: "cookware-coocking-3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 192, maxHeight: 176) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div className="waw-inner">
          <div className="container">
            <Fade className="waw-bake">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="waw-title">
                    <h2>Who are we?</h2>
                  </div>
                  <div className="row no-gutters waw-content-wrep">
                    <div className="col-lg-6 waw-content-left">
                      <div className="waw-content-inner">
                        <div className="waw-content">
                          <p>
                            The Cookware Company is a global company with a high
                            expertise in innovative cookware. Our organization
                            is vertically integrated, allowing us to manage both
                            the production and distribution of our products. We
                            have sales offices in Europe, the United States and
                            Asia as well as state-of-the-art production
                            facilities in Korea, China and Europe. We have high
                            quality standards (eg. ISO-certificates) and work
                            hard to reduce our environmental impact.
                          </p>
                          <Img fluid={data.imageOne.childImageSharp.fluid} />
                          <div className="cookware-box">
                            <div className="row no-gutters">
                              <div className="col-md-6 col-sm-6 col-6">
                                <Img
                                  fluid={data.imageTwo.childImageSharp.fluid}
                                />
                              </div>
                              <div className="col--6 col-sm-6 col-6">
                                <div className="cw-box-content cm-before">
                                  <h3>
                                    Pioneer
                                    <br />
                                    in healthy
                                    <br />
                                    ceramic
                                    <br />
                                    non-stick
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 waw-content-right">
                      <div className="waw-content">
                        <div className="waw-content-inner">
                          <h3>
                            Vertically
                            <br />
                            integrated
                            <br />
                            company with
                            <br />
                            worldwide
                            <br />
                            presence
                          </h3>
                          <div className="mt30 mb20"></div>
                          <p className="mt40">
                            The Cookware Company has always been a pioneer in
                            healthy ceramic non-stick cookware. Over the years
                            we have extended our scope in order to offer smart
                            cookware solutions for everyone. Innovation,
                            flexibility, creativity and social responsibility
                            are our main focus. However, our most important
                            asset are our people. They’re the heart of our
                            company.{' '}
                          </p>
                          <div className="cookware-box">
                            <div className="row no-gutters">
                              <div className="col-md-6 col-sm-6 col-6">
                                <div className="cw-box-content cm-after">
                                  <h3>
                                    High expertise
                                    <br />
                                    in production
                                    <br />
                                    &amp; distribution
                                    <br />
                                    of innovative cookware
                                  </h3>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-6 col-6">
                                <Img
                                  fluid={data.imageThree.childImageSharp.fluid}
                                />
                              </div>
                            </div>
                            <div className="row no-gutters">
                              <div className="col-md-6 col-sm-6 col-6">
                                <Img
                                  fluid={data.imageFour.childImageSharp.fluid}
                                />
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
          <div className="tm-wrep">
            <div className="container">
              <Fade className="timeline-wrep">
                <div className="timeline-bake">
                  <div className="row justify-content-center">
                    <div className="2 col-lg-9">
                      <h2 className="timeline-title">Timeline</h2>
                      <div className="timeline-content-wrep">
                        <div className="timeline-content-inner">
                          <ul className="timeline-content">
                            <li>
                              <div className="tc-item">
                                <h5>2005</h5>
                                <span>ANOTECH</span>
                                <span>MANUFACTURING</span>
                              </div>
                              <div className="tc-item">
                                <h5>2013</h5>
                                <span>loyalty</span>
                                <span>department</span>
                              </div>
                            </li>
                            <li>
                              <div className="tc-item">
                                <h5>20..</h5>
                                <span>
                                  THERMOLON<sup>TM</sup>
                                </span>
                              </div>
                              <div className="tc-item">
                                <h5>2016</h5>
                                <span>INSTORE LOYALTYKITCHENAID</span>
                              </div>
                            </li>
                            <li>
                              <div className="tc-item">
                                <h5>2007</h5>
                                <span>GREENPAN</span>
                              </div>
                              <div className="tc-item">
                                <h5>2016</h5>
                                <span>BLUE DIAMOND</span>
                              </div>
                            </li>
                            <li>
                              <div className="tc-item">
                                <h5>2011</h5>
                                <span>GREENCHEF &amp; GREENLIFE</span>
                              </div>
                              <div className="tc-item">
                                <h5>2018</h5>
                                <span>
                                  AQUISITION BK, KELTUM, GERO, VAN KEMPEN EN
                                  BEGEER
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className="tc-item">
                                <h5>2012</h5>
                                <span>
                                  THE COOKWARE COMPANY USA &amp; 1ST DISTRIBUTOR
                                </span>
                              </div>
                              <div className="tc-item">
                                <h5>2019</h5>
                                <span>aquistion</span>
                                <span>merten &amp; storck,</span>
                                <span>kochstar</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      )}
    />

    <Parallax className="pot-2" x={[-80, -20]} y={[80, 100]} tagOuter="figure">
      <img src={pot2} />
    </Parallax>

    <Parallax className="fork" x={[80, -30]} y={[50, 10]} tagOuter="figure">
      <img src={fork} />
    </Parallax>
  </Waw>
)