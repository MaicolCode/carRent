import { useEffect, useState } from 'react'
import { Layer, PaintedLayer } from '../icons/CardCars'
import { CarInfo } from '../components/CarInfo'
import { CarInfoComments } from '../components/CarInfoComments'
import CardCarPresentation from '../components/CardCar'
import { useCar } from '../hooks/useCar'
import { Link } from 'react-router-dom'

export default function InformationCarPage() {
  const {car} = useCar()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [car]) // Add car as dependency to scroll to top when car changes

  const arr = Array.from({ length: 5 })

  const layers = arr.map((_, index) => {
    return index < 4 ? <PaintedLayer key={index} /> : <Layer key={index} />
  })

  if (!car) return <h1>La informacion del coche esta siendo cargada...</h1>

  return (
    <section className='w-full h-full p-8 flex flex-col gap-8'>
      <CarInfo car={car} layers={layers} />
      <CarInfoComments car={car} layers={layers} />

      <div>
      <div className='flex justify-between items-center gap-7 px-6 text-sm font-medium'>
          <span href='' className='text-slate-400'>
            Popular Car
          </span>
          <Link to={'/cars'} className='text-[#3563E9]'>
            View All
          </Link>
        </div>
        <PopularCars />
      </div>

      <div>
        <h2 className='text-sm text-slate-400 px-6 font-semibold'>Recomendation Car</h2>
        <RecomendationCar />
      </div>
    </section>
  )
}

function PopularCars() {
  const [cars, setCars] = useState([])
  
  const { navigateToCar } = useCar()

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
          return car.recommended ? (
            <CardCarPresentation
              key={car.id}
              car={car}
              actionClick={navigateToCar}
            />
          ) : null
        })}
    </div>
  )
}

function RecomendationCar() {
  const [cars, setCars] = useState([])
  
  const { navigateToCar } = useCar()

  useEffect(() => {
    fetch('https://morent-website.vercel.app/api/cars')
      .then((res) => res.json())
      .then((data) => setCars(data))
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-5 mt-7 mb-10 place-items-center'>
      {cars
        .slice(0, 3)
        .reverse()
        .map((car) => {
          return car.recommended ? (
            <CardCarPresentation
              key={car.id}
              car={car}
            actionClick={navigateToCar}
            />
          ) : null
        })}
    </div>
  )
}
