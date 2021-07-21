const auth = require('express').Router()
const { login, register, registerToken } = require('../controllers/auth')
const { auth: authMiddleware } = require('../middelwares/auth')

auth.post('/login', login)
auth.post('/signup', register)
auth.post('/registerToken', authMiddleware , registerToken)

module.exports = auth