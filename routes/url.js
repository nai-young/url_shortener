const express = require('express')
const router = express.Router()
// const validUrl = require('valid-url')
const Url = require('../models/Url')

// @router POST /api/url/shorturl
// @desc Get short url
router.post('/shorturl', async (req, res) => {
  await Url.create({
    long: req.body.codeUrl
  })
  res.redirect('/')
})

module.exports = router
