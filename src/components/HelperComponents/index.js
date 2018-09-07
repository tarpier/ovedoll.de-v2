import { Flex } from 'rebass'
import styled from 'styled-components'

const Container = styled(Flex)`
  max-width: 1024px;
`

Container.defaultProps = {
  mx: 'auto',
}

export { Container }
