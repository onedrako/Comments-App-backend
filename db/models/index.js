// const { User, UserSchema } = require('./users.model')
const { Comment, CommentSchema } = require('./comments.model')

const setUpModels = (sequelize) => {
  Comment.init(CommentSchema, Comment.config(sequelize))
}

module.exports = setUpModels
