import React from 'react'
import { Box, Image, Flex } from 'rebass'
import styled from 'styled-components'
import { Link } from 'gatsby'
import colors from '../../utils/colors'
import { Container } from '../HelperComponents'
import Logo from './doll-logo.min.svg'

const OuterWrapper = styled(Box)`
  background-color: ${colors.primary};
  color: ${colors.fontColor};
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(90deg, #63c7b2 0.01%, #80ced7 99.99%), #80ced7;
  background-blend-mode: screen, normal, normal;
`

const links = [
  { name: 'Impressum', href: '/impressum' },
  { name: 'Datenschutz', href: '/datenschutzerklaerung' },
]

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  text-align: right;
  font-size: 0.9em;

  & li {
    padding: 3px 0;
  }
`
const BottomNavLink = styled(Link)`
  color: ${colors.fontColor};
`

const LogoImg = styled(Image)`
  height: calc(4em - 10px);
  margin: 10px 0;
`

const BottomNavigation = () => (
  <OuterWrapper>
    <Container alignItems={'center'} flexDirection={['column', 'row']}>
      <Flex width={[1, 1 / 2]}>{/* <AvailabilityComponent /> */}</Flex>

      <Flex
        justifyContent={['center', 'flex-end']}
        width={[1, 1 / 2]}
        flexDirection={'column'}
      >
        <Flex justifyContent={['center', 'flex-end']}>
          <Link to={'/'}>
            <LogoImg src={Logo} />
          </Link>
        </Flex>
        <LinkList>
          {links.map(link => (
            <li key={link.name}>
              <BottomNavLink to={link.href}>{link.name}</BottomNavLink>
            </li>
          ))}
        </LinkList>
      </Flex>
    </Container>
  </OuterWrapper>
)

export default BottomNavigation
