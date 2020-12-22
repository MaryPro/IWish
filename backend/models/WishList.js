const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishListSchema = new Schema({
    titleWish: { type: String, required: true },
    gifts: [],
    //     {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Good'
    // },
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
         },
    display: {type: Boolean}
})

module.exports = mongoose.model('WishList', wishListSchema)