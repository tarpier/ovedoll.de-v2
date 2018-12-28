import querystring from 'querystring'

exports.handler = async (event, context, callback) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const params = querystring.parse(event.body)
  const name = params.name || 'World'

  return {
    statusCode: 200,
    body: `Hello, ${name}`,
  }
}
