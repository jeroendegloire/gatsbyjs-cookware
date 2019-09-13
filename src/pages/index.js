import React from 'react'
import Layout from '../components/layout'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from 'styled-components'

import 'react-router-modal/css/react-router-modal.css'

import '../../node_modules/bootstrap-scss/bootstrap-grid.scss'
import '../sass/custom.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import SEO from '../components/SEO'

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.setWrapperRef = this.setWrapperRef.bind(this)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Home" />
          <Header />
          <ParallaxProvider scrollAxis="vertical">
            <Main/>
          </ParallaxProvider>
          <Footer />
        </Layout>
      </ThemeProvider>
    )
  }
}

export default IndexPage
