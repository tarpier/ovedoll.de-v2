import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Container } from '../components/HelperComponents'
import Layout from '../components/layout'
import { colors } from '../utils'

type markDownRemarkProps = {
  id: string
  excerpt: string
  html: string
  frontmatter: {
    title: string
    date: string
  }
}

type Props = {
  data: {
    markdownRemark: markDownRemarkProps
    site: {
      siteMetadata: {
        author: string
        title: string
      }
    }
  }
  location: any
}

class BlogPostTemplate extends React.Component<Props, {}> {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Container
          flexDirection={'column'}
          pb={'50px'}
          style={{ color: colors.fontColor }}
        >
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              display: 'block',
              alignSelf: 'flex-end',
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
