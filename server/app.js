const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

//** Middleware **//
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())
app.set('etag', false)


//** API routes **//
require('./routes/Api/main.routes.js')(app, 'api')

app.get('/api', (req,res) => {
  const PKG = require('./package.json')
  res.status(200).json({
    name: PKG.name,
    author: PKG.author,
    description: PKG.description,
    version: PKG.version
  })
})

module.exports = app
