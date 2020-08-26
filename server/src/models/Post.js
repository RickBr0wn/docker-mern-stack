// Post.js
const mongoose = require('mongoose')

// defines the `Post` schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  author: {
    type: String,
  },
})

// creates the model from the schema
const Post = mongoose.model('Post', postSchema)

// export the model
module.exports = Post
