// server.js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// import routes
const postRouter = require('./src/routes/postRouter')
// database configuration
require('./src/database')

const PORT = 8080

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/posts', postRouter)

app.get('/', (req, res) => {
  res.send('Hello World ! ')
})

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`)
})
