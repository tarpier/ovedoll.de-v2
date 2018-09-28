import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container } from '../components/HelperComponents'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => {
  const siteTitle = get(this, 'props.data.site.siteMetadata.title')

  return (
    <Layout>
      <Container flexDirection={'column'}>
        <Helmet title={siteTitle} />
        <h1>Oops something went wrong!</h1>
        <p>
          It seems like you took a wrong turn somehow. Do you want to start over
          from the <Link to={'/'}>start</Link>
        </p>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
