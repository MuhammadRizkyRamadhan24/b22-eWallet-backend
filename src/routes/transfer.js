const transfer = require('express').Router()
const { createTransfer, getTransferByIdSender, getTransferByIdReceiver } = require('../controllers/transfer')
const { auth: authMiddleware } = require('../middelwares/auth')

transfer.get('/receiver', authMiddleware, getTransferByIdReceiver)
transfer.get('/sender', authMiddleware, getTransferByIdSender)
transfer.post('/user', authMiddleware, createTransfer)

module.exports = transfer