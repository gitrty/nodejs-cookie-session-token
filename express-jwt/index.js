const express = require('express')
const app = express()
const path = require('path')
const router = require('./router/userModle')

app.use(express.static(path.join(__dirname, './public')))

app.use(router)
app.listen(3000, function () {
  console.log('server running at http://127.0.0.1:3000')
})