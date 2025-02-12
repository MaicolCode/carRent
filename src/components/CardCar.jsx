import { useState } from 'react'
import {
  GasStation,
  Like,
  LikePinted,
  SteeringWheel,
  TwoUsers
} from '../icons/CardCars'

export default function CardCarPresentation({ car }) {
  const [liked, setLiked] = useState(true)
  const handleLike = () => {
    setLiked(!liked)
  }
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
        <span
          onClick={handleLike}
          className='flex justify-center items-center h-[20px] w-[20px]'
        >
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
          <span className='ml-1 text-xs font-semibold text-slate-400'>day</span>
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
}
