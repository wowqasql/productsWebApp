const Router = require('express') // получаем Router из express
const router = new Router() // Создаем объект Router'a
const typeController = require('../controllers/typeController')


router.post('/', typeController.create) // Метод post, чтобы создавать новые товары
router.get('/', typeController.getAll) // Метод get, чтобы получать товары
router.delete('/',typeController.delete)

module.exports = router // Экспортируем router