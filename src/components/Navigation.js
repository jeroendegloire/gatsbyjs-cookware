import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import toggle from '../images/menu.svg'
import logo from '../images/logo.svg'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    const classDropdownMenu =
      'justify-content-end navbar-collapse' +
      (this.state.collapsed ? ' collapse' : '')

    return (
      <nav className="navbar navbar-expand-lg">
        <AnchorLink className="navbar-brand" offset='0' href='#Hero'><img src={logo} alt="Logo The Cookware Company" /></AnchorLink>
        <button
          onClick={this.toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbarNav"
          data-toggle="collapse"
          type="button"
          role="button"
        >
          <img src={toggle} alt />
        </button>
        <div className={classDropdownMenu} id="navbarSupportedContent">
          <ul className="navigation navbar-nav">
            <li className="nav-item">
              <AnchorLink offset='63' href='#home'>Home</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink offset='63' href='#kf'>Key figures</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink offset='63' href='#waw'>Who we are?</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink offset='63' href='#contact'>Contact us</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink offset='63' href='#of'>Offices &amp; factories</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink offset='63' href='#brands'>Brands</AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation
