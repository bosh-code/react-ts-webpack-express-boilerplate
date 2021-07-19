// const express = require('express')
// const path = require('path')
//
// const server = express()
//
// server.use(express.json())
// server.use(express.static(path.join(__dirname, 'public')))
//
// module.exports = server

// import express from 'express'
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes')
const apiRoute = require('./routes/api')

const expressApp = express()

expressApp.use(logger('dev'))
expressApp.use(express.json())
expressApp.use(express.urlencoded({ extended: false }))
expressApp.use(cookieParser())
expressApp.use(express.static(path.join(__dirname, 'public')))

expressApp.use('/', indexRouter)
expressApp.use('/api/v1', apiRoute)

module.exports = expressApp
