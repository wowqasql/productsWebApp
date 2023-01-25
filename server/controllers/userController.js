const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')

class UserController {

  async registration(req, res){ // Логин

  }
  async login(req, res){ // Регистрация

  }



  async check(req, res, next){ // Ф-ция, которая проверят авторизован пользователь или нет
    const {id} = req.query
    if (!id){
     return next(ApiError.badRequest('Не задан ID'))
    }
    res.json(id)
  }
}

module.exports = new UserController()