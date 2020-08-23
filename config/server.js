const express = require('express')
const mongoConnect = require('./db')
require('dotenv').config()

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use('/', require('../routes/index'))
app.use('/api/url', require('../routes/url'))

// Connection to database
mongoConnect()

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
