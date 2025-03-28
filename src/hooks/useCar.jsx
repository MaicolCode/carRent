import { useContext, useMemo } from 'react'
import { CarContext } from '../contexts/car'

export function useCar() {
  const { cars, car, navigateToCar } = useContext(CarContext)
  // Obtencion de las categorías y capacidades de los coches

  const categories = cars.map((car) => car.category)
  const capacity = cars.map((car) => car.capacity)

  const typeCars = useMemo(() => {
    return categories.filter(
      (item, index) => categories.indexOf(item) === index
    )
  }, [categories])

  const capacityCars = useMemo(() => {
    return capacity.filter((item, index) => capacity.indexOf(item) === index)
  }, [capacity])
  return { cars, car, navigateToCar, typeCars, capacityCars }
}
