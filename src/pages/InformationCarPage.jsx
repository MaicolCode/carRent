import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Layer, PaintedLayer } from '../icons/CardCars'

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

  const arr = Array.from({ length: 5 })

  const layers = arr.map((_, index) => {
    return index <= car.stars_count ? (
      <PaintedLayer key={index} />
    ) : (
      <Layer key={index} />
    )
  })

  console.log(layers)

  if (!car) return <h1>La informacion del coche esta siendo cargada...</h1>

  return (
    <section className='w-full h-full p-8'>
      <section className='flex gap-8 w-full'>
        <article>
          <div className=' relative w-[450px] h-[320px] rounded-lg px-[20px] py-5 bg-[#3563E9]'>
            <h2 className='text-[27px] text-white font-medium w-[90%]'>
              Sports car with the best design and acceleration
            </h2>
            <p className='text-sm w-3/5 text-white mt-4'>
              Safety and comfort while driving a futuristic and elegant sports
              car
            </p>
            <img
              src={`https://morent-website.vercel.app${car.image}`}
              alt=''
              width={350}
              className='absolute right-[50px] bottom-2'
            />
          </div>
          <div className='flex justify-between items-center gap-7 py-5'>
            <div className='w-[130px] h-[110px] rounded-lg bg-[#3563E9] flex justify-center items-center'>
              <img
                src={`https://morent-website.vercel.app/${car.image}`}
                width={120}
                alt={car.name}
              />
            </div>
            <div className='w-[130px] h-[110px] rounded-lg'>
              <img
                src={`https://morent-website.vercel.app/${car.detailImage2}`}
                className='w-full h-full object-cover rounded-lg'
                alt={car.name}
              />
            </div>
            <div className='w-[130px] h-[110px] rounded-lg'>
              <img
                src={`https://morent-website.vercel.app/${car.detailImage3}`}
                className='w-full h-full object-cover rounded-lg'
                alt={car.name}
              />
            </div>
          </div>
        </article>
        <article className='w-full h-auto bg-white rounded-lg p-6'>
          <h1 className='text-3xl font-semibold'>{car.name}</h1>
          <div className='flex items-center gap-4 py-2'>
            <div className='flex items-center gap-1'>{layers}</div>
            <span className='text-sm text-slate-500'>
              {car.reviews}+ Reviews
            </span>
          </div>
          <p className='text-lg text-slate-500 leading-9 py-5'>
            {car.description}
          </p>
          <div className='grid grid-cols-2 gap-3 text-slate-500 text-lg'>
            <div className='flex justify-between'>
              <span className='font-light text-slate-400'>Type Car</span>
              <span className='font-semibold'>{car.category}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-light text-slate-400'>Capacity</span>
              <span className='font-semibold'>{car.capacity}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-light text-slate-400'>Steering</span>
              <span className='font-semibold'>{car.gear}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-light text-slate-400'>Gasoline</span>
              <span className='font-semibold'>{car.gas}</span>
            </div>
          </div>
          <div className='flex justify-between items-center gap-4 py-10 max-h-fit '>
            <div className='flex flex-col gap-1 text-slate-500'>
              <span className='text-sm font-semibold'>
                <strong className='text-3xl text-slate-800'>
                  ${car.price}.00 /
                </strong>{' '}
                days{' '}
              </span>
              {car.discount ? (
                <span className='line-through'>${car.discount}.00</span>
              ) : null}
            </div>
            <button className='bg-[#3563E9] text-white text-sm font-medium  flex justify-center items-center rounded-[5px] w-[130px] h-[50px] hover:bg-opacity-90 transition-all'>
              Rent Now
            </button>
          </div>
        </article>
      </section>
      <section></section>
      <section></section>
    </section>
  )
}
