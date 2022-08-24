const Joi = require('joi')

const id = Joi.number().integer()
const email = Joi.string()
const comment = Joi.string()

const getCommentSchema = Joi.object({
  id: id.required()
})

const createCommentSchema = Joi.object({
  email: email.required(),
  comment: comment.required()
})

const updateCommentSchema = Joi.object({
  comment: comment.required()
})

module.exports = { getCommentSchema, createCommentSchema, updateCommentSchema }
