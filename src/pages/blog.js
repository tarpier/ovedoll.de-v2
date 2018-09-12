import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container } from '../components/HelperComponents'
import Layout from '../components/layout'
import styled from 'styled-components'

const ContentContainer = styled.div`
  min-height: 96vh;
`

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.blogPosts.edges')

    return (
      <Layout location={this.props.location}>
        <ContentContainer>
          <Container flexDirection={'column'}>
            <Helmet title={siteTitle} />

            {posts.map(({ node }) => {
              if (get(node.childMarkdownRemark, 'frontmatter.private')) {
                return false
              }
              const title =
                get(node.childMarkdownRemark, 'frontmatter.title') ||
                node.childMarkdownRemark.fields.slug
              return (
                <div key={node.childMarkdownRemark.fields.slug}>
                  <h3 style={{}}>
                    <Link
                      style={{ boxShadow: 'none' }}
                      to={node.childMarkdownRemark.fields.slug}
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>{node.childMarkdownRemark.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.childMarkdownRemark.excerpt,
                    }}
                  />
                </div>
              )
            })}
          </Container>
        </ContentContainer>
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
