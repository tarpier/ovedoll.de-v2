import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import { Link } from 'gatsby'
import colors from '../../utils/colors'
import { Container } from '../HelperComponents'

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

const LogoBox = styled(Box)`
  text-align: center;
`

const BottomNavigation = () => (
  <OuterWrapper>
    <Container alignItems={'center'} flexDirection={['column', 'row']}>
      <LogoBox width={[1, 1 / 3]}>
        <Link to={'/'}>
          <p>LOGO</p>
        </Link>
      </LogoBox>
      <AvailabilityBox width={[1, 1 / 3]}>
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
