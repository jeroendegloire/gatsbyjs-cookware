import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade';

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
import logo_chopsgrill from '../images/logo_chopsgrill.svg'

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

      ${breakpoint('tablet') `
        height: 160px;
      `}

      img {
        height: 200px;
        width: auto;

        ${breakpoint('tablet') `
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

    <Fade>
    <div class="our-brands-inner">
      <div class="container">
        <div class="our-brands-bake">
          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-9">
              <div class="brands-box-wrep">
                <div class="waw-title">
                  <h2>Our brands</h2>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image">
                          <img alt="Logo Greenpan" src={logo_greenpan} />
                        </div>
                        <p>
                          In 2007 GreenPan introduced healthy ceramic non-stick
                          cookware into the market. It was the start of a
                          worldwide cookware revolution. Unlike traditional
                          non-stick cookware GreenPan doesn’t use any toxic
                          chemicals. Its Thermolon™ coating is made with natural
                          materials, such as sand, and doesn’t contain PFOA,
                          PFAS, lead or cadmium. The beautiful design and high
                          quality materials result in a unique cooking
                          experience. It’s the perfect brand for passionate
                          chefs who want to cook healthy without compromising on
                          performance!
                        </p>
                        <a href="https://www.greenpan.com/" target="_blank" rel="noreferrer">
                          <span>&#8250;&#8250;</span> VISIT WEBSITE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image">
                          <img
                            alt="Logo Green chef"
                            class=""
                            src={logo_greenchef}
                          />
                        </div>
                        <p>
                          GreenChef is a sister brand of GreenPan, known for its
                          natural ceramic non-stick coating and smart design.
                          The products are affordable and easy to use. They’re
                          great for people who want to cook healthy, but don’t
                          want to spend hours in the kitchen!
                        </p>
                        <a href="https://www.greenchef-cookware.com" target="_blank" rel="noreferrer">
                          <span>&#8250;&#8250;</span> VISIT WEBSITE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image">
                          <img alt="Logo Greenlife" src={logo_greenlife} />
                        </div>
                        <p>
                          GreenLife is another sister brand of GreenPan and was
                          created with one goal in mind: bring healthy cooking
                          within everyone’s reach. The brand focuses on healthy,
                          fuss-free cookware that’s perfect for every day
                          cooking. The colourful designs are an eye-catcher in
                          every kitchen!
                        </p>
                        <a href="https://www.greenlife-cookware.com/" target="_blank" rel="noreferrer">
                          <span>&#8250;&#8250;</span> VISIT WEBSITE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image">
                          <img
                            alt="Logo VitaVerde"
                            class=""
                            src={logo_vitaverde}
                          />
                        </div>
                        <p>
                          VitaVerde is a brand for people who want to discover
                          healthy ceramic non-stick cookware without breaking
                          the bank. VitaVerde offers easy to use cookware for
                          every day. The design is basic but functional and all
                          products have a natural ceramic non-stick coating.
                        </p>
                        <a href="https://www.vitaverde-cookware.com/" target="_blank" rel="noreferrer">
                          <span>&#8250;&#8250;</span> VISIT WEBSITE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image">
                          <img alt="Logo Food-E" class="" src={logo_foode} />
                        </div>
                        <p>
                          Food-E is all about great healthy cookware for price
                          conscious shoppers! The healthy ceramic non-stick
                          coating doesn’t contain any harmful substances and
                          will help you prepare tasty, everyday meals. It’s easy
                          to use and easy to clean. The creative design turns
                          cooking into a fun experience, perfect for boys and
                          girls who know that healthy cooking is cool!
                        </p>
                        <a href="https://www.food-e.us/" target="_blank" rel="noreferrer">
                          <span>&#8250;&#8250;</span> VISIT WEBSITE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image">
                          <img alt="Logo BK" class="" src={logo_bk} />
                        </div>
                        <p>
                          BK is a renowned Dutch cookware brand which was
                          launched in 1851. The brand offers a wide range of
                          cookware products, varying from pans and casseroles to
                          smart kitchen solutions. Over the years BK has proven
                          to be a true pioneer and the brand has an impressive
                          heritage. In 1951 BK received the royal predicate from
                          Queen Juliana and the crown was added to the logo. Up
                          to today BK remains a high-quality cookware brand that
                          inspires and turns cooking into a unique experience!
                        </p>
                        <a href="https://www.bk.nl/" target="_blank" rel="noreferrer">
                          <span>&#8250;&#8250;</span> VISIT WEBSITE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image" target="_blank">
                          <img alt="Logo Gero" class="" src={logo_gero} />
                        </div>
                        <p>
                          Gero is a traditional Dutch cookware brand with over
                          100 years of experience. The brand is known for its
                          cutlery and cookware related products. Their
                          collections are qualitative, but affordable. Perfect
                          for everyday use !
                        </p>
                        {/* <a href="#"><span>&#8250;&#8250;</span> VISIT WEBSITE</a> */}
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image" target="_blank" rel="noreferrer">
                          <img
                            alt="Logo Van Kempen &amp; Begeer"
                            class=""
                            src={logo_vankempenbegeer}
                          />
                        </div>
                        <p>
                          Koninklijke Van Kempen &amp; Begeer is an iconic Dutch
                          brand, known for its beautiful, high-quality silver
                          and silver plated tableware. The brand has a
                          long-standing history, going back to 1789 when it was
                          founded by J.M. Kempen. Over the years the company
                          grew into the largest and most innovative sterling
                          silverware producer in the Netherlands. Van Kempen
                          &amp; Begeer has been a pioneer from the very start,
                          introducing new products and new techniques. Their
                          extraordinary handmade craftsmanship was rewarded with
                          the royal predicate in 1858. Up to today, the company
                          remains a supplier of the Dutch Royal Family.
                        </p>
                        <a href="https://www.kempen-begeer.nl/" target="_blank" rel="noreferrer">
                          <span>&#8250;&#8250;</span> VISIT WEBSITE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image">
                          <img alt="Keltum" class="" src={logo_keltum} />
                        </div>
                        <p>
                          Keltum is a famous Dutch brand, which was founded in
                          1936. It’s part of the renowned Dutch company Van
                          Kempen &amp; Begeer. Keltum has a long tradition of
                          silver plated cutlery. The brand is known for its
                          craftsmanship and high-quality materials. The
                          beautiful collections have a timeless design and turn
                          every dinner into a special experience. Recently,
                          Keltum launched its first tableware collection: Table
                          Talks.
                        </p>
                        <a href="https://www.keltum-tabletalks.com/nl-nl" target="_blank" rel="noreferrer">
                          <span>&#8250;&#8250;</span> VISIT WEBSITE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image">
                          <img alt="Kochstar" src={logo_kochstar} />
                        </div>
                        <p>
                          Kochstar is a German brand, with 115 years of
                          experience in the production and development of
                          cookware. The brand is known for its technological
                          know-how, high-quality production and focus on
                          functionality. Their collections offer easy, healthy
                          and energy-efficient cookware solutions for every day.
                        </p>
                        <a href="https://www.kochstar.de/" target="_blank" rel="noreferrer">
                          <span>&#8250;&#8250;</span> VISIT WEBSITE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image">
                          <img alt="Blue diamond" src={logo_bluediamond} />
                        </div>
                        <p>
                          Blue Diamond is a new DRTV-brand, which offers strong,
                          long-lasting ceramic non-stick cookware infused with
                          millions of diamonds! The non-stick coating lasts 10x
                          longer than any other non-stick coating. Plus, Blue
                          Diamond is 5x harder and transfers heat 4x faster and
                          more evenly than other cookware products. It’s the new
                          standard in non-stick, toxin-free cookware!
                        </p>
                        <a href="https://www.bluediamondpan.com/" target="_blank" rel="noreferrer">
                          <span>&#8250;&#8250;</span> VISIT WEBSITE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="brands-box-inner">
                      <div class="brands-box">
                        <div class="brands-box-image">
                          <img
                            alt="Chops &amp; Grill"
                            class=""
                            src={logo_chopsgrill}
                          />
                        </div>
                        <p>
                          Chop &amp; Grill has been designed as a loyalty
                          collection for GreenPan. The range contains everything
                          you need to create the most delicious grilled dishes!
                          Prepare your meat, fish, and vegetables like a
                          professional with high-quality sets of knives. Or show
                          off your skills with the special grill pan and table
                          bbq! The Chop &amp; Grill collection by GreenPan is
                          made of high-quality materials and has a beautiful
                          design. An eye-catcher in every kitchen!
                        </p>
                        <a href="https://chopandgrill.greenpan.com/" target="_blank" rel="noreferrer">
                          <span>&#8250;&#8250;</span> VISIT WEBSITE
                        </a>
                      </div>
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
  </Brands>
)
