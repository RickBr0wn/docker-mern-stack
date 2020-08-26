require('dotenv').config()
const mongoose = require('mongoose')

// mongoose options
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
}

// mongodb environment variables
const { MONGO_HOSTNAME, MONGO_DB, MONGO_PORT } = process.env

// create the connection string
const dbConnectionURL = {
  LOCALURL: `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`,
}
// connect to the database
mongoose.connect(dbConnectionURL.LOCALURL, options)
// create a database instance
const db = mongoose.connection
// check database instance for `error` event
db.on(
  'error',
  console.error.bind(
    console,
    'Mongodb Connection Error:' + dbConnectionURL.LOCALURL
  )
)
// check database instance for `open` event
db.once('open', () => {
  // database connected
  console.log('Mongodb Connection Successful')
})
