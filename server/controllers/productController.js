const { Product } = require("../models/models")
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class ProductController {

  async create(req, res, next){ // Создание продукта
    try{
      const {name, desc, price, typeId} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + '.jpeg'  // Генерирует уникальный id ( уникаольное имя для картинки товара)
      img.mv(path.resolve(__dirname, '..', 'static', fileName )) // фция mv - Перемещаем файл с заданным именем в папку static
  
      const product = await Product.create({name, desc, price, typeId, img: fileName})
  
      return res.json(product)
    }catch(e){
      next(ApiError.badRequest(e.massage)) // передаем сообщение которое лежит в ошибке
    }
  }

  async getAll(req, res, next){ // Получение продукта из б/д
    
    let {productId, typeId, limit, page} = req.query // limit, page - постраничный вывод page - текущая страница limit - колво товаров на одной странице
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit //Перешли на вторую страницу и первые девять товаров надо пропустить УМНОЖАЕМ СТРАНИЦУ НА ЛИМИТ И ОТНИМАЕМ ЛИМИТ. ОТСПУТ ПОЛУЧАЕТСЯ В 9 ТОВАРОВ
    let products;
    if(!productId && !typeId){
       products = await Product.findAndCountAll({limit, offset}) // Если нет типа и нет продукта возвращаем все записи из б/д
    }
    if(productId && !typeId){
      products = await Product.findAndCountAll({where: {productId}, limit, offset}) // Если есть продукт то ищем только по продукту
    }
    if(!productId && typeId){
      products = await Product.findAndCountAll({where: {typeId}, limit, offset}) // Если есть тип то ищем только по типу
    }
    if(productId && typeId){
      products = await Product.findAndCountAll({where: {productId,typeId}, limit, offset}) // Если есть и продукт и тип то ищем по ним
      
    }
    return res.json(products)

  }

  async getById(req, res){ // Получить один  продукт
    const {id} = req.body
    const product = await Product.findOne( // Передаем условия по которому будем искать продукт
      {
        where: {id},
        //include: [{model: Product, as: 'desc'}] // Модель и название поля которое есть в этой модели
      },
    )
      return res.json(product)
  }
  
  async delete(req, res){ // Удаление продукта
    try{
      const {id} = req.params
      const product = await Product.destroy({
        where: {id}
      })
      return res.json(product)
    }catch(e){
      res.status(500).json(e)
    }
  }

}


module.exports = new ProductController()