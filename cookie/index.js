const express = require('express')
// 引入cookie 中间件  
const cookieParse = require('cookie-parser')

const app = express()
// 1234asdsaczfsa 随意写的用于加密 
app.use(cookieParse('fslfjslfjsl'))
// app.use(cookieParse())

app.use((req, res, next) => {
  //  写入cookie
  // res.cookie('name', 'fly')

  // 设置cookie
  res.cookie('name', 'fly', {
    signed: true,     // 这个是加密属性 默认false不加密 是否添加签名 
    httpOnly: true,   // 这是微软对Cookie做的扩展。如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。
    maxAge: 1000 * 60  // 设置cookie过期时间
  })

  next()
})

app.get('/', function (req, res) {
  // 获取cookie
  // console.log(req.cookies.name)
  console.log('解密的cookie为 ' + req.signedCookies.name);
  res.send('ok')
})


app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
})

