import { useContext } from 'react'
import { FilterContext } from '../contexts/filter'

export function useFilter(cars) {
  const {
    filterCategory,
    setFilterCategory,
    filterCapacity,
    setFilterCapacity,
    filterPrice,
    setFilterPrice
  } = useContext(FilterContext)

  // Filtro de los coches por categoría y capacidad

  const filterCars = cars.filter((car) => {
    return (
      filterPrice >= car.price &&
      (filterCategory.length === 0 || filterCategory.includes(car.category))
    )
  })

  const filterCarsCapacity = filterCars.filter((car) => {
    return filterCapacity.includes(car.capacity)
  })

  return {
    filterCars,
    filterCarsCapacity,
    filterCategory,
    setFilterCategory,
    filterCapacity,
    setFilterCapacity,
    filterPrice,
    setFilterPrice
  }
}
