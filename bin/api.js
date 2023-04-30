var app = require('../app')
var http = require('http')


const port = 3000
console.log('Starting API Server at Port', port)

app.set('port', port)

var server = http.createServer(app)


server.listen(port)


