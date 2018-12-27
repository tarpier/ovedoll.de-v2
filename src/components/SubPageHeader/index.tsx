import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import { Flex } from 'rebass'

type Props = {
  title: string
}

class SubPageHeader extends PureComponent<Props, {}> {
  render() {
    return (
      <Flex pt={30}>
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {this.props.title}
          </Link>
        </h3>
      </Flex>
    )
  }
}

export default SubPageHeader
