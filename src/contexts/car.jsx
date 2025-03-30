import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const CarContext = createContext()

export function CarProvider({ children }) {
  const location = useLocation()
  const { id } = useParams()
  const [cars, setCars] = useState([])
  const [car, setCar] = useState(null)
  const navigate = useNavigate()

  // Fetch all cars
  useEffect(() => {
    fetch('https://morent-website.vercel.app/api/cars')
      .then((res) => res.json())
      .then((data) => {
        setCars(data)
      })
      .catch(error => console.error("Error fetching cars:", error))
  }, [])

  // Update car when id changes or location changes
  useEffect(() => {
    if (id && cars.length > 0) {
      const carId = parseInt(id)
      const foundCar = cars.find(c => c.id === carId)
      
      if (foundCar) {
        setCar(foundCar)
      } else {
        console.warn(`Car with id ${id} not found`)
      }
    } else if (location.state?.car) {
      setCar(location.state.car)
    }
  }, [id, cars, location.state])

  const navigateToCar = useCallback(
    (id) => {
      // Use absolute path with leading slash to prevent route concatenation
      const selectedCar = cars.find((c) => c.id === id)
      navigate(`/cars/${id}`, {
        state: { car: selectedCar }
      })
    },
    [navigate, cars]
  )

  const contextValue = useMemo(
    () => ({
      cars,
      car,
      navigateToCar
    }),
    [cars, car, navigateToCar]
  )

  return (
    <CarContext.Provider value={contextValue}>{children}</CarContext.Provider>
  )
}
