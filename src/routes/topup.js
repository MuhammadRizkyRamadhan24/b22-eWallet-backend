const topup = require('express').Router()
const { createTopup, getTopUpById } = require('../controllers/topup')
const { auth: authMiddleware } = require('../middelwares/auth')

topup.get('/:userId', getTopUpById)
topup.post('/', authMiddleware, createTopup)

module.exports = topup