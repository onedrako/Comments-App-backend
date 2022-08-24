const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class CommentService {
  async getAll () {
    try {
      const comments = await models.Comment.findAll()
      if (!comments) {
        throw boom.notFound('Comments not found')
      }
      return comments
    } catch (err) {
      throw boom.notFound(err)
    }
  }

  async getById (id) {
    try {
      const comment = await models.Comment.findByPk(id)
      if (!comment) {
        throw boom.notFound('Comment not found')
      }
      return comment
    } catch (err) {
      throw boom.notFound(err)
    }
  }

  async create (comment) {
    try {
      const newComment = await models.Comment.create(comment)
      if (!newComment) {
        throw boom.badRequest('Comment not created')
      }
      return newComment
    } catch (err) {
      throw boom.notFound(err)
    }
  }

  async update (id, comment) {
    try {
      const updatedComment = await models.Comment.update(comment, { where: { id } })
      if (!updatedComment[0]) {
        throw boom.badRequest('Comment not updated')
      }
      return updatedComment
    } catch (err) {
      throw boom.badRequest(err)
    }
  }

  async delete (id) {
    try {
      const deletedComment = await models.Comment.destroy({ where: { id } })
      if (!deletedComment) {
        throw boom.badRequest('Comment not deleted')
      }
      return deletedComment
    } catch (err) {
      throw boom.badRequest(err)
    }
  }
}

module.exports = CommentService
