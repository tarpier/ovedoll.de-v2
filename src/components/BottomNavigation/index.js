import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import { Link } from 'gatsby'
import colors from '../../utils/colors'
import { Container } from '../HelperComponents'
const OuterWrapper = styled(Box)`
  background-color: ${colors.primary};
`

const links = [
  { name: 'Impressum', href: '/impressum' },
  { name: 'Datenschutz', href: '/datenschutzerklaerung' },
]

const BottomNavigation = () => (
  <OuterWrapper>
    <Container>
      <ul>
        {links.map(link => (
          <li key={link.name}>
            <Link to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  </OuterWrapper>
)

export default BottomNavigation
