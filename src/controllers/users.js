const UserModel = require('../models/users')
const { Op } = require('sequelize')
const fs = require('fs')
const path = './src/public/images'

// exports.listUsers = async (req, res) => {
//   const user = await UserModel.findAll()
//   return res.json({
//     success: true,
//     message: 'List Users',
//     results: user
//   })
// }

exports.listUsers = async (req, res) => {
  let { search = '', sort = 'ASC', limit = 5, page = 1 } = req.query
  let order = []
  if (typeof sort === 'object') {
    const key = Object.keys(sort)[0]
    let value = sort[key]
    if (value === '1') {
      value = 'DESC'
    } else {
      value = 'ASC'
    }
    order.push([key, value])
  }
  if (typeof limit === 'string') {
    limit = parseInt(limit)
  }
  if (typeof page === 'string') {
    page = parseInt(page)
  }
  const user = await UserModel.findAll({
    where: {
      name: {
        [Op.substring]: search
      }
    },
    order,
    limit,
    offset: (page - 1) * limit
  })
  if (user.length > 0) {
    const count = await UserModel.count()
    return res.json({
      success: true,
      message: 'List Users',
      results: user,
      pageInfo: {
        totalPage: Math.ceil(count / limit),
        currentPage: page,
        limitData: limit
      }
    })
  } else {
    return res.status(404).json({
      success: false,
      message: 'User Not Found'
    })
  }
}

exports.detailUser = async (req, res) => {
  const { id } = req.params
  const user = await UserModel.findByPk(id)
  if (user !== null) {
    return res.json({
      success: true,
      message: 'Detail User',
      results: user
    })
  } else {
    return res.status(404).json({
      success: false,
      message: 'User Not Found'
    })
  }
}

exports.createUser = async (req, res) => {
  const user = await UserModel.create(req.body)
  return res.json({
    success: true,
    message: 'User Created Successfully',
    results: user
  })
}

exports.updateUser = async (req, res) => {
  const { id } = req.params
  const user = await UserModel.findByPk(id)
  if (user) {
    const oldData = await UserModel.findAll({
      where: {
        id: {
          [Op.substring]: id
        }
      }
    })
    if (req.file !== undefined) {
      req.body.image = req.file.filename
    }
    if (oldData[0].image === null || req.body.image === undefined) {
      user.set(req.body)
      await user.save()
      console.log('kaga')
      return res.json({
        success: true,
        message: 'User Updated Successfully',
        results: user
      })
    } else {
      user.set(req.body)
      await user.save()
      console.log('hapus')
      fs.unlinkSync(path + '/' + oldData[0].image)
      return res.json({
        success: true,
        message: 'User Updated Successfully',
        results: user
      })
    }
  } else {
    return res.status(404).json({
      success: false,
      message: 'User Not Found'
    })
  }
}

exports.deleteUser = async (req, res) => {
  const { id } = req.params
  const user = await UserModel.findByPk(id)
  if (user) {
    await user.destroy()
    return res.json({
      success: true,
      message: 'User Deleted Successfully',
      results: user
    })
  } else {
    return res.status(404).json({
      success: false,
      message: 'User Not Found'
    })
  }
}