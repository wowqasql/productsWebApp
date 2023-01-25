const sequelize = require('../db')
const {DataTypes} = require('sequelize') // С помощью DataTypes описывается типизация полей в б/д

//Описываем модель пользователя

// 'user' - название модели(таблицы)
// Вторым параметром передаем объект, в котором описываем поля, которые будут у модели(таблицы)
// primaryKey - первичный ключ
// autoIncrement - id будет автоинкрементироваться, т.е. увеличиваться на единцу при добавлении нового пользователя
// unique - уникальность поля (два пользователя не могут быть с одним email, но могут иметь одинаковое имя)

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Product = sequelize.define('product', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  desc: {type: DataTypes.STRING, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  
})


Type.hasMany(Product)
Product.belongsTo(Type)

module.exports = {
  User,
  Product,
  Type
}