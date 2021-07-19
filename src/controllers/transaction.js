const TransactionModel = require('../models/transaction')
const UserModel = require('../models/users')

exports.createTransaction = async (req, res) => {
  console.log(req.body);
  const user = await UserModel.findByPk(req.body.userId)
  if (typeof req.body.deductedBalance === 'string') {
    req.body.deductedBalance = parseInt(req.body.deductedBalance)
  }
  if (typeof req.body.trxFee === 'string') {
    req.body.trxFee = parseInt(req.body.trxFee)
  }
  if (user) {
    const trx = await TransactionModel.create(req.body)
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