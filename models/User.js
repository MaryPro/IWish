const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  regDate: { type: Date, default: Date.now },
  wishlists: []
})

module.exports = mongoose.model('User', userSchema)
