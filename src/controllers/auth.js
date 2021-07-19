const UserModel = require('../models/users')
const { Op } = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

exports.login = async (req, res) => {
  const { phone_number, password } = req.body
  const user = await UserModel.findAll({
    where: {
      phone_number: {
        [Op.substring]: phone_number
      }
    }
  })
  const result = user[0]
  if (result !== undefined) {
    console.log(result);
    const compare = await bcrypt.compare(password, result.password)
    console.log(compare);
    if (compare) {
      const token = jwt.sign({ id: result.id, phone_number: result.phone_number }, process.env.APP_KEY, { expiresIn: '1d' })
      return res.json({
        success: true,
        message: 'Login Success',
        resultToken: token,
        userDetail: {
          id: result.id,
          phone_number: result.phone_number
        }
      })
    } else {
      return res.status(404).json({
        success: false,
        message: 'Login Failed',
      })
    }
  } else {
    return res.status(404).json({
      success: false,
      message: 'Wrong Email Or Password',
    })
  }
}

exports.register = async (req, res) => {
  // const result = validationResult(req)
  // if(!result.isEmpty()) {
  //   return res.status(500).json({
  //     success: false,
  //     message: result.errors[0].msg
  //   })
  // }
  const data = req.body
  data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
  const user = await UserModel.create(data)
  return res.json({
    success: true,
    message: 'User has been create',
    results: user
  })
}