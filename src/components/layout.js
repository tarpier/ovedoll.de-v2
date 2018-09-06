import React from 'react'
import { Link } from 'gatsby'
import BottomNavigation from '../components/BottomNavigation'
import 'typeface-rubik'

import { Provider } from 'rebass'
import { injectGlobal } from 'styled-components'

injectGlobal`
  * { 
  box-sizing: border-box;
  font-family: rubik;
  }
  body { margin: 0;
   }`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    let header

    /* if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Gatsby Starter Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Gatsby Starter Blog
          </Link>
        </h3>
      )
    } */
    return (
      <Provider>
        <div>
          {header}
          {children}
          <BottomNavigation />
        </div>
      </Provider>
    )
  }
}

export default Template
