const users = require('express').Router()
const { listUsers, detailUser, createUser, updateUser, deleteUser } = require('../controllers/users')
const { auth } = require('../middelwares/auth')
const upload = require('../helpers/upload')
const uploadImage = upload.single('image')

users.get('/:id', auth, detailUser)
users.patch('/:id', uploadImage, updateUser)
users.delete('/:id', deleteUser)
users.post('/', createUser)
users.get('/', listUsers)

module.exports = users