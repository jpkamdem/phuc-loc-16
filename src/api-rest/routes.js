const express = require('express')
const router = express.Router()
const { getBoxes } = require('./api/read.js')
const { addBox } = require('./api/update.js')


router.get('/', (req, res) => {
    console.log('/ est accedé')
    res.send('Bienvenue.')
})

router.get('/getboxes', getBoxes)

module.exports = router