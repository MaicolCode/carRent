import { createContext, useEffect, useState } from 'react'
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
      .then((data) => setCars(data))
  }, [])

  useEffect(() => {
    if (!car) {
      fetch('https://morent-website.vercel.app/api/cars')
        .then((res) => res.json())
        .then((data) => {
          const findCar = data.find((car) => car.id === parseInt(id))
          serCar(findCar)
        })
    }
  }, [location.pathname])

  const navigateToCar = (id) => {
    navigate(`cars/${id}`, {
      state: { car: cars.find((car) => car.id === id) }
    })
  }

  return (
    <CarContext.Provider value={{ cars, car, navigateToCar }}>
      {children}
    </CarContext.Provider>
  )
}
