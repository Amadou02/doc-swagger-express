const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const usersRouter = require('./routes/users')

const app = express()
// swagger ui
const swaggerUI = require('swagger-ui-express')
// Swagger jsdoc
const swaggerJsdoc = require('swagger-jsdoc')
// setup defini dans le dossier docs
const swaggerConfig = require('./docs/swagger')
// lie swagger ui et swagger jsdoc
const openapiSpecification = swaggerJsdoc(swaggerConfig)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use('/users', usersRouter)
// server
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification))

module.exports = app
