const WishList = require('../models/WishList')
const User = require('../models/User')
module.exports.addWishListToBase  = async function(req, res) {
    try {
        const { inputText, gifts, userID} = req.body
        console.log(req.body)
        console.log(inputText)
        // const findList = await WishList.findOne(inputText)
        const user = new WishList({
            titleWish: inputText,
                gifts: gifts,
            user: userID,
            display: true
        })
        await user.save()
        return res.status(200).json({
            success: true,
            message: 'Успешно добавлено'

        })

    } catch {
        // if (findList){
        console.log('Есть такой уже ')
        res.status(403).json('wrong request')
    }
}
module.exports.getWishList = async function (req, res) {
    const {id} = req.query
    try {
        const goods = await WishList.find({user: id});
        if (goods) {
            return res.status(200).json(goods)
            //     success: false,
            //     message: 'Списков нет'
            // })
        }
        return res.status(404).json('success: false')
    } catch (e) {
        res.send({ message: "Server error" })
    }
}

module.exports.getWishListShare = async function (req, res) {
    const {id, user} = req.query
    try {
        const goods = await WishList.find({_id: id});
        const userNickname = await User.find({_id: user})

        if (goods && userNickname) {
            return res.status(200).json({goods, userNickname})

        }
        return res.status(404).json('success: false')
    } catch (e) {
        res.send({ message: "Server error" })
    }
}

module.exports.deleteWishList = async function (req, res) {
    const { id } = req.body
    console.log(id)
    try {
        const goods = await WishList.findOneAndDelete({_id: id});
        if (!goods) {
            return res.status(404).json({
                success: false,
                message: 'Ошибка удаления'
            })
        }
        return res.status(200).json({success: true, message: "Список удален"})
    } catch (e) {
        res.send({ message: "Server error" })
    }
}

module.exports.saveidea = async function (req,res) {
  const  {wishListTitle, idea} = req.body
  const old = await WishList.findOne({titleWish: wishListTitle})
  old.gifts.push(idea)
  await WishList.findOneAndUpdate({titleWish: wishListTitle}, {gifts: old.gifts}, function(err, wList){
   res.json('okey its back')
  });
}
