require('dotenv').config()  // для считывания файла .env - импортируем конфиг из модуля dotenv
const express = require('express') // С помощью required импортируются модули в файл - импортируем express
const sequelize = require('./db') // импортируем sequelize и файла db
const PORT = process.env.PORT || 5000 // Указываем порт на котором будет работать приложение || порт прописан в .env
const models = require('./models/models') // Импортируем созданные модели(таблицы)
const cors = require('cors')
const router = require('./routes/index') // Импортируем один объединенный роутер (router)
const errorhandler = require('./middleware/ErrorHandlingMiddleware') // Регистрируем (импортируем) middleware
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express() // Создаем объект app, и вызывем ф-цию express. Отсюда будет начинаться запуск приложения

app.use(cors())
app.use(express.json()) // Для парсинга json формата
app.use(express.static(path.resolve(__dirname, 'static'))) // Получаем файлы, которые лежат в папке static
app.use(fileUpload({}))

app.use('/api', router) // /api - url, по которму обрабатывается роутер,  router - передаем сам роутер

//middleware, который работает с ошибками должен регистрироваться последним!
app.use(errorhandler)


// Вызываем функцию для подключения к б/д

const start = async () => { // Все операции с б/д - ассинхронные
  try {
    await sequelize.authenticate() // с помощью ф-ции authenticate устанавливается подключение к б/д
    await sequelize.sync() // эта ф-ция сверяет состояние б/д со схемой данных
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))  // указваем какой порт должен прослушивать наш сервер. 
//Вторым параметром передаем коллбек, который обработает при успешном запуске сервера

  }catch(e){
    console.log(e)
  }
}

start()

