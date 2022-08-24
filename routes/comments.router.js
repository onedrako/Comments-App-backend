const express = require('express')
const validatorHandler = require('../middlewares/validator.handler')
const { getCommentSchema, createCommentSchema, updateCommentSchema } = require('../schemas/comments.schema')

const CommentService = require('../services/comment.service')

const router = express.Router()
const service = new CommentService()

router.get('/', async (req, res, next) => {
  try {
    const comments = await service.getAll()

    res.send(comments)
  } catch (err) {
    next(err)
  }
})

router.get('/:id',
  validatorHandler(getCommentSchema, 'params'),
  async (req, res, next) => {
    try {
      const comment = await service.getById(req.params.id)
      res.status(200).json(comment)
    } catch (err) {
      next(err)
    }
  })

router.post('/',
  validatorHandler(createCommentSchema, 'body'),
  async (req, res, next) => {
    const comment = req.body
    try {
      const newComment = await service.create(comment)
      res.send(newComment)
    } catch (err) {
      next(err)
    }
  })

router.patch('/:id',
  validatorHandler(getCommentSchema, 'params'),
  validatorHandler(updateCommentSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params
    const comment = req.body
    try {
      await service.update(id, comment)
      res.send(comment)
    } catch (err) {
      next(err)
    }
  })

router.delete('/:id',
  validatorHandler(getCommentSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params
    try {
      const commentToDelete = await service.getById(id)
      await service.delete(id)
      res.status(200).json(commentToDelete)
    } catch (err) {
      next(err)
    }
  })

module.exports = router
