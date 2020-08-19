import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Parallax } from 'react-scroll-parallax'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-modal-routing'
import Fade from 'react-reveal/Fade'

import logo_greenpan from '../images/logo_greenpan.jpg'
import logo_greenchef from '../images/logo_greenchef.svg'
import logo_greenlife from '../images/logo_greenlife.jpg'
import logo_vitaverde from '../images/logo_vitaverde.svg'
import logo_foode from '../images/logo_foode.svg'
import logo_bk from '../images/logo_bk.svg'
import logo_gero from '../images/logo_gero.svg'
import logo_vankempenbegeer from '../images/logo_vankempenbegeer.svg'
import logo_keltum from '../images/logo_keltum.svg'
import logo_kochstar from '../images/logo_kochstar.svg'
import logo_bluediamond from '../images/logo_bluediamond.jpg'
import logo_chopgrill from '../images/logo_chopgrill.svg'

import wok from '../images/wok.svg'
import wok2 from '../images/wok-2.svg'

const Brands = styled.section`
  padding: 65px 0px 100px 0px;

  .waw-title h2 {
    color: #676260;
    font-size: 64px;
    position: relative;
    font-family: Montserrat;
    font-weight: 700;

    &:after {
      position: absolute;
      content: '';
      bottom: -7px;
      left: 13px;
      width: 90px;
      height: 3px;
      background: #676260;
    }
  }

  .brands-wrapper {
    margin-top: 5rem;

    > div {
      margin-bottom: 30px;
    }
  }

  .brands-box {
    margin-top: 50px;

    .brands-box-image {
      background: #fff;
      border-radius: 30px;
      display: flex;
      width: 100%;
      height: 300px;
      justify-content: center;
      align-items: center;

      box-shadow: 6px 6px 25px -9px rgba(0, 0, 0, 0.6);
      padding: 1.5rem;

      ${breakpoint('md')`
        height: 160px;
      `}

      img {
        height: 200px;
        width: auto;

        ${breakpoint('md')`
          height: 120px;
      `}
      }
    }

    p {
      color: #676260;
      font-family: HelveticaNeueRoman;
      text-align: justify;
      font-size: 10px;
      line-height: 15px;
      margin: 20px 0px 0px 0px;
      margin-bottom: 0.5rem;
    }

    > a {
      color: #7c8c42;
      font-size: 13px;
      letter-spacing: 2px;
      font-family: 'HelveticaNeueRoman';

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export default () => (
  <Brands className="page-section our-brands-wrep" id="brands">
    <Parallax className="wok" x={[-40, 10]} tagOuter="figure">
      <img src={wok} />
    </Parallax>

    <Parallax className="wok-2" x={[80, 50]} tagOuter="figure">
      <img src={wok2} />
    </Parallax>

    <div className="our-brands-inner">
      <div className="container">
        <div className="our-brands-bake">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="brands-box-wrep">
                <div className="waw-title">
                  <h2>Our brands</h2>
                </div>
                <StaticQuery
                  query={graphql`
                    query Greenpan {
                      image1: file(relativePath: { eq: "1.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image2: file(relativePath: { eq: "2.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image3: file(relativePath: { eq: "3.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image4: file(relativePath: { eq: "4.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image5: file(relativePath: { eq: "5.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image6: file(relativePath: { eq: "6.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image7: file(relativePath: { eq: "7.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image8: file(relativePath: { eq: "8.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image9: file(relativePath: { eq: "9.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image10: file(relativePath: { eq: "10.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image11: file(relativePath: { eq: "11.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image12: file(relativePath: { eq: "12.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }

                      image13: file(relativePath: { eq: "13.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth: 600, maxHeight: 600) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
                  `}
                  render={data => (
                    <div className="brands-wrapper row">
                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/greenpan" asModal>
                            <Img fluid={data.image1.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>

                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/greenchef" asModal>
                            <Img fluid={data.image2.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>

                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/greenlife" asModal>
                            <Img fluid={data.image3.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>

                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/vitaverde" asModal>
                            <Img fluid={data.image4.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/food-e" asModal>
                            <Img fluid={data.image5.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>

                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/bk" asModal>
                            <Img fluid={data.image6.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>

                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/gero" asModal>
                            <Img fluid={data.image7.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>

                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/van-kempen-begeer" asModal>
                            <Img fluid={data.image8.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>

                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/keltum" asModal>
                            <Img fluid={data.image9.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>

                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/kochstar" asModal>
                            <Img fluid={data.image10.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>

                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/blue-diamond" asModal>
                            <Img fluid={data.image11.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>

                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/chop-grill" asModal>
                            <Img fluid={data.image12.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>

                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link to="/moods" asModal>
                            <Img fluid={data.image13.childImageSharp.fluid} />
                          </Link>
                        </Fade>
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Brands>
)
