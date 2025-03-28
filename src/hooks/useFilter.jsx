import { useContext } from 'react'
import { FilterContext } from '../contexts/filter'

export function useFilter() {
  const {
    filterCategory,
    setFilterCategory,
    filterCapacity,
    setFilterCapacity,
    filterPrice,
    setFilterPrice
  } = useContext(FilterContext)

  return {
    filterCategory,
    setFilterCategory,
    filterCapacity,
    setFilterCapacity,
    filterPrice,
    setFilterPrice
  }
}
