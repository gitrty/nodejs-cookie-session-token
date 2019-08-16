const express = require('express')
const router = express.Router()

/**
@api {get} users 获取用户
@apiName GetUser
@apiGroup User

@apiParam {null} null null

@apiSuccessExample {json} Success-Response:
{
  "err": 0,
    "message": {
      "name": "fly",
      "age": 18
  }
}
*/

router.get('/users', (req, res) => {
  res.send({ err: 0, message: { name: 'fly', age: 18 } })
})

/**
@api {post} users 添加用户
@apiName 添加用户
@apiGroup User

@apiParam {string} us 用户名 必选
@apiParam {string} ps 密码  必选

@apiSuccessExample {json} Success-Response:
{
  "err": 0,
  "message": '添加成功'
}
 */

router.get('/users', (req, res) => {
  res.send({ err: 0, message: [{ name: 'fly', age: 18 }] })
})

module.exports = router