import React from 'react'
import CMS from 'netlify-cms'
import BlogPostLinkListItem from '../components/BlogPostLinkListItem'
// import dayjs from 'dayjs';
// import { BlogPostTemplate } from '../templates/blog-post';
// import { DocsTemplate } from '../templates/doc-page';
// import Release from '../components/release';
// import WhatsNew from '../components/whats-new';
// import Notification from '../components/notification';
// import '../css/lib/prism.css';
// import '../css/imports/docs.css';
// import '../css/imports/whatsnew.css';
// import '../css/imports/header.css';

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

// const DocsPreview = ({ entry, widgetFor }) => (
//   <DocsTemplate title={entry.getIn(['data', 'title'])} body={widgetFor('body')} />
// );

// const ReleasePreview = ({ entry }) => (
//   <WhatsNew>
//     {entry.getIn(['data', 'updates']).map((release, idx) => (
//       <Release
//         key={idx}
//         version={release.get('version')}
//         date={dayjs(release.get('date')).format('MMMM D, YYYY')}
//         description={release.get('description')}
//       />
//     ))}
//   </WhatsNew>
// );

// const NotificationPreview = ({ entry }) =>
//   entry
//     .getIn(['data', 'notifications'])
//     .filter(notif => notif.get('published'))
//     .map((notif, idx) => (
//       <Notification key={idx} url={notif.get('url')} loud={notif.get('loud')}>
//         {notif.get('message')}
//       </Notification>
//     ));

CMS.registerPreviewTemplate('blog', BlogPostPreview)
// CMS.registerPreviewTemplate('docs', DocsPreview);
// CMS.registerPreviewTemplate('releases', ReleasePreview);
// CMS.registerPreviewTemplate('notifications', NotificationPreview);
