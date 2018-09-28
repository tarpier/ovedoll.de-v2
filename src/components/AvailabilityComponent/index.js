import React, { PureComponent } from 'react'
import styled from 'styled-components'
import {Flex} from 'rebass'

const Wrapper = styled(Flex)`
`

export default class AvailabilityComponent extends PureComponent {
  render() {
    return (
      <Wrapper py={['5px']} width={[1, 1 / 3]}>
        I am available starting: 17.09.18
      </Wrapper>
    )
  }
}
