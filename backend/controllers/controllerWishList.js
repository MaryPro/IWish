const WishList = require('../models/WishList')


module.exports.addWishListToBase  = async function(req, res) {
    try {
        const { inputText, gifts} = req.body
        console.log(req.body)
        console.log(inputText)
        const findList = await WishList.findOne(inputText)
        const user = new WishList({
            titleWish: inputText,
                gifts: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Good'
                }],
            display: true
        })
        await user.save()
        return res.status(200).json({
            success: true,
            message: 'Успешно добавлено'

        })

    } catch {
        if (findList){
        console.log('Есть такой уже ')}
        res.status(403).json('wrong request')
    }
}
