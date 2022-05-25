/** @format */

import express from 'express'
import { Server } from 'socket.io'
import __dirname from './utils.js'
import { PORT, MARIADB } from './config/config.js'
import dotenv from 'dotenv'
import { router } from './router/products.router.js'
dotenv.config()

const app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/products', router)
app.use('api/products-test', router)
const server = app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})

const io = new Server(server)
const log = []

io.on('connection', (socket) => {
  console.log('Client connected')
  socket.on('message', (data) => {
    log.push(data)
    io.emit('log', log)
  })
})
