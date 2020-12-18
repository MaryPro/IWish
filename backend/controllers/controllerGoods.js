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
