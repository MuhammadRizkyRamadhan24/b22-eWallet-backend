const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')
const UserModel = require('./users')

const Topup = sequelize.define('topups', {
  userId: Sequelize.INTEGER,
  deductedBalance: Sequelize.INTEGER,
})

Topup.belongsTo(UserModel, {foreignKey: 'userId', sourceKey: 'id', as: 'userDetail'})

module.exports = Topup