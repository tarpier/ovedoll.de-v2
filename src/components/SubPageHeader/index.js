import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import { Flex } from 'rebass'
import PropTypes from 'prop-types'

class SubPageHeader extends PureComponent {
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

SubPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SubPageHeader
