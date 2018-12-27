import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container } from '../components/HelperComponents'
import Layout from '../components/layout'
import styled from 'styled-components'
import BlogPostLinkListItem from '../components/BlogPostLinkListItem'
import SubPageHeader from '../components/SubPageHeader'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.blogPosts.edges')

    return (
      <Layout location={this.props.location}>
        <Container flexDirection={'column'} pb={'50px'}>
          <Helmet title={siteTitle} />

          <SubPageHeader title={'Blog'} />
          {posts.map(({ node }) => {
            if (get(node.childMarkdownRemark, 'frontmatter.private')) {
              return false
            }
            const title =
              get(node.childMarkdownRemark, 'frontmatter.title') ||
              node.childMarkdownRemark.fields.slug
            const date =
              get(node.childMarkdownRemark, 'frontmatter.date') || 'someday'
            const excerpt = get(node.childMarkdownRemark, 'excerpt') || ''

            return (
              <BlogPostLinkListItem
                key={node.childMarkdownRemark.fields.slug}
                slug={node.childMarkdownRemark.fields.slug}
                date={date}
                title={title}
                excerpt={excerpt}
              />
            )
          })}
        </Container>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    blogPosts: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "blogPosts" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            excerpt
            fields {
              slug
            }
            frontmatter {
              private
              date(formatString: "DD MMMM, YYYY")
              title
            }
          }
        }
      }
    }
  }
`
