const transfer = require('express').Router()
const { createTransfer, getTransferByIdSender, getTransferByIdReceiver } = require('../controllers/transfer')


transfer.get('/:userIdReceiver/receiver', getTransferByIdReceiver)
transfer.get('/:userIdSender/sender', getTransferByIdSender)
transfer.post('/', createTransfer)

module.exports = transfer