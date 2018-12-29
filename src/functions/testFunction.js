var https = require('https')
require('dotenv').config()
const querystring = require('querystring')

exports.handler = (event, context, callback) => {
  const params = querystring.parse(event.body)

  // Honeypot
  if (params.sender_trap) {
    var response = {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: 'Forbidden',
    }

    callback(null, response)
    return false
  }

  const name = params.sender_name.replace(/(<([^>]+)>)/gi, '')
  const email = params.sender_email.replace(/(<([^>]+)>)/gi, '')
  const message = params.sender_message.replace(/(<([^>]+)>)/gi, '')

  var post_data = JSON.stringify({
    text: `Message sent by ${name} (${email}):\n ${message}`,
  })

  // An object of options to indicate where to post to
  var post_options = {
    host: 'hooks.slack.com',
    port: '443',
    path: `${process.env.SLACK}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(post_data),
    },
  }

  // Set up the request
  var post_req = https.request(post_options, function(res) {
    res.setEncoding('utf8')
    res.on('data', function(chunk) {
      console.log('Response: ' + chunk)
    })
  })

  // post the data
  post_req.write(post_data)
  post_req.end()

  var responseDetails = {
    one: '44',
    two: {
      details: 'Some details',
      another: 'More details',
    },
  }

  var response = {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(responseDetails),
  }

  callback(null, response)
}
