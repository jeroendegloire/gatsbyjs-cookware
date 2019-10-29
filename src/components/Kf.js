import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'
import { Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'
import VisibilitySensor from 'react-visibility-sensor'

import kf_1 from '../images/figures--turnover.svg'
import kf_2 from '../images/figures--factories.svg'
import kf_3 from '../images/figures--capacity-factories.svg'
import kf_4 from '../images/figures--brands.svg'
import kf_5 from '../images/figures--employees.svg'
import kf_6 from '../images/figures--trademarks.svg'

import pan from '../images/pan.svg'
import pot from '../images/pot.svg'

const Kf_wrapper = styled.section`
  position: relative;
  padding: 60px 0px 200px;

  sup {
    font-size: 21px;
  }

  &:before {
    content: '';
    display: block;
    background: white;
    height: 100%;
    position: absolute;
    top: -100px;
    width: 125%;
    -webkit-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }

  .kf-title > h2 {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 53px;
    color: #676260;
    text-align: center;
    margin-bottom: 20px;
  }

  .kf-box {
    text-align: center;
    margin-top: 50px;

    > img {
      width: 126px;
      height: 126px;
    }

    > h3 {
      color: #676260;
      font-size: 35px;
      font-family: Montserrat;
      font-weight: 700;
      margin: 10px 0px;
    }

    .more-then {
      color: #414042;
      font-family: Montserrat;
      font-size: 12px;
      letter-spacing: 2px;
      display: block;
      margin-top: 15px;
    }

    > span:last-child {
      color: #7c8c42;
      font-family: Montserrat;
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
`

class Kf extends React.Component {
  state = {
    didViewCountUp: false,
  }

  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ didViewCountUp: true })
    }
  }

  render() {
    return (
      <Kf_wrapper className="page-section" id="kf">
        <Parallax className="pan" x={[-80, -20]} y={[0, 60]} tagOuter="figure">
          <img src={pan} />
        </Parallax>

        <Parallax className="pot" x={[120, 20]} y={[0, 60]} tagOuter="figure">
          <img src={pot} />
        </Parallax>

        <Fade>
          <div className="container">
            <div className="kf-title-bake">
              <div className="kf-title">
                <h2>The company at a Glance</h2>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-6">
                      <div className="kf-box-inner">
                        <div className="kf-box">
                          <img src={kf_1} alt="Turnover" />
                          <span className="more-then">MORE THAN</span>
                          <VisibilitySensor
                            onChange={this.onVisibilityChange}
                            offset={{
                              top: 10,
                            }}
                            delayedCall
                          >
                            <h3>
                              $
                              <CountUp
                                duration={3}
                                end={this.state.didViewCountUp ? 200 : 0}
                              />
                              m{' '}
                            </h3>
                          </VisibilitySensor>

                          <span>TURNOVER 2018</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="kf-box-inner">
                        <div className="kf-box">
                          <img src={kf_2} alt="Factories" />
                          <span className="more-then">MORE THAN</span>
                          <VisibilitySensor
                            onChange={this.onVisibilityChange}
                            offset={{
                              top: 10,
                            }}
                            delayedCall
                          >
                            <h3>
                              <CountUp
                                duration={3}
                                start={100000}
                                end={this.state.didViewCountUp ? 200000 : 0}
                                separator="."
                              />{' '}
                              m<sup>2</sup>
                            </h3>
                          </VisibilitySensor>

                          <span>IN 3 FACTORIES</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="kf-box-inner">
                        <div className="kf-box">
                          <img src={kf_3} alt="Capacity factories" />
                          <span className="more-then">MORE THAN</span>
                          <VisibilitySensor
                            onChange={this.onVisibilityChange}
                            offset={{
                              top: 10,
                            }}
                            delayedCall
                          >
                            <h3>
                              <CountUp
                                duration={3}
                                end={this.state.didViewCountUp ? 20 : 0}
                              />
                              m/year
                            </h3>
                          </VisibilitySensor>
                          <span>CAPACITY FACTORIES</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="kf-box-inner">
                        <div className="kf-box">
                          <img src={kf_4} alt="Brands" />
                          <span className="more-then">MORE THAN</span>
                          <VisibilitySensor
                            onChange={this.onVisibilityChange}
                            offset={{
                              top: 10,
                            }}
                            delayedCall
                          >
                            <h3>
                              <CountUp
                                duration={3}
                                end={this.state.didViewCountUp ? 10 : 0}
                              />
                            </h3>
                          </VisibilitySensor>
                          <span>BRANDS</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="kf-box-inner">
                        <div className="kf-box">
                          <img src={kf_5} alt="Employees" />
                          <span className="more-then">MORE THAN</span>
                          <VisibilitySensor
                            onChange={this.onVisibilityChange}
                            offset={{
                              top: 10,
                            }}
                            delayedCall
                          >
                            <h3>
                              <CountUp
                                duration={3}
                                end={this.state.didViewCountUp ? 2000 : 0}
                              />
                            </h3>
                          </VisibilitySensor>
                          <span>EMPLOYEES</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="kf-box-inner">
                        <div className="kf-box">
                          <img src={kf_6} alt="TRADEMARKS" />
                          <span className="more-then">MORE THAN</span>
                          <VisibilitySensor
                            onChange={this.onVisibilityChange}
                            offset={{
                              top: 10,
                            }}
                            delayedCall
                          >
                            <h3>
                              <CountUp
                                duration={3}
                                end={this.state.didViewCountUp ? 500 : 0}
                              />
                            </h3>
                          </VisibilitySensor>
                          <span>TRADEMARKS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Kf_wrapper>
    )
  }
}

export default Kf
