import React from 'react'
import Image from 'gatsby-image'
import { Box, Flex } from 'rebass'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container } from '../HelperComponents'

const Avatar = styled.div`
  border-radius: 25px;
`

Container.defaultProps = {
  mx: 'auto',
}

const ImageContainer = styled(Image)`
  border-radius: 100%;
  width: 75%;
  height: 75%;
`

const AboutMe = ({ aboutContent, profileImage } = props) => (
  <Container flexWrap="wrap" flexDirection={['column-reverse', 'row']}>
    <Box px={'5px'} width={[1, 1 / 2]}>
      <Box py={[0, 30]} dangerouslySetInnerHTML={{ __html: aboutContent }} />
    </Box>
    <Box px={'5px'} py={[0, 10]} width={[1, 1 / 2]} alignSelf="center">
      <ImageContainer alt="profile picture" sizes={profileImage} />
    </Box>
  </Container>
)

AboutMe.propTypes = {
  aboutContent: PropTypes.string,
  profileImage: PropTypes.object,
}

export default AboutMe
