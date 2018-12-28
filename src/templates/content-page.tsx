import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import { Container } from '../components/HelperComponents'

type Props = {
  data: {
    markdownRemark: {
      id: string
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }
    site: {
      siteMetadata: {
        title: string
        author: string
      }
    }
  }
  location: any
}

class ContentPageTemplate extends React.Component<Props, {}> {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'de' }}
          meta={[{ name: 'description', content: 'Datenschutzerklärung' }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />

        <Container px={['10px', 20]} flexDirection={'column'}>
          <h1>{post.frontmatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </Layout>
    )
  }
}

export default ContentPageTemplate

export const pageQuery = graphql`
  query ContentPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
