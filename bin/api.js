var app = require('../app')
var http = require('http')
const cors = require('cors')


const port = 3000
console.log('Starting API Server at Port', port)

app.set('port', port)
app.use(cors())

var server = http.createServer(app)


server.listen(port)

app.use(cors({
    origin: 'http://etiqa-fe.s3-website-ap-southeast-1.amazonaws.com',
    methods: ['GET', 'PUT', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));


