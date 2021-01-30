const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth')
const auth = require('./modules/auth')
const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')

router.use('/todos', authenticator, todos) // 加入驗證程序
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home) // 加入驗證程序
module.exports = router
