require('dotenv').config()
const {APP_PORT} = process.env
const express = require('express')
const sequelize = require('./src/config/sequelize')
const rootRouter = require('./src/routes')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.urlencoded({extended: false}))

app.use('/static', express.static(path.join(__dirname, 'src/public')))
app.use('/', rootRouter)

app.listen(APP_PORT, () => {
  console.log(`App Running on Port ${APP_PORT}`)
  sequelize.sync()
})