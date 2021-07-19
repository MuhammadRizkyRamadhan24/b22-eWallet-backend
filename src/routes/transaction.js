const transaction = require('express').Router()
const { createTransaction, detailTransaction } = require('../controllers/transaction')

transaction.get('/:id', detailTransaction)
transaction.post('/', createTransaction)

module.exports = transaction