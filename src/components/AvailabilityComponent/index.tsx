import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'
import fonts from '../../utils/fonts'

const Wrapper = styled(Flex)`
  flex-direction: column;
  flex-grow: 1;
`

export default class AvailabilityComponent extends PureComponent {
  render() {
    return (
      <Wrapper py={['5px']} width={[1, 1 / 3]}>
        <p style={{ fontSize: fonts.sizes.text }}>Status:</p>
        <p style={{ fontSize: fonts.sizes.text }}>
          Currently booked out until 01.12.18
        </p>
      </Wrapper>
    )
  }
}
