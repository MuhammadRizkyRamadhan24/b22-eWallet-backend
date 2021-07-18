const UserModel = require('../models/users')

exports.listUsers = async (req, res) => {
  const user = await UserModel.findAll()
  return res.json({
    success: true,
    message: 'List Users',
    results: user
  })
}

exports.detailUser = async (req, res) => {
  const {id} = req.params
  const user = await UserModel.findByPk(id)
  if(user !== null){
    return res.json({
      success: true,
      message: 'Detail User',
      results: user
    })
  } else {
    return res.json({
      success: false,
      message: 'User Not Found'
    })
  }
}

exports.createUser = async (req, res)=> {
  const user = await UserModel.create(req.body)
  return res.json({
    success: true,
    message: 'User Created Successfully',
    results: user
  })
}

exports.updateUser = async (req, res) =>{
  const {id} = req.params
  const user = await UserModel.findByPk(id)
  user.set(req.body)
  await user.save()
  return res.json({
    success: true,
    message: 'User Updated Successfully',
    results: user
  })
}

exports.deleteUser = async (req, res) => {
  const {id} = req.params
  const user = await UserModel.findByPk(id)
  await user.destroy()
  return res.json({
    success: true,
    message: 'User Deleted Successfully',
    results: user
  })
}