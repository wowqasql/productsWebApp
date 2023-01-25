import { $host } from "."

// Создание типа
export const createTypes = async (type) => {
  const {data} = await $host.post('api/type', type)
  return data
}

// Получение типа

export const fetchTypes = async () => {
  const {data} = await $host.get('api/type')
  return data
}

// Создание продукта
export const createProducts = async (product) => {
  const {data} = await $host.post('api/product', product)
  return data
}

// Получение продукта

export const fetchProducts = async (typeId) => {
  const {data} = await $host.get('api/product', {params:{
    typeId
  }})
  return data
}

export const fetchOneProducts = async (id) => {
  const {data} = await $host.get('api/product' + id)
  return data
}

export const findByIdAndDelete = async (id) => {
  const {data} = await $host.delete('api/product/' + id)
  return data
}
