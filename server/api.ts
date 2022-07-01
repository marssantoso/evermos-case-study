import express, { json, urlencoded } from 'express'
import NodeCache from 'node-cache'
import { faker } from '@faker-js/faker'

import { getProductImage, getUnique, filterByKeyword, sortByAlpha, filterByField, filterByPrice, sortByFloat } from './utils/helpers'
import { Filter, Product } from '~/utils/types'
const province = require('./json/province.json')

const app = express()
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 })
const CACHE_KEY = 'keyword'

app.use(json())
app.use(urlencoded({ extended: true }))

const getProducts = (): Product[] => {
  let products = cache.get(CACHE_KEY) as Product[]
  if (products?.length) return products

  const length = Math.floor(Math.random() * 499) + 20
  products = Array.from({ length }).map((_, index) => {
    const category = faker.commerce.department()
    const name = faker.commerce.productName()
    const description = faker.commerce.productDescription()
    const slug: string = `${name.split(' ').join('-').toLowerCase()}-${index + 1}`
    const price = parseInt(faker.commerce.price(1000, 1000000, 0))
    const rating = (Math.random() * 5).toFixed(2)
    const sold = faker.mersenne.rand(200, 0)
    const stock = faker.mersenne.rand(300, 0)
    const location = province[Math.floor(Math.random() * province.length)]
    const images = slug
      .split('-')
      .slice(0, slug.split('-').length - 1)
      .reverse()
      .slice(0, Math.floor(Math.random() * slug.split('-').length))
      .map((keyword) => getProductImage(keyword, index + 1))

    return {
      name,
      slug,
      description,
      price,
      images,
      rating,
      sold,
      stock,
      category,
      location,
    }
  })

  cache.set(CACHE_KEY, products)
  products.forEach((product) => cache.set(product.slug, product))
  return products
}

app.get('/products', (req, res) => {
  let { keyword = '', page = 1, limit = 50 } = req.query
  const { sort, category = '', location = '', minPrice, maxPrice } = req.query
  keyword = (keyword as string).toLowerCase()
  page = parseInt(page as string)
  limit = parseInt(limit as string)

  let products = getProducts()
  const filter: Filter = {
    category: category ? (category as string).split(',') : [],
    location: location ? (location as string).split(',') : [],
    minPrice: minPrice ? parseInt(minPrice as string) : 0,
    maxPrice: maxPrice ? parseInt(maxPrice as string) : Math.max(...products.map((product) => product.price)),
  }

  // search by keyword
  if (keyword) {
    products = filterByKeyword(products, keyword as string)
  }

  // filters
  if (filter.category?.length) {
    products = filterByField(products, filter, 'category')
  }
  if (filter.location?.length) {
    products = filterByField(products, filter, 'location')
  }
  if (filter.minPrice || filter.maxPrice) {
    products = filterByPrice(products, filter)
  }

  // sort
  if (sort && sort === 'rating') {
    products = sortByFloat(products)
  } else if (sort && sort === 'price') {
    products = products.sort((a, b) => b.price - a.price)
  } else if (sort && sort === '-price') {
    products = products.sort((a, b) => a.price - b.price)
  }

  const start = page - 1
  const offset = start * limit
  const data = products.slice(offset, limit * page)
  const meta = {
    count: products.length,
    currentPage: page,
    perPage: limit,
    totalPage: Math.ceil(products.length / limit),
  }

  return res.status(200).json({ status: 'success', data, meta })
})

app.get('/products/:slug', (req, res) => {
  const data = cache.get(req.params.slug)
  if (!req.params.slug || !data) return res.status(404).json({ status: 'error', message: 'Not found' })
  return res.status(200).json({ status: 'success', data })
})

app.get('/facets', (req, res) => {
  const { keyword = '' } = req.query
  let products = getProducts()

  if (keyword) {
    products = filterByKeyword(products, keyword as string)
  }

  const category = sortByAlpha(getUnique(products.map((product) => product.category)))
  const productPrice = products.map((product) => product.price)
  const price = { min: Math.min(...productPrice), max: Math.max(...productPrice) }
  const rating = { min: 0, max: 4 }
  const location = sortByAlpha(getUnique(products.map((product) => product.location)))

  const data = { category, price, rating, location }
  return res.status(200).json({ status: 'success', data })
})

app.get('/keywords', (_, res) => {
  const keywords = getUnique(sortByFloat(getProducts()).map(({ name }) => name.split(' ').pop()?.toLowerCase() ?? '')).slice(0, 5)
  return res.status(200).json({ status: 'success', data: keywords })
})

app.get('/', (_req, res) => res.status(404).json({ status: 'error', message: 'Not Found' }))

export default app
