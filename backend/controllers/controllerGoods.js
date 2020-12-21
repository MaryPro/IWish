const Good = require('../models/Good')


module.exports.gets = async function (req, res) {
  try {
    const goods = await Good.find();
    if (!goods) {
      return res.status(404).json({
        success: false,
        message: 'Товаров нет!'
      })
    }
    return res.status(200).json(goods)
  } catch (e) {
    res.send({ message: "Server error" })
  }
}

module.exports.addidea = async function (req,res) {
  console.log(req.body, 'contrGoods');
  try {
    const  {titleWish, description, tag} = req.body
    const idea = new Good({
      titleWish, description, tag
    })
    console.log(idea);
    await idea.save()

    return res.json({idea})
  } catch (error) {
    return res.send({ message: "Cant add Idea" })
  }
  
}
