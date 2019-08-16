const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

// 签名   随便写 
const screat = 'flsjflsjfl'
// 加密的数据
const payload = {
  us: 'fly',
  ps: '123'
}


const token = jwt.sign(payload, screat)

console.log(token)

jwt.verify(token, screat, (err, data) => {
  console.log(data)
})

// function createToken(payload) {
//   payload.ctime = Date.now()
//   return jwt.sign(payload, screat)
// }



// function checkToken(token) {
//   return new Promise((resolve, reject) => {
//     jwt.verify(token, screat, (err, data) => {
//       if (err) reject({ err: -1, message: 'token 验证失败' })
//       resolve(data)
//     })
//   })
// }

// app.get('/', (req, res) => {
//   res.redirect('/home')
// })

// app.get('/home', async (req, res) => {
//   const token = req.query.token
//   try {
//     const data = await checkToken(token)
//     console.log(data)
//     res.send('home')
//   } catch (err) {
//     res.send(err)
//   }
// })

// app.get('/login', (req, res) => {
//   // 生成一个 token 
//   var token = createToken(payload)
//   console.log(token)
//   res.send({ err: 0, message: 'success', token })
// })

app.listen(3000, function () {
  console.log('server running at http://127.0.0.1:3000')
})