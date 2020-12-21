const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishListSchema = new Schema({
    titleWish: { type: String, unique: true, required: true },
    gifts: [],
    //     {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Good'
    // },
    display: {type: Boolean}
})

module.exports = mongoose.model('WishList', wishListSchema)