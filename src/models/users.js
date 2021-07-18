const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const User = sequelize.define('users', {
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  balance: Sequelize.INTEGER,
  name: Sequelize.STRING,
  phone_number: Sequelize.STRING,
  image: Sequelize.STRING
});

module.exports = User