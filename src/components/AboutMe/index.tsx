import React from 'react'
import Image from 'gatsby-image'
import { Box, Flex } from 'rebass'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container } from '../HelperComponents'
import { GatsbyImage } from '../../interfaces'

const Avatar = styled.div`
  border-radius: 25px;
`

const ImageContainer = styled(Image)`
  border-radius: 100%;
  width: 22em;
`

type Props = {
  aboutContent: string
  profileImage: GatsbyImage
}

const AboutMe = ({ aboutContent, profileImage }: Props) => (
  <Container flexWrap="wrap" flexDirection={['column-reverse', 'row']}>
    <Box px={'5px'} width={[1, 1 / 2]}>
      <Box py={[0, 30]} dangerouslySetInnerHTML={{ __html: aboutContent }} />
    </Box>
    <Box pl={['10px']} py={[0, 10]} width={[1, 1 / 2]} alignSelf="center">
      <ImageContainer alt="profile picture" sizes={profileImage} />
    </Box>
  </Container>
)

export default AboutMe
