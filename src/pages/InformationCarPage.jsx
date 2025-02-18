import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function InformationCarPage() {
  const location = useLocation()
  const [car, setCar] = useState(location.state?.car || null)

  const { id } = useParams()

  useEffect(() => {
    if (!car) {
      fetch('https://morent-website.vercel.app/api/cars')
        .then((res) => res.json())
        .then((data) => {
          const findCar = data.find((car) => car.id === parseInt(id))
          setCar(findCar)
        })
    }
  }, [id])

  if (!car) return <h1>La informacion del coche esta siendo cargada...</h1>

  return <h1>Information car {car.name}</h1>
}
