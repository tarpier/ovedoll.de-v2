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
`

const links = [
  { name: 'Impressum', href: '/impressum' },
  { name: 'Datenschutz', href: '/datenschutzerklaerung' },
]

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 0;
`
const BottomNavLink = styled(Link)`
  color: ${colors.fontColor};
`

const AvailabilityBox = styled(Box)`
  text-align: center;
`

const LogoBox = styled(Flex)``

const LogoImg = styled(Image)`
  height: calc(4vh - 10px);
  margin: 5px 0;
`

const BottomNavigation = () => (
  <OuterWrapper>
    <Container alignItems={'center'} flexDirection={['column', 'row']}>
      <LogoBox justifyContent={['center', 'initial']} width={[1, 1 / 3]}>
        <Link to={'/'}>
          <LogoImg src={Logo} />
        </Link>
      </LogoBox>
      <AvailabilityBox py={['5px']} width={[1, 1 / 3]}>
        I am available starting: 17.09.18
      </AvailabilityBox>
      <Box width={[1, 1 / 3]}>
        <LinkList>
          {links.map(link => (
            <li key={link.name}>
              <BottomNavLink to={link.href}>{link.name}</BottomNavLink>
            </li>
          ))}
        </LinkList>
      </Box>
    </Container>
  </OuterWrapper>
)

export default BottomNavigation
