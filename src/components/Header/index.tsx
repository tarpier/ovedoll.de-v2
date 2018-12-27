import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import { Container } from '../HelperComponents'

export default class Header extends PureComponent {
  render() {
    return (
      <Container>
        <p>
          <Link to={'/blog'}>Blog</Link>
        </p>
      </Container>
    )
  }
}
