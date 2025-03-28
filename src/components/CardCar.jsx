import { GasStation, SteeringWheel, TwoUsers } from '../icons/CardCars'
import { Link } from 'react-router-dom'
import { Liked } from './Liked'
import { memo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// eslint-disable-next-line react/display-name
const CardCarPresentation = memo(({ car, actionClick }) => {
  const handleClick = () => {
    actionClick(car.id)
  }

  const handleLinkClick = (e) => {
    e.stopPropagation()
  }

  return (
    <section
      onClick={handleClick}
      key={car.id}
      className='w-[280px] h-[360px] p-5 rounded-lg bg-white cursor-pointer'
    >
      <div className='flex justify-between '>
        <div className='flex flex-col gap-1'>
          <h2 className='text-lg font-semibold'>{car.name}</h2>
          <span className='text-gray-400 font-semibold text-xs'>
            {car.category}
          </span>
        </div>
        <Liked />
      </div>

      <div className='relative flex justify-center items-center h-[190px]'>
        <div className='absolute bottom-0 w-[200px] h-[110px] bg-gradient-to-b from-transparent to-white'></div>
        <LazyLoadImage
          className='flex aspect-auto justify-center items-center'
          src={`https://morent-website.vercel.app${car.image}`}
          alt={car.name}
          height={200}
          width={200}
          loading='lazy'
        />
      </div>
      <section className='flex justify-between text-xs font-medium text-slate-400'>
        <div className='flex items-center gap-1'>
          <GasStation />
          <span>{car.gas}LT</span>
        </div>
        <div className='flex items-center gap-1'>
          <SteeringWheel />
          <span>{car.gear}</span>
        </div>
        <div className='flex items-center gap-2'>
          <TwoUsers />
          <span>{car.capacity}</span>
        </div>
      </section>
      <section className='flex justify-between items-center w-auto my-4'>
        <p>
          <strong className='text-lg'>${car.price}.00/</strong>
          <span className='ml-1 text-xs font-semibold text-slate-400'>day</span>
        </p>
        <Link
          onClick={handleLinkClick}
          to={`/rent-car`}
          state={{ car }}
          className='bg-[#3563E9] text-white text-sm  flex justify-center items-center rounded-[5px] w-[110px] h-[40px] hover:bg-opacity-90 transition-all'
        >
          Rent Now
        </Link>
      </section>
    </section>
  )
})

export default CardCarPresentation
