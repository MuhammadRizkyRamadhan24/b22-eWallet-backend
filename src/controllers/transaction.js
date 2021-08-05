const { codeTransaction } = require('../helpers/time');
const TransactionModel = require('../models/transaction')
const UserModel = require('../models/users')

exports.createTransaction = async (req, res) => {
  const {id : userId} = req.authUser;
  const user = await UserModel.findByPk(userId)
  if (typeof req.body.deductedBalance === 'string') {
    req.body.deductedBalance = parseInt(req.body.deductedBalance)
  }
  if (typeof req.body.trxFee === 'string') {
    req.body.trxFee = parseInt(req.body.trxFee)
  }
  if (user) {
    if(req.body.deductedBalance > user.balance){
      return res.status(401).json({
        success: false,
        message: 'Not enough balance'
      })
    }
    const refNo = codeTransaction(req.body.number)
    const setData = {
      ...req.body,
      userId,
      refNo
    }
    const trx = await TransactionModel.create(setData)
    const total = req.body.deductedBalance + req.body.trxFee
    user.set('balance', user.balance - total)
    await user.save()
    return res.json({
      success: true,
      message: 'Transaction successfully',
      results: trx
    })
  } else {
    return res.status(404).json({
      success: false,
      message: 'User Not Found'
    })
  }
}

exports.detailTransaction = async (req, res) => {
  const {id} = req.params
  const trx = await TransactionModel.findByPk(id, {
    include: [
      {model: UserModel, as: 'userDetail'},
    ]
  })
  return res.json({
    success: true,
    message: 'Detail Transaction',
    results: trx
  })
}

exports.getTransaction = async (req, res) => {
  const {id : userId} = req.authUser;
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
  const trx = await TransactionModel.findAll({
    where: {
      userId: userId
    },
    include: [
      { model: UserModel, as: 'userDetail' },
    ],
    order,
    limit,
    offset: (page - 1) * limit
  })
  if (trx.length > 0) {
    const count = await TransactionModel.count({
      where: {
        userId: userId
      }
    })
    trx.map(value => {
      value.deductedBalance = Number(value.deductedBalance).toLocaleString('en')
    })
    return res.json({
      success: true,
      message: 'History Transaction Pulsa',
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