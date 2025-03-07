import { Link } from 'react-router-dom'
import { Liked } from './Liked'

export function CarInfo({ car, layers }) {
  return (
    <section className='flex gap-8 w-full'>
      <article>
        <div className=' relative w-[450px] h-[320px] rounded-lg px-[20px] py-5 bg-[#3563E9]'>
          <h2 className='text-[27px] text-white font-medium w-[90%]'>
            Sports car with the best design and acceleration
          </h2>
          <p className='text-sm w-3/5 text-white mt-4'>
            Safety and comfort while driving a futuristic and elegant sports car
          </p>
          <img
            src={`https://morent-website.vercel.app${car.image}`}
            alt=''
            width={350}
            className='absolute right-[50px] bottom-2'
          />
        </div>
        <div className='flex justify-between items-center gap-7 pt-5'>
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
        <div className='flex justify-between items-top'>
          <h1 className='text-3xl font-semibold'>{car.name}</h1>
          <Liked />
        </div>
        <div className='flex items-center gap-4 py-2'>
          <div className='flex items-center gap-1'>{layers}</div>
          <span className='text-sm text-slate-500'>{car.reviews}+ Reviews</span>
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
        <div className='flex justify-between items-center gap-4 pt-10 '>
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
          <Link
            to={`/rent-car`}
            state={{ car }}
            className='bg-[#3563E9] text-white text-sm font-medium  flex justify-center items-center rounded-[5px] w-[130px] h-[50px] hover:bg-opacity-90 transition-all'
          >
            Rent Now
          </Link>
        </div>
      </article>
    </section>
  )
}
