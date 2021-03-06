let express = require('express')
let request = require('request')
let querystring = require('querystring')

let app = express()
let port = process.env.PORT || 8888

let redirect_uri = 
  process.env.REDIRECT_URI || 
  `http://localhost:${port}/callback`

  
app.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'playlist-read-private playlist-modify-public playlist-modify-private ugc-image-upload',
      redirect_uri
    }))
})


app.get('/callback', function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(
        process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
	console.log('login send')
    let access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000/dashboard/'
    res.redirect(uri + '?access_token=' + access_token)
  })
})


console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)