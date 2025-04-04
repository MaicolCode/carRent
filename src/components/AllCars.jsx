
import { ArrowRight, Arrows } from '../icons/MenuIcons'
import { lazy, memo, Suspense } from 'react'
import { useCar } from '../hooks/useCar'
const CardCarPresentation = lazy(() => import('./CardCar'))

// eslint-disable-next-line react/display-name
const AllCars = memo(({ cars }) => {
  const { navigateToCar } = useCar()

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <section className='w-full p-5 md:p-8 '>
        <section className='relative flex md:flex-row flex-col justify-between items-center gap-10 w-full'>
          <CardAgend title='Pick - Up' primary='#3563E9' secondary='#3563E9' />
          <button className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#3563E9] w-[55px] h-[55px] flex justify-center items-center rounded-lg hover:bg-opacity-90 transition-all duration-500 ease-in-out shadow-slate-400 shadow-[0_0_10px_2px]'>
            <Arrows />
          </button>
          <CardAgend title='Drop - Off' primary='#54A6FF' secondary='#54A6FF' />
        </section>
        {cars.length > 0 ? (
          <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10 place-items-center'>
            {cars.map((car) => {
              return (
                <CarPresetation
                  key={car.id}
                  car={car}
                  actionClick={navigateToCar}
                />
              )
            })}
          </section>
        ) : (
          <section className='flex justify-center items-center mt-20'>
            <h1>No hay coches disponibles...</h1>
          </section>
        )}
      </section>
    </Suspense>
  )
})

export default AllCars

const CarPresetation = memo(function CarPresetation({ car, actionClick }) {
  return <CardCarPresentation car={car} actionClick={actionClick} />
})

const CardAgend = memo(function CardAgend({ title, primary, secondary }) {
  return (
    <section className='bg-white w-full py-6 px-3 md:px-5 rounded-lg'>
      <div className='flex items-center gap-3'>
        <span
          className={`w-[15px] h-[15px] rounded-full bg-[${primary}] bg-opacity-40 flex justify-center items-center`}
        >
          <span
            className={`w-[7px] h-[7px] rounded-full bg-[${secondary}] `}
          ></span>
        </span>
        <h2 className='font-medium text-sm'>{title}</h2>
      </div>
      <section className='flex gap-1 md:gap-3 mt-4'>
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-sm'>Locations</h3>
          <button className='flex w-[95px] md:w-[100px] justify-between'>
            <span className='text-[10px] text-gray-400'>Select your city</span>
            <ArrowRight />
          </button>
        </div>
        <div className='flex flex-col gap-2 border-x border-gray-200 px-3'>
          <h3 className='font-bold text-sm'>Date</h3>
          <button className='flex w-[95px] md:w-[100px] justify-between'>
            <span className='text-[10px] text-gray-400'>Select your date</span>
            <ArrowRight />
          </button>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-sm'>Time</h3>
          <button className='flex w-[95px] md:w-[100px] justify-between'>
            <span className='text-[10px] text-gray-400'>Select your time</span>
            <ArrowRight />
          </button>
        </div>
      </section>
    </section>
  )
})
