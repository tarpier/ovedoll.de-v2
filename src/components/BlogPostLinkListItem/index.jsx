import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const BlogPostLinkListItem = ({ slug, date, excerpt, title }) => {
  return (
    <div>
      <h3 style={{}}>
        <Link style={{ boxShadow: 'none' }} to={slug}>
          {title}
        </Link>
      </h3>
      <small>{date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
    </div>
  )
}

BlogPostLinkListItem.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  title: PropTypes.string,
}

export default BlogPostLinkListItem
