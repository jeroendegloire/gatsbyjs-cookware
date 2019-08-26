import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => {

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'The Cookware Company is a global cookware manufacturer with worldwide brand presence. Starting in Belgium in 2007 with their original brand, GreenPan, The Cookware Company was the first to introduce PTFE-free non-stick cookware into the market.' },
              { name: 'keywords', content: 'cookware, greenpan, greenlife, kempen & begeer, bk, ' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {children}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
