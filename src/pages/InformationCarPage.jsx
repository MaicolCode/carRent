import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Layer, PaintedLayer } from '../icons/CardCars'
import { CarInfo } from '../components/CarInfo'
import { CarInfoComments } from '../components/CarInfoComments'
import CardCarPresentation from '../components/CardCar'

export default function InformationCarPage() {
  const location = useLocation()
  const [car, setCar] = useState(location.state?.car || null)

  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

  const arr = Array.from({ length: 5 })

  const layers = arr.map((_, index) => {
    return index <= car?.stars_count ? (
      <PaintedLayer key={index} />
    ) : (
      <Layer key={index} />
    )
  })

  if (!car) return <h1>La informacion del coche esta siendo cargada...</h1>

  return (
    <section className='w-full h-full p-8 flex flex-col gap-8'>
      <CarInfo car={car} layers={layers} />
      <CarInfoComments car={car} layers={layers} />

      <section>
        <div className='flex justify-between items-center px-6 text-sm font-medium'>
          <span href='' className='text-slate-400'>
            Recent Car
          </span>
          <Link to={'/cars'} className='text-[#3563E9]'>
            View All
          </Link>
        </div>
        <PopularCars />
        <div className='flex justify-between items-center gap-7 px-6 text-sm font-medium'>
          <span href='' className='text-slate-400'>
            Recomendation Car
          </span>
          <Link to={'/cars'} className='text-[#3563E9]'>
            View All
          </Link>
        </div>
        <RecomendationCar />
      </section>
    </section>
  )
}

function PopularCars() {
  const [cars, setCars] = useState([])
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`cars/${id}`, {
      state: { car: cars.find((car) => car.id === id) }
    })
  }

  useEffect(() => {
    fetch('https://morent-website.vercel.app/api/cars')
      .then((res) => res.json())
      .then((data) => setCars(data))
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-7 mb-10 place-items-center'>
      {cars
        .slice(-3)
        .reverse()
        .map((car) => {
          {
            return car.recommended ? (
              <CardCarPresentation
                key={car.id}
                car={car}
                actionClick={handleClick}
              />
            ) : null
          }
        })}
    </div>
  )
}

function RecomendationCar() {
  const [cars, setCars] = useState([])
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`cars/${id}`, {
      state: { car: cars.find((car) => car.id === id) }
    })
  }

  useEffect(() => {
    fetch('https://morent-website.vercel.app/api/cars')
      .then((res) => res.json())
      .then((data) => setCars(data))
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-7 mb-10 place-items-center'>
      {cars.slice(0, 3).map((car) => {
        return (
          <CardCarPresentation
            key={car.id}
            car={car}
            actionClick={handleClick}
          />
        )
      })}
    </div>
  )
}
