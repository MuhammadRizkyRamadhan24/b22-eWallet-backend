const users = require('express').Router()
const { listUsers, detailUser, createUser, updateUser, deleteUser } = require('../controllers/users')

users.get('/:id', detailUser)
users.patch('/:id', updateUser)
users.delete('/:id', deleteUser)
users.post('/', createUser)
users.get('/', listUsers)

module.exports = users