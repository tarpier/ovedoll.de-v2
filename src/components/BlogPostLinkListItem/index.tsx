import React from 'react'
import { Link } from 'gatsby'
import { colors } from '../../utils'
import styled from 'styled-components'

type Props = {
  slug: string
  date: string
  excerpt?: string
  title?: string
}

const Headline = styled.h3`
  a {
    color: ${colors.fontColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const BlogPostLinkListItem = ({ slug, date, excerpt, title }: Props) => {
  return (
    <div>
      <Headline>
        <Link style={{ boxShadow: 'none' }} to={slug}>
          {title}
        </Link>
      </Headline>
      <small>{date}</small>
      <p
        style={{ color: colors.fontColor }}
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
    </div>
  )
}

export default BlogPostLinkListItem
