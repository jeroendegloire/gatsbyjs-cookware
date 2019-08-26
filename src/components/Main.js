import React from 'react'
import PropTypes from 'prop-types'
import { Parallax } from 'react-scroll-parallax'
import Hero from '../components/Hero'
import Kf from '../components/Kf'
import Waw from '../components/Waw'
import Contact from '../components/Contact'
import Board from '../components/subsections/Board'
import Offices from '../components/subsections/Offices'
import Factories from '../components/subsections/Factories'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import OfficesFactories from '../components/Offices-Factories'

import spoon from '../images/spoon.svg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <main>
        <article>
            <Hero />
            <Kf />
            <Waw />
            <Contact />
            <Board />
            <Parallax className="spoon" x={[-50, 0]} tagOuter="figure">
              <img src={spoon} />
            </Parallax>
            <Offices />
            <Factories />
            <OfficesFactories />
            <Brands />
            <Footer />
        </article>
      </main>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
