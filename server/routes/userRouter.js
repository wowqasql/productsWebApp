const Router = require('express') // получаем Router из express
const router = new Router() // Создаем объект Router'a
const userController = require('../controllers/userController')

// В методы передаются контроллеры вторым параметром

// router.post('/registration', userController.registration) // Метод регистрации

router.post('/login', userController.login) // Метод авторизации


router.get('/auth', userController.check)  // Метод, который проверяет авторизован пользователь или нет



module.exports = router // Экспортируем router