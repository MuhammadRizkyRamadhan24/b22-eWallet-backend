require('dotenv').config()
const {APP_PORT} = process.env
const express = require('express')
const sequelize = require('./src/config/sequelize')
const rootRouter = require('./src/routes')

const app = express()

app.use(express.urlencoded({extended: false}))

app.use('/', rootRouter)

app.listen(APP_PORT, () => {
  console.log(`App Running on Port ${APP_PORT}`)
  sequelize.sync()
})