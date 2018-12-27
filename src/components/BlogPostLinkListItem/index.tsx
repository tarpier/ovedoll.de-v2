import React from 'react'
import { Link } from 'gatsby'

type Props = {
  slug: string
  date: string
  excerpt?: string
  title?: string
}

const BlogPostLinkListItem = ({ slug, date, excerpt, title }: Props) => {
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

export default BlogPostLinkListItem
