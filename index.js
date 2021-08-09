require('dotenv').config()
const {PORT} = process.env
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

app.listen(PORT, () => {
  console.log(`App Running on Port ${PORT}`)
  sequelize.sync()
})