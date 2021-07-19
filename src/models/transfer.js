const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')
const UserModel = require('./users')

const Transfer = sequelize.define('transfers', {
  userIdSender: Sequelize.INTEGER,
  userIdReceiver: Sequelize.INTEGER,
  deductedBalance: Sequelize.INTEGER,
  description: Sequelize.STRING,
  trxFee: Sequelize.INTEGER
})

Transfer.belongsTo(UserModel, {foreignKey: 'userIdSender', sourceKey: 'id', as: 'userDetailSender'})
Transfer.belongsTo(UserModel, {foreignKey: 'userIdReceiver', sourceKey: 'id', as: 'userDetailReceiver'})

module.exports = Transfer