import { Link } from 'react-router-dom'
import { Liked } from './Liked'

export function CarInfo({ car, layers }) {
  // Ensure consistent URL formatting for all car images
  const getImageUrl = (imagePath) => {
    // Remove any leading slash to avoid double slashes
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    return `https://morent-website.vercel.app/${cleanPath}`;
  };

  return (
    <section className='flex flex-col md:flex-row gap-8 w-full px-0 md:px-6'>
      <article className='w-full md:w-auto'>
        <div className='relative w-full md:w-[450px] h-[250px] md:h-[320px] rounded-lg px-4 md:px-[20px] py-5 bg-[#3563E9]'>
          <h2 className='text-xl md:text-[27px] text-white font-medium w-full md:w-[90%]'>
            Sports car with the best design and acceleration
          </h2>
          <p className='text-xs md:text-sm w-full md:w-3/5 text-white mt-2 md:mt-4'>
            Safety and comfort while driving a futuristic and elegant sports car
          </p>
          <img
            src={getImageUrl(car.image)}
            alt={car.name}
            className='absolute right-0 md:right-[50px] bottom-2 w-[200px] md:w-[350px] object-contain'
          />
        </div>
        <div className='flex justify-between items-center gap-2 md:gap-7 pt-3 md:pt-5'>
          <div className='w-[90px] md:w-[130px] h-[80px] md:h-[110px] rounded-lg bg-[#3563E9] flex justify-center items-center'>
            <img
              src={getImageUrl(car.image)}
              className='w-[80px] md:w-[120px] object-contain'
              alt={car.name}
              loading='lazy'
            />
          </div>
          <div className='w-[90px] md:w-[130px] h-[80px] md:h-[110px] rounded-lg'>
            <img
              src={getImageUrl(car.detailImage2)}
              className='w-full h-full object-cover rounded-lg'
              alt={car.name}
              loading='lazy'  
            />
          </div>
          <div className='w-[90px] md:w-[130px] h-[80px] md:h-[110px] rounded-lg'>
            <img
              src={getImageUrl(car.detailImage3)}
              className='w-full h-full object-cover rounded-lg'
              alt={car.name}
              loading='lazy'
            />  
          </div>
        </div>
      </article>
      <article className='w-full h-auto bg-white rounded-lg p-4 md:p-6 mt-4 md:mt-0'>
        <div className='flex justify-between items-top'>
          <h1 className='text-xl md:text-3xl font-semibold'>{car.name}</h1>
          <Liked />
        </div>
        <div className='flex items-center gap-4 py-2'>
          <div className='flex items-center gap-1'>{layers}</div>
          <span className='text-xs md:text-sm text-slate-500'>{car.reviews}+ Reviews</span>
        </div>
        <p className='text-sm md:text-lg text-slate-500 leading-6 md:leading-9 py-3 md:py-5'>
          {car.description}
        </p>
        <div className='grid grid-cols-2 gap-3 text-slate-500 text-sm md:text-lg'>
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
        <div className='flex flex-col sm:flex-row justify-between md:items-center gap-4 pt-6 md:pt-10'>
          <div className='flex flex-col gap-1 text-slate-500'>
            <span className='text-sm font-semibold'>
              <strong className='text-xl md:text-3xl text-slate-800'>
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
            className='bg-[#3563E9] text-white text-sm font-medium flex justify-center items-center rounded-[5px] w-full sm:w-[130px] h-[50px] hover:bg-opacity-90 transition-all'
          >
            Rent Now
          </Link>
        </div>
      </article>
    </section>
  )
}
