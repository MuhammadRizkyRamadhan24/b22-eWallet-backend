const TransferModel = require('../models/transfer')
const UserModel = require('../models/users')
const { Op } = require('sequelize')

exports.createTransfer = async (req, res) => {
  const userReceiver = await UserModel.findByPk(req.body.userIdReceiver)
  const userSender = await UserModel.findByPk(req.body.userIdSender)
  if (typeof req.body.deductedBalance === 'string') {
    req.body.deductedBalance = parseInt(req.body.deductedBalance)
  }
  if (typeof req.body.trxFee === 'string') {
    req.body.trxFee = parseInt(req.body.trxFee)
  }
  if (userReceiver) {
    const trx = await TransferModel.create(req.body)
    const totalForReceiver = req.body.deductedBalance
    const totalForSender = req.body.deductedBalance + req.body.trxFee
    userReceiver.set('balance', userReceiver.balance + totalForReceiver)
    await userReceiver.save()
    userSender.set('balance', userSender.balance - totalForSender)
    await userSender.save()
    return res.json({
      success: true,
      message: 'Transfer successfully',
      results: trx
    })
  } else {
    return res.status(404).json({
      success: false,
      message: 'User Not Found'
    })
  }
}

exports.getTransferByIdSender = async (req, res) => {
  const {userIdSender} = req.params
  const trx = await TransferModel.findAll({
    where: {
      userIdSender: {
        [Op.substring]: userIdSender
      }
    },
    include: [
      {model: UserModel, as: 'userDetailSender'},
      {model: UserModel, as: 'userDetailReceiver'}
    ]
  })
  return res.json({
    success: true,
    message: 'History Transfer by sender',
    results: trx
  })
}

exports.getTransferByIdReceiver = async (req, res) => {
  const {userIdReceiver} = req.params
  const trx = await TransferModel.findAll({
    where: {
      userIdReceiver: {
        [Op.substring]: userIdReceiver
      }
    },
    include: [
      {model: UserModel, as: 'userDetailReceiver'},
      {model: UserModel, as: 'userDetailSender'}
    ]
  })
  return res.json({
    success: true,
    message: 'History Transfer by receiver',
    results: trx
  })
}