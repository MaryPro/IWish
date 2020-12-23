require('dotenv').config()
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require("jsonwebtoken")
const passport = require('passport')


module.exports.registration = async function (req, res) {
  try {
    const { login, password, email } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    const user = new User({
      email, login, password: hashedPassword
    })

    switch (login, email, password) {
      case (!login && !email && !password):
        return res.status(403).json({
          success: false,
          message: 'Введите логин, почту и пароль!'
        })
      case (!login && !password):
        return res.status(403).json({
          success: false,
          message: 'Введите логин и пароль!'
        })
      case (!login && !email):
        return res.status(403).json({
          success: false,
          message: 'Введите логин и почту!'
        })
      case (!password && !email):
        return res.status(403).json({
          success: false,
          message: 'Введите почту и пароль!'
        })
      case (!login):
        return res.status(403).json({
          success: false,
          message: 'Введите логин!'
        })
      case (!email):
        return res.status(403).json({
          success: false,
          message: 'Введите почту!'
        })
      case (!password):
        return res.status(403).json({
          success: false,
          message: 'Введите пароль!'
        })
      default:
        break;
    }
    // if (!login && !email && !password) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Введите логин, почту и пароль!'
    //   })
    // }
    // if (!login && !password) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Введите логин и пароль!'
    //   })
    // }
    // if (!login && !email) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Введите логин и почту!'
    //   })
    // }
    // if (!password && !email) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Введите почту и пароль!'
    //   })
    // }
    // if (!login) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Введите логин!'
    //   })
    // }
    // if (!email) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Введите почту!'
    //   })
    // }
    // if (!password) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Введите пароль!'
    //   })
    // }

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
    return res.status(403).json({
      success: false,
      message: 'Такой логин или почта уже используютя!',
    })
  }
}


module.exports.login = async function (req, res) {
  try {
    const { login, password } = req.body
    const user = await User.findOne({ login })

    switch (login, password) {
      case (!login && !password):
        return res.status(403).json({
          success: false,
          message: 'Введите логин и пароль!'
        })
      case (!login):
        return res.status(403).json({
          success: false,
          message: 'Введите логин!'
        })
      case (!password):
        return res.status(403).json({
          success: false,
          message: 'Введите пароль!'
        })
      default:
        break;
    }


    // if (!login && !password) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Введите логин и пароль!'
    //   })
    // }
    // if (!login) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Введите логин!'
    //   })
    // }
    // if (!password) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Введите пароль!'
    //   })
    // }
    // if (!user) {
    //   return res.status(404).json({
    //     success: false,
    //     message: 'Пользователь не найден!'
    //   })
    // }
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


