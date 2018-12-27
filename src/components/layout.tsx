import React from 'react'
import BottomNavigation from './BottomNavigation'
import 'typeface-rubik'
import Header from './Header'

import { Provider, Flex } from 'rebass'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  * { 
  box-sizing: border-box;
  font-family: rubik;
  }
  body { margin: 0;
   }`

const PageWrapper = styled(Flex)`
  flex-direction: column;
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  flex: 1;
`

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Provider>
        <PageWrapper>
          <Header />
          <ContentWrapper>{children}</ContentWrapper>
          <BottomNavigation />
        </PageWrapper>
      </Provider>
    )
  }
}

export default Template
