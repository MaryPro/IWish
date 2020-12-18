const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goodSchema = new Schema({
  titleWish: { type: String, required: true },
  titleGift: { type: String},
  description: { type: String },
  img: { type: String },
  rate: { type: Number },
  tag: [],
  display: {type: Boolean}
})

module.exports = mongoose.model('Good', goodSchema)
