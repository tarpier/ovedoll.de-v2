import React from 'react'
import Layout from '../../components/layout'
import { Container } from '../../components/HelperComponents'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import get from 'lodash/get'

const SubmissionSuccess = () => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')
  return (
    <Layout>
      <Container flexDirection={'column'} pb={'50px'}>
        <Helmet title={siteTitle} />

        <h1>Submission Success</h1>
        <p>
          Want to start from the <Link to={'/'}>beginning</Link>
        </p>
      </Container>
    </Layout>
  )
}

export default SubmissionSuccess
