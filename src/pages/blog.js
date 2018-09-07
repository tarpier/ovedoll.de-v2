import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container } from '../components/HelperComponents'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.blogPosts.edges')

    return (
      <Container flexDirection={'column'}>
        <Helmet title={siteTitle} />

        {posts.map(({ node }) => {
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
              date(formatString: "DD MMMM, YYYY")
              title
            }
          }
        }
      }
    }
  }
`
