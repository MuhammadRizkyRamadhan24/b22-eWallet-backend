const topup = require('express').Router()
const { createTopup, getTopUpById } = require('../controllers/topup')

topup.get('/:userId', getTopUpById)
topup.post('/', createTopup)

module.exports = topup