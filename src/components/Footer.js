import React from 'react'
import styled from 'styled-components'

import footerbg from '../images/footer-bg.jpg'
import linkedin from '../images/linkedin.svg'

const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  height: 380px;
  background-image: url(${footerbg});
  background-position: center;

  .f-content {
    background: #676260;
    padding: 20px 20px;
    text-align: center;
    font-size: 10px;
    font-family: 'Montserrat';
    line-height: 18px;
    color: #fff;
    width: 100%;

    a {
      color: #fff;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .linkedin {
    width: 45px;
    vertical-align: text-bottom;
  }
`

// @todo: make year dynamic.
export default () => (
  <Footer id="footer">
    <div className="f-content">
      <p>
        Do you have general questions or remarks on our products? Let us know:{' '}
        <a href="mailto:info@cookware-co.com">info@cookware-co.com</a><br/>
        Find us on:&nbsp;&nbsp;&nbsp; <a href="https://www.linkedin.com/company/thecookwarecompany" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="linkedin" /></a><br/>
        © {new Date().getFullYear()} Cookware Company All Rights Reserved.
      </p>
    </div>
  </Footer>
)
