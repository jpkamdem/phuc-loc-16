const express = require('express')
const router = express.Router()
const { getBoxes } = require('./api/read.js')
const { addToCart } = require('./api/create.js')

router.get('/getboxes', getBoxes)

router.post('/cart', addToCart)

module.exports = router