const Router = require('express') // получаем Router из express
const router = new Router() // Создаем объект Router'a
// Импортируем роутеры

const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const productRouter = require('./productRouter')


// Объединяем все роуетры в один : сопоставляем маршруты с соответввующим роутером

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/product', productRouter)


module.exports = router // Экспортируем router