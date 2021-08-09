const TopupModel = require('../models/topup')
const UserModel = require('../models/users')
const { Op } = require('sequelize')

exports.createTopup = async (req, res) => {
  const {id} = req.authUser;
  const user = await UserModel.findByPk(id)
  if (typeof req.body.deductedBalance === 'string') {
    req.body.deductedBalance = parseInt(req.body.deductedBalance)
  }
  const data = {
    ...req.body,
    userId: id
  }
  if (user) {
    const trx = await TopupModel.create(data)
    const total = req.body.deductedBalance
    user.set('balance', user.balance + total)
    await user.save()
    return res.json({
      success: true,
      message: 'Topup successfully',
      results: trx
    })
  } else {
    return res.status(404).json({
      success: false,
      message: 'User Not Found'
    })
  }
}

exports.getTopUpById = async (req, res) => {
  const {userId} = req.params
  const trx = await TopupModel.findAll({
    where: {
      userId: {
        [Op.substring]: userId
      }
    },
    include: [
      {model: UserModel, as: 'userDetail'}
    ]
  })
  return res.json({
    success: true,
    message: 'History Topup',
    results: trx
  })
}