import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import Navigation from '../components/Navigation'

const StickyTop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 7;

  .navbar-brand img {
    width: 90px;
  }

  .navbar {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1.2rem;
    background: #3E3B3A;

    .navbar-toggler {
      padding: 0.25rem 0.75rem;
      font-size: 1.25rem;
      line-height: 1;
      background-color: transparent;
      border: 1px solid transparent;
      border-radius: 0.25rem;
      -webkit-appearance: button;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      img {
        width: 30px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;

      ${breakpoint('desktop')`
              flex-direction: row;
          `}

      li {
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;

        &:first-child {
          display: none;
        }
      }

      li a {
        color: #fff;
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 14px;
        transition: 500ms;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
        text-transform: uppercase;
      }
    }
  }
`

const Header = props => (
  <StickyTop>
    <Navigation />
  </StickyTop>
)

export default Header
