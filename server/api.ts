import express, { json, urlencoded } from 'express'
import NodeCache from 'node-cache'
import { faker } from '@faker-js/faker'

import { Product } from '~/utils/types'

const app = express()
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 })
const CACHE_KEY = 'keyword'

app.use(json())
app.use(urlencoded({ extended: true }))

const generateProducts = (length: number): Product[] => {
  return Array.from({ length }).map(() => {
    const name = faker.commerce.productName()
    const description = faker.commerce.productDescription()
    const slug = name.split(' ').join('-').toLowerCase()
    const price = parseInt(faker.commerce.price(1000, 1000000, 0))
    const images = slug
      .split('-')
      .slice(0, Math.floor(Math.random() * slug.split('-').length))
      .map((keyword) => `https://loremflickr.com/640/480/${keyword}`)
    const rating = (Math.random() * 5).toFixed(2)
    return { name, slug, description, price, images, rating }
  })
}

app.get('/products', (req, res) => {
  let { keyword = '', page = 1, limit = 50 } = req.query
  keyword = (keyword as string).toLowerCase()
  page = parseInt(page as string)
  limit = parseInt(limit as string)

  const count = Math.floor(Math.random() * 499) + 20
  let products = cache.get(CACHE_KEY) as Product[]
  if (!products?.length) {
    products = generateProducts(count)
    cache.set(CACHE_KEY, products)
    products.forEach((product) => cache.set(product.slug, product))
  }

  if (keyword)
    products = products.filter(
      ({ name }) => name.toLowerCase().search(keyword.toString()) !== -1
    )

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
  if (!req.params.slug || !data)
    return res.status(404).json({ status: 'error', message: 'Not found' })
  return res.status(200).json({ status: 'success', data })
})

app.get('/', (_req, res) =>
  res.status(404).json({ status: 'error', message: 'Not Found' })
)

export default app
