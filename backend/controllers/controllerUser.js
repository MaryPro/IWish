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
    const token = jwt.sign({ id: user.id }, "secket-key", { expiresIn: "1h" })
    // console.log('*+*+*+*+*+*+*')
    // console.log(user)

    // return res.status(201).json({ user })
    return res.status(200).json({
      token,
      user,
      success: true,
      message: 'Успешно вошли',
      isAuth: true

    })

  } catch {
    console.log('что-то нетак')
    res.status(403).json('Smth went wrong')
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
        message: 'Неверный пароль'
      })
    }
    const token = jwt.sign({ id: user.id }, "secket-key", { expiresIn: "1h" })
    return res.status(200).json({
      token,
      user,
      success: true,
      message: 'Успешно вошли',
      isAuth: true

    })
  } catch (e) {
    console.log(e)
    res.send({ message: "Server error" })
  }
}


