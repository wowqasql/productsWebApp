const Router = require('express') // получаем Router из express
const router = new Router() // Создаем объект Router'a
const productController = require('../controllers/productController')


router.post('/',productController.create) // Метод post, чтобы создавать новые товары
router.get('/',productController.getAll) // Метод get, чтобы получать товары
router.delete('/:id',productController.delete)
router.get('/:id',productController.getById) // Метод для получения конкретного товара после того, как открыли подробное описание

module.exports = router // Экспортируем router