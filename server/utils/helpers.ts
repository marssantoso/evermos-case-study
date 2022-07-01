import { Filter, Product } from '~/utils/types'

export const getProductImage = (keyword: string, key: number) => {
  return `https://loremflickr.com/480/480/${keyword}?lock=${key}`
}

export const getUnique = (array: string[]) => {
  return array.filter((value, index, self) => self.indexOf(value) === index)
}

export const filterByKeyword = (products: Product[], keyword: string) => {
  return products.filter(({ name }) => name.toLowerCase().search(keyword.toString()) !== -1)
}

export const filterByPrice = (products: Product[], filter: Filter) => {
  return products.filter((product) => product.price >= filter.minPrice && product.price <= filter.maxPrice)
}

export const filterByField = (products: Product[], filter: Record<string, any>, field: string) => {
  return products.filter((product: Record<string, any>) => filter[field].includes(product[field]))
}

export const sortByAlpha = (array: string[]) => {
  return array.sort((a, b) => a.localeCompare(b))
}

export const sortByFloat = (products: Product[]) => {
  return products.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
}
