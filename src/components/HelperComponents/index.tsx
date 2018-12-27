import { Flex } from 'rebass'
import styled from 'styled-components'

const Container = styled(Flex)`
  /*max-width: 1024px;*/
  max-width: 680px;
`

Container.defaultProps = {
  mx: 'auto',
  px: ['10px', 0],
}

export { Container }
