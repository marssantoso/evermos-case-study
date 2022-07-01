export interface Product {
  slug: string
  name: string
  description: string
  price: number
  images: string[]
  rating: string
  category: string
  location: string
}

export interface Meta {
  count: number
  currentPage: number
  perPage: number
  totalPage: number
}

export interface MinMax {
  min: number
  max: number
}

export interface Facets {
  category: string[]
  location: string[]
  rating: MinMax
  price: MinMax
}

export interface RootState {
  isLoading: boolean
  isSidebarOpen: boolean
  products: Product[]
  product?: Product | null
  meta?: Meta | null
  facets?: Facets | null
  keywords: string[]
  currentKeywordIndex: number
}

export interface Option {
  name: string
  value: any
}

export interface Filter {
  category: string[]
  location: string[]
  minPrice: number
  maxPrice: number
}
