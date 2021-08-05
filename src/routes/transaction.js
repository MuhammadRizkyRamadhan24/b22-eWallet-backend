const transaction = require('express').Router()
const { createTransaction, detailTransaction, getTransaction } = require('../controllers/transaction')
const { auth: authMiddleware } = require('../middelwares/auth')

// transaction.get('/:id', detailTransaction)
transaction.get('/pulsa', authMiddleware, getTransaction)
transaction.post('/', authMiddleware, createTransaction)

module.exports = transaction