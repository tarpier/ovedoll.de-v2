import React from 'react'
import Image from 'gatsby-image'
import { Box, Flex } from 'rebass'
import { graphql } from 'gatsby'

const AboutMe = ({ aboutContent, profileImage } = props) => (
  <Flex>
    <Box width={[1 / 2]}>
      <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
    </Box>
    <Box width={[1 / 2]}>
      <Image alt="profile picture" sizes={profileImage} />
    </Box>
  </Flex>
)

export const markdownSectionFrontmatterFragment = graphql`
  fragment MarkdownFrontmatter on MarkdownRemark {
    frontmatter {
      section
    }
  }
`

export default AboutMe
