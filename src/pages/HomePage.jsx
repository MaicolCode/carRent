import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AgendHome } from '../components/AgendHome'
import { PopularCars } from '../components/PopularCars'
import { RecomendationCar } from '../components/RecomendationCar'

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className='bg-gray-100'>
      <section className='flex md:flex-row flex-col justify-between gap-7 pt-8 px-4 md:px-8'>
        <div className=' relative md:w-[640px] w-full h-[320px] rounded-lg px-[20px] py-5 bg-[#54A6FF]'>
          <h2 className='text-[27px] text-white font-medium md:w-3/6'>
            The Best Platform for Car Rental
          </h2>
          <p className='text-sm md:w-3/6 text-white mt-4'>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <Link
            to={'/cars'}
            className='bg-[#3563E9] text-white text-sm mt-4 flex justify-center items-center rounded-[5px] w-[110px] h-[40px] hover:bg-opacity-90 transition-all'
          >
            Rental Car
          </Link>
          <img
            src='/cars/car-010.svg'
            alt=''
            className='absolute w-[260px] md:w-[380px] md:right-[80px] right-[20px] bottom-2'
          />
        </div> 
        <div className=' relative md:w-[640px] w-full h-[320px] rounded-lg px-[20px] py-5 bg-[#3563E9]'>
          <h2 className='text-[27px] text-white font-medium md:w-3/6'>
            Easy way to rent a car at a low price
          </h2>
          <p className='text-sm md:w-3/6 text-white mt-4'>
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <Link
            to={'/cars'}
            className='bg-[#54A6FF] text-white text-sm mt-4 flex justify-center items-center rounded-[5px] w-[110px] h-[40px] hover:bg-opacity-90 transition-all'
          >
            Rental Car
          </Link>
          <img
            src='/cars/car-020.svg'
            alt=''
            className='absolute w-[260px] md:w-[380px] md:right-[90px] right-[20px] bottom-3'
          />
        </div>
      </section>
      <AgendHome />
      <section className='pb-10 px-8'>
        <div className='flex justify-between items-center gap-7 px-6 text-sm font-medium'>
          <span href='' className='text-slate-400'>
            Popular Car
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
        </div>
        <RecomendationCar />
      </section>
    </section>
  )
}
