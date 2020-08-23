const mongoose = require('mongoose')
const shortId = require('shortid')

const UrlSchema = mongoose.Schema({
  code: { type: String },
  long: { type: String, required: true },
  short: { type: String, required: true, default: shortId.generate }
})
module.exports = mongoose.model('Url', UrlSchema)
