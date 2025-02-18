import { useLocation } from 'react-router-dom'

export default function RentCarPage() {
  const location = useLocation()
  const { car } = location.state || {}
  return <h1>Rent car {car.name}</h1>
}
