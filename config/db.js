const mongoose = require('mongoose')
require('dotenv').config()
const mongoUri = process.env.MONGOURI

const mongoConnect = async () => {
  try {
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected to database')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
module.exports = mongoConnect
