const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const user_handler = require('../router_handler/user')

//首页list数据
router.post('/list', user_handler.list)

//文章详情数据
router.get('/list/article', user_handler.article)

module.exports = router
