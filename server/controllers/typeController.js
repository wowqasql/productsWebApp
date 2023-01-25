const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {

// Создание категории продукта
  async create(req, res){ 
    const {name} = req.body // Из тела запроса(url строки) извлекаем название типа товара, какой в базе данных
    const type = await Type.create({name}) //с помощью ф-ции create создаем этот тип
    return res.json(type) // Параметром в ф-цию create передаем объект, и указываем назавание типа, а id будет присовоен автоматически

  }

  
  async getAll(req, res){ // Получение продукта из б/д
    const types = await Type.findAll() // findAll - фция которая возвращает все записи из б/д
    return res.json(types) // Возвращаем на клиент весь массив объектов
  }


  async delete(req, res){ // Удаление продукта

  }
}

module.exports = new TypeController()