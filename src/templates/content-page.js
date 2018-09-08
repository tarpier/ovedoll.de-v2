import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import { Container } from '../components/HelperComponents'
import styled from 'styled-components'

const ContentContainer = styled.div`
  min-height: 95vh;
`

class ContentPageTemplate extends React.Component {
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
        <ContentContainer>
          <Container px={['10px', 20]} flexDirection={'column'}>
            <h1>{post.frontmatter.title}</h1>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Container>
        </ContentContainer>
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
