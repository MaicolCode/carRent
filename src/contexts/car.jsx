import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const CarContext = createContext()

export function CarProvider({ children }) {
  const location = useLocation()
  const { id } = useParams()
  const [cars, setCars] = useState([])
  const [car, serCar] = useState(location.state?.car || null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://morent-website.vercel.app/api/cars')
      .then((res) => res.json())
      .then((data) => {
        setCars(data)
        if (!car) {
          const findCar = data.find((car) => car.id === parseInt(id))
          serCar(findCar)
        }
      })
  }, [id, car])

  const navigateToCar = useCallback(
    (id) => {
      navigate(`cars/${id}`, {
        state: { car: cars.find((car) => car.id === id) }
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
