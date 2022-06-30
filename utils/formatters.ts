export const formatCurrency = (value: string | number = 0, currency = '', separator = ',') => {
  return currency + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}
