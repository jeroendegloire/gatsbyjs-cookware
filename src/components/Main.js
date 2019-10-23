import React from 'react'
import PropTypes from 'prop-types'

import Hero from '../components/Hero'
import Kf from '../components/Kf'
import Waw from '../components/Waw'
import History from '../components/History'
import Contact from '../components/Contact'
import Brands from '../components/Brands'
import OfficesFactories from '../components/Offices-Factories'

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
          <Waw />
          <Kf />
          <History/>
          <Contact />
         {/*<OfficesFactories />*/}
          <Brands />

          {/* <ModalRoute path="/modal-test" parentPath="/">
            Hello
          </ModalRoute> */}
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
