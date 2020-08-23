const express = require('express')
const router = express.Router()
const Url = require('../models/Url')

router.get('/', async (req, res) => {
  const allUrl = await Url.find()
  res.render('index', { allUrl: allUrl })
})

// @router GET http://localhost:5000/12345
// @desc Request short url
router.get('/:shorturl', async (req, res) => {
  console.log('connection')
  const ShortUri = await Url.findOne({ short: req.params.shorturl })

  if (!ShortUri) {
    res.status(404)
  }
  ShortUri.save()
  res.redirect(ShortUri.long)
})

module.exports = router
