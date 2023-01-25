const ApiError = require('../error/ApiError')

module.exports = function (err, req, res, next){ // middleware.  next - ф-ция, при вызове которой передается управление следующему в цепочке мидлвейру
  if(err instanceof ApiError){ // Если класс ошибки - ApiError
   return res.status(err.status || 500).json({message: err.message}) // Возвращает ответ на клиент со статус кодом, который будем получать из ошибки и сообщение, которое в эту ошибку пеместили
  } 
  return res.status(500).json({message: 'Непредвиденная ошибка'})  // Если возникла ошибка, которая не является классом (инстансом) ApiError, возвращает ошибку со статусом 500 и сообщением
} 