require('dotenv').config()
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require("jsonwebtoken")



module.exports.registration = async function (req, res) {
  try {
    const { login, password, email } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    const user = new User({
      email, login, password: hashedPassword
    })
    await user.save()
    const token = jwt.sign({ id: user.id }, process.env.KEY, { expiresIn: "1h" })
    return res.status(200).json({
      token,
      user,
      success: true,
      message: 'Успешно вошли!',
      isAuth: true
    })

  } catch {
    res.status(403).json({
      success: false,
      message: 'Такой логин или пароль уже заняты!',
    })
  }
}


module.exports.login = async function (req, res) {
  try {
    const { login, password } = req.body
    const user = await User.findOne({ login })
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Пользователь не найден!'
      })
    }
    const isPassValid = bcrypt.compareSync(password, user.password)
    if (!isPassValid) {
      return res.status(404).json({
        success: false,
        message: 'Неверный пароль!'
      })
    }
    const token = jwt.sign({ id: user.id }, process.env.KEY, { expiresIn: "1h" })
    return res.status(200).json({
      token,
      user,
      success: true,
      message: 'Успешно вошли!',
      isAuth: true

    })
  } catch (e) {
    res.send({ message: "Server error" })
  }
}

module.exports.sendAvatar = async function (req, res) {
  const {id, avatar} = req.body
  await User.findByIdAndUpdate(id, {avatar: avatar}, function(err, user){

  res.status(200).json({
    user,
    success: true,
    message: 'Успешно вошли!',
    isAuth: true
  })
});
}

module.exports.getUser = async function (req, res) {
  const {id} = req.query
  try {
      const user = await User.find({user: id});
      if (user) {
          return res.status(200).json(user)
      }
      return res.status(404).json('success: false')
  } catch (e) {
      res.send({ message: "Server error" })
  }
}
