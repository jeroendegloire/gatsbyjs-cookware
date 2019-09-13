import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'
import { Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'

import kf_1 from '../images/figures--turnover.svg'
import kf_2 from '../images/figures--factories.svg'
import kf_3 from '../images/figures--capacity-factories.svg'
import kf_4 from '../images/figures--brands.svg'
import kf_5 from '../images/figures--employees.svg'

import pan from '../images/pan.svg'
import pot from '../images/pot.svg'

const Kf_wrapper = styled.section`
  padding: 60px 0px 200px;

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
      margin: 15px 0px;
    }

    > span {
      color: #cdd476;
      font-family: Montserrat;
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
`

const Kf = props => (
  <Kf_wrapper className="page-section" id="kf">
    <Fade>
      <div className="container">
        <div className="kf-title-bake">
          <div className="kf-title">
            <h2>Key figures 2018</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                <div className="col-md-4 col-6">
                  <div className="kf-box-inner">
                    <div className="kf-box">
                      <img src={kf_1} alt="Turnover" />
                      <h3>
                        $<CountUp duation={3} end={208} />m{' '}
                      </h3>
                      <span>TURNOVER 2018</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="kf-box-inner">
                    <div className="kf-box">
                      <img src={kf_2} alt="Factories" />
                      <h3>
                        <CountUp duration={3} end={210886} separator="." /> m
                        <sup>2</sup>
                      </h3>
                      <span>FACTORIES</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="kf-box-inner">
                    <div className="kf-box">
                      <img src={kf_3} alt="Capacity factories" />
                      <h3>
                        <CountUp
                          duration={3}
                          end={18.55}
                          decimal=","
                          decimals={2}
                        />
                        m/year
                      </h3>
                      <span>CAPACITY FACTORIES</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="kf-box-inner">
                    <div className="kf-box">
                      <img src={kf_4} alt="Brands" />
                      <h3>
                        <CountUp duration={3} end={10} />
                      </h3>
                      <span>BRANDS</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-6">
                  <div className="kf-box-inner">
                    <div className="kf-box">
                      <img src={kf_5} alt="Employees" />
                      <h3>
                        <CountUp duration={3} end={1055} />
                      </h3>
                      <span>EMPLOYEES</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>

    <Parallax className="pan" x={[-80, -20]} y={[0, 60]} tagOuter="figure">
      <img src={pan} />
    </Parallax>

    <Parallax className="pot" x={[120, 20]} y={[0, 60]} tagOuter="figure">
      <img src={pot} />
    </Parallax>
  </Kf_wrapper>
)

export default Kf
