import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby-plugin-modal-routing'

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
      'navigation navbar-nav' + (this.state.collapsed ? ' collapse' : '')

    return (
      <nav className="navbar navbar-expand-lg">
        <AnchorLink className="navbar-brand" offset="0" href="#Hero">
          <img src={logo} alt="Logo The Cookware Company" />
        </AnchorLink>
        <ul className={classDropdownMenu} id="navbarSupportedContent">
          <li className="nav-item">
            <AnchorLink offset="63" href="#home">
              Home
            </AnchorLink>
          </li>
          <li className="nav-item hidden">
            <AnchorLink offset="63" href="#kf">
              Key figures
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink offset="63" href="#waw">
              Who are we?
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink offset="63" href="#contact">
              Contact us
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink offset="63" href="#of">
              Offices &amp; factories
            </AnchorLink>
          </li>
          <li className="nav-item">
            <AnchorLink offset="63" href="#brands">
              Brands
            </AnchorLink>
          </li>
          <li className="nav-item">
            <Link to="vacancies" asModal>
              Vacancies
            </Link>
          </li>
        </ul>

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
      </nav>
    )
  }
}

export default Navigation
