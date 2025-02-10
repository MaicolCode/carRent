/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { ArrowRight, Arrows } from '../icons/MenuIcons'
import {
  GasStation,
  Like,
  LikePinted,
  SteeringWheel,
  TwoUsers
} from '../icons/CardCars'

export default function HomePage() {
  return (
    <section className='bg-gray-100'>
      <section className='flex justify-between gap-7 pt-8 px-8'>
        <div className=' relative w-[640px] h-[320px] rounded-lg px-[20px] py-5 bg-[#54A6FF]'>
          <h2 className='text-[27px] text-white font-medium w-[45%]'>
            The Best Platform for Car Rental
          </h2>
          <p className='text-sm w-3/6 text-white mt-4'>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <a
            href=''
            className='bg-[#3563E9] text-white text-sm mt-4 flex justify-center items-center rounded-[5px] w-[110px] h-[40px] hover:bg-opacity-90 transition-all'
          >
            Rental Car
          </a>
          <img
            src='/cars/car-010.svg'
            alt=''
            width={380}
            className='absolute right-[80px] bottom-2'
          />
        </div>
        <div className=' relative w-[640px] h-[320px] rounded-lg px-[20px] py-5 bg-[#3563E9]'>
          <h2 className='text-[27px] text-white font-medium w-3/6'>
            Easy way to rent a car at a low price
          </h2>
          <p className='text-sm w-3/6 text-white mt-4'>
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <a
            href=''
            className='bg-[#54A6FF] text-white text-sm mt-4 flex justify-center items-center rounded-[5px] w-[110px] h-[40px] hover:bg-opacity-90 transition-all'
          >
            Rental Car
          </a>
          <img
            src='/cars/car-020.svg'
            alt=''
            width={330}
            className='absolute right-[90px] bottom-3'
          />
        </div>
      </section>
      <section className='flex justify-between items-center gap-7 py-10 px-8'>
        <CardAgend title='Pick - Up' primary='#3563E9' secondary='#3563E9' />
        <button className='bg-[#3563E9] w-[60px] h-[60px] flex justify-center items-center rounded-[5px] hover:bg-opacity-90 transition-all duration-500 ease-in-out'>
          <Arrows />
        </button>
        <CardAgend title='Drop - Off' primary='#54A6FF' secondary='#54A6FF' />
      </section>
      <section className='pb-10 px-8'>
        <div className='flex justify-between items-center gap-7 px-6 text-sm font-medium'>
          <a href='' className='text-gray-400'>
            Popular Cars
          </a>
          <a href='' className='text-[#3563E9]'>
            View All
          </a>
        </div>
        <PopularCars />
      </section>
    </section>
  )
}

function CardAgend({ title, primary, secondary }) {
  return (
    <section className='bg-white w-[45%] py-6 px-10 rounded-lg'>
      <div className='flex items-center gap-3'>
        <span
          className={`w-[15px] h-[15px] rounded-full bg-[${primary}] bg-opacity-40 flex justify-center items-center animate-pulse`}
        >
          <span
            className={`w-[7px] h-[7px] rounded-full bg-[${secondary}] `}
          ></span>
        </span>
        <h2 className='font-medium text-sm'>{title}</h2>
      </div>
      <section className='flex gap-3 mt-4'>
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-sm'>Locations</h3>
          <button className='flex w-[120px] justify-between'>
            <span className='text-xs text-gray-400'>Select your city</span>
            <ArrowRight />
          </button>
        </div>
        <div className='flex flex-col gap-2 border-x border-gray-200 px-5'>
          <h3 className='font-bold text-sm'>Date</h3>
          <button className='flex w-[120px] justify-between'>
            <span className='text-xs text-gray-400'>Select your date</span>
            <ArrowRight />
          </button>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-sm'>Time</h3>
          <button className='flex w-[120px] justify-between'>
            <span className='text-xs text-gray-400'>Select your time</span>
            <ArrowRight />
          </button>
        </div>
      </section>
    </section>
  )
}

function PopularCars() {
  const [cars, setCars] = useState([])
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then((res) => res.json())
      .then((data) => setCars(data))
  }, [])

  const handleLike = (e) => {
    e.preventDefault()
    console.log(e.target)
    setLiked(!liked)
  }

  console.log(cars)

  return (
    <div className='grid grid-cols-4 gap-10 mt-7'>
      {cars.map((car) => {
        return (
          <section
            key={car._id}
            className='w-[280px] h-[360px] p-5 rounded-lg bg-white'
          >
            <div className='flex justify-between '>
              <div className='flex flex-col gap-1'>
                <h2 className='text-lg font-semibold'>{car.brand}</h2>
                <span className='text-gray-400 font-semibold text-xs'>
                  {car.type}
                </span>
              </div>
              <span onClick={handleLike} className='mt-2'>
                {liked ? <Like /> : <LikePinted />}
              </span>
            </div>

            <div className='relative flex justify-center items-center h-[190px]'>
              <div className='absolute bottom-0 w-[200px] h-[110px] bg-gradient-to-b from-transparent to-white'></div>
              <img
                className='flex justify-center items-center'
                src={`http://localhost:3000${car.exteriorImage}`}
                alt={car.brand}
                width={200}
              />
            </div>
            <section className='flex justify-between text-xs font-medium text-slate-400'>
              <div className='flex items-center gap-1'>
                <GasStation />
                <span>{car.gasoline}LT</span>
              </div>
              <div className='flex items-center gap-1'>
                <SteeringWheel />
                <span>{car.steering}</span>
              </div>
              <div className='flex items-center gap-2'>
                <TwoUsers />
                <span>{car.capacity} People</span>
              </div>
            </section>
            <section className='flex justify-between items-center w-auto my-4'>
              <p>
                <strong className='text-lg'>${car.pricePerDay}.00/</strong>
                <span className='ml-1 text-xs font-semibold text-slate-400'>
                  day
                </span>
              </p>
              <a
                href=''
                className='bg-[#3563E9] text-white text-sm  flex justify-center items-center rounded-[5px] w-[110px] h-[40px] hover:bg-opacity-90 transition-all'
              >
                Rent Now
              </a>
            </section>
          </section>
        )
      })}
    </div>
  )
}
