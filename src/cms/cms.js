import React from 'react'
import CMS from 'netlify-cms'
import BlogPostLinkListItem from '../components/BlogPostLinkListItem'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.get('data')
  console.log(data)
  return (
    <div>
      <div>
        <p>ListPreview</p>
        <hr />
        <BlogPostLinkListItem
          slug={'slug'}
          title={data.get('title')}
          date={data.get('date').toLocaleString()}
          excerpt={data.get('body')}
        />
      </div>
      <hr />
    </div>
  )
}

CMS.registerPreviewTemplate('blog', BlogPostPreview)
