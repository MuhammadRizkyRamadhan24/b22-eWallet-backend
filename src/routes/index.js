const router = require('express').Router()
const users = require('./users')
const transaction = require('./transaction')
const auth = require('./auth')
const transfer = require('./transfer')
const topup = require('./topup')

router.use('/users', users)
router.use('/transaction', transaction)
router.use('/auth', auth)
router.use('/transfer', transfer)
router.use('/topup', topup)

module.exports = router