import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Box } from 'rebass'

import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    console.log(this.props)
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Hero
          typeStrings={['1bc', 'hfhfhf']}
          heroImage={this.props.data.hero.childImageSharp.fluid}
        />
        <Box px={3} py={4} color="white" bg="blue">
          Hello
        </Box>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "heroBackground.jpg" }) {
      childImageSharp {
        fluid {
          sizes
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
