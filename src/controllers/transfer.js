const TransferModel = require('../models/transfer')
const UserModel = require('../models/users')
const { Op } = require('sequelize')
const TokenFCM = require('../models/tokenFcm')
const firebase = require('../helpers/firebase')

exports.createTransfer = async (req, res) => {
  const userDetailReceiver = await UserModel.findOne({
    where: {
      phone_number: req.body.phoneNumberReceiver
    },
    include: TokenFCM
  })
  if(userDetailReceiver === null){
      return res.status(404).json({
      success: false,
      message: 'User Not Found'
    })
  }
  const {id} = req.authUser;
  const userReceiver = await UserModel.findByPk(userDetailReceiver.id)
  const userSender = await UserModel.findByPk(id)
  if (typeof req.body.deductedBalance === 'string') {
    req.body.deductedBalance = parseInt(req.body.deductedBalance)
  }
  if (typeof req.body.trxFee === 'string') {
    req.body.trxFee = parseInt(req.body.trxFee)
  }
  if (userReceiver) {
    if(req.body.deductedBalance > userSender.balance){
      return res.status(401).json({
        success: false,
        message: 'Not enough balance'
      })
    }
    const data = {
      ...req.body,
      trxFee: 0,
      userIdReceiver: `${userDetailReceiver.id}`,
      userIdSender: id
    }
    const totalForReceiver = req.body.deductedBalance
    const totalForSender = req.body.deductedBalance + data.trxFee
    userReceiver.set('balance', userReceiver.balance + totalForReceiver)
    await userReceiver.save()
    userSender.set('balance', userSender.balance - totalForSender)
    await userSender.save()
    const trx = await TransferModel.create(data)

    if(userDetailReceiver.token_fcm !== null){
      firebase.messaging().sendToDevice(userDetailReceiver.token_fcm.token, {
        notification: {
          title: 'OAO',
          body: `${userSender.name} mengirimkan dana sebesar ${Number(req.body.deductedBalance).toLocaleString('en')} melalui aplikasi OAO`
        }
      })
    }

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
  const {id : userIdSender} = req.authUser;
  let {sort = 'ASC', limit = 7, page = 1 } = req.query
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
  const trx = await TransferModel.findAll({
    where: {
      userIdSender: userIdSender
    },
    include: [
      { model: UserModel, as: 'userDetailSender' },
      { model: UserModel, as: 'userDetailReceiver' }
    ],
    order,
    limit,
    offset: (page - 1) * limit
  })
  if (trx.length > 0) {
    const count = await TransferModel.count({
      where: {
        userIdSender: userIdSender
      }
    })
    trx.map(value => {
      value.deductedBalance = Number(value.deductedBalance).toLocaleString('en')
    })
    return res.json({
      success: true,
      message: 'History Transfer by sender',
      results: trx,
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

exports.getTransferByIdReceiver = async (req, res) => {
  const {id : userIdReceiver} = req.authUser;
  let {sort = 'ASC', limit = 7, page = 1 } = req.query
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
  const trx = await TransferModel.findAll({
    where: {
      userIdReceiver: userIdReceiver
    },
    include: [
      { model: UserModel, as: 'userDetailReceiver' },
      { model: UserModel, as: 'userDetailSender' }
    ],
    order,
    limit,
    offset: (page - 1) * limit,
  })
  // return res.json({
  //   success: true,
  //   message: 'History Transfer by receiver',
  //   results: trx
  // })
  if (trx.length > 0) {
    const count = await TransferModel.count({
      where: {
        userIdReceiver: userIdReceiver
      }
    })
    
    trx.map(value => {
      value.deductedBalance = Number(value.deductedBalance).toLocaleString('en')
    })
    return res.json({
      success: true,
      message: 'History Transfer by receiver',
      results: trx,
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