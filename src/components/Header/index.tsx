import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import { colors } from '../../utils'
import { Container } from '../HelperComponents'
import { ReactComponent as Logo } from '../../assets/doll-logo.svg'

const OuterWrapper = styled(Box)`
  a {
    text-decoration: none;
    color: ${colors.fontColor};

    &:hover {
      color: ${colors.primary};
    }

    &:visited {
      color: ${colors.fontColor};
    }
  }
`

const LeftBox = styled(Flex)`
  align-items: center;
`

const RightBox = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
`

export default class Header extends PureComponent {
  render() {
    return (
      <OuterWrapper>
        <Container>
          <LeftBox width={1 / 2} pt={`10px`}>
            <Link to={'/'}>
              <Logo />
            </Link>
          </LeftBox>
          <RightBox width={1 / 2} pt={`10px`}>
            <Link to={'/blog'}>Blog</Link>
          </RightBox>
        </Container>
      </OuterWrapper>
    )
  }
}
