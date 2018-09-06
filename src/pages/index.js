import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Hero from '../components/Hero'
import Bio from '../components/AboutMe'
import BottomNavigation from '../components/BottomNavigation'
import Contact from '../components/Contact'
import Layout from '../components/layout'
import colors from '../utils/colors'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div style={{ height: '4px', backgroundColor: colors.primary }} />
        <Hero
          typeStrings={['websites', 'mobile apps', 'webapps', 'hot sh*t']}
          heroImage={get(this, 'props.data.hero.childImageSharp.fluid')}
        />
        <Bio
          aboutContent={get(this, 'props.data.aboutMe.html')}
          profileImage={get(
            this,
            'props.data.profilePic.childImageSharp.fluid'
          )}
        />
        <Contact />
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
    profilePic: file(relativePath: { eq: "ovedoll.jpg" }) {
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
    aboutMe: markdownRemark(fields: { slug: { eq: "/index/about/" } }) {
      html
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
