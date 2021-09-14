const users = require('express').Router()
const { listUsers, detailUser, createUser, updateUser, deleteUser, updatePassUser } = require('../controllers/users')
const { auth } = require('../middelwares/auth')
const upload = require('../helpers/upload')
const uploadImage = upload.single('image')

users.delete('/:id', deleteUser)
users.get('/', auth, detailUser)
users.get('/get', listUsers)
users.post('/', createUser)
users.patch('/', auth, uploadImage, updateUser)
users.put('/changepass', auth, updatePassUser)

module.exports = users