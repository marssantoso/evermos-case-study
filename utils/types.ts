export interface Product {
  slug: string
  name: string
  description: string
  price: number
  images: string[]
  rating: string
}

export interface Meta {
  count: number
  currentPage: number
  perPage: number
  totalPage: number
}

export interface RootState {
  isLoading: boolean
  isSidebarOpen: boolean
  products: Product[]
  product: Product | null
  meta?: Meta | null
}
