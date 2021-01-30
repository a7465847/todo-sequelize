const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo

// 進入新增頁面
router.get('/new', (req, res) => {
  return res.render('new')
})

// 新增一筆資料
router.post('/', async (req, res) => {
  try {
    const UserId = req.user.id
    const name = req.body.name
    await Todo.create({ name, UserId })
    return res.redirect('/')
  } catch (err) {
    console.log(err)
  }
})
// 瀏覽特定頁面
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const UserId = req.user.id
    const todo = await Todo.findOne({ where: { id, UserId } })
    return res.render('detail', { todo: todo.toJSON() })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
