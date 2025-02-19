import { useEffect, useState } from 'react'
import CardCarPresentation from '../components/CardCar'
import { ArrowRight, Arrows } from '../icons/MenuIcons'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'

export default function AllCarsPage() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch('https://morent-website.vercel.app/api/cars')
      .then((res) => res.json())
      .then((data) => setCars(data))
  }, [])

  const categories = cars.map((car) => car.category)
  const capacity = cars.map((car) => car.capacity)

  const typeCars = categories.filter(
    (item, index) => categories.indexOf(item) === index
  )
  const capacityCars = capacity.filter(
    (item, index) => capacity.indexOf(item) === index
  )

  return (
    <section className='bg-gray-100 flex'>
      <section className='bg-white w-[25%] px-5 py-7 flex flex-col gap-10'>
        <div className='flex flex-col gap-5'>
          <span className='text-[10px] tracking-[2px] text-slate-400 font-medium'>
            TYPE
          </span>
          {typeCars.map((typeCar) => {
            return (
              <div key={typeCar} className='flex gap-2'>
                {' '}
                <ModifiedCheckBox />
                <label
                  className='text-slate-600 font-semibold
                 text-lg'
                >
                  {typeCar}
                </label>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col gap-5'>
          <span className='text-[10px] tracking-[2px] text-slate-400 font-medium'>
            CAPACITY
          </span>
          {capacityCars.map((capacityCar) => {
            return (
              <div key={capacityCar} className='flex gap-2'>
                {' '}
                <ModifiedCheckBox />
                <label
                  className='text-slate-600 font-semibold
                 text-lg'
                >
                  {capacityCar}
                </label>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col gap-5'>
          <span className='text-[10px] tracking-[2px] text-slate-400 font-medium'>
            PRICE
          </span>
          <div className='flex flex-col gap-2'>
            <input type='range' name='' id='' />
            <label
              className='text-slate-600 font-semibold
             text-lg'
            >
              Max. $100.00
            </label>
          </div>
        </div>
      </section>
      <Routes>
        <Route index element={<AllCars cars={cars} />} />
      </Routes>
      <Outlet />
    </section>
  )
}

function AllCars({ cars }) {
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`${id}`, {
      state: { car: cars.find((car) => car.id === id) }
    })
  }
  return (
    <section className='w-[75%] p-8'>
      <section className='relative flex justify-between items-center gap-10 w-full'>
        <CardAgend title='Pick - Up' primary='#3563E9' secondary='#3563E9' />
        <button className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#3563E9] w-[55px] h-[55px] flex justify-center items-center rounded-lg hover:bg-opacity-90 transition-all duration-500 ease-in-out shadow-slate-400 shadow-[0_0_10px_2px]'>
          <Arrows />
        </button>
        <CardAgend title='Drop - Off' primary='#54A6FF' secondary='#54A6FF' />
      </section>
      <section className='grid grid-cols-3 gap-6 mt-10 mb-10'>
        {cars.map((car) => {
          return (
            <CardCarPresentation
              key={car.id}
              car={car}
              actionClick={handleClick}
            />
          )
        })}
      </section>
    </section>
  )
}

function CardAgend({ title, primary, secondary }) {
  return (
    <section className='bg-white w-full py-6 px-5 rounded-lg'>
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
          <button className='flex w-[100px] justify-between p-0'>
            <span className='text-[10px] text-gray-400'>Select your city</span>
            <ArrowRight />
          </button>
        </div>
        <div className='flex flex-col gap-2 border-x border-gray-200 px-5'>
          <h3 className='font-bold text-sm'>Date</h3>
          <button className='flex w-[100px] justify-between'>
            <span className='text-[10px] text-gray-400'>Select your date</span>
            <ArrowRight />
          </button>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-sm'>Time</h3>
          <button className='flex w-[100px] justify-between'>
            <span className='text-[10px] text-gray-400'>Select your time</span>
            <ArrowRight />
          </button>
        </div>
      </section>
    </section>
  )
}

function ModifiedCheckBox() {
  return (
    <label className='relative flex cursor-pointer items-center'>
      <input
        type='checkbox'
        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-400 transition-all checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
      />
      <div className='pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-3.5 w-3.5'
          viewBox='0 0 20 20'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='1'
        >
          <path
            fillRule='evenodd'
            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
            clipRule='evenodd'
          ></path>
        </svg>
      </div>
    </label>
  )
}

/* ;<Route path='/rent-car' element={<RentCarPage />} /> */
