export default function HomePage() {
  return (
    <section>
      <section className='flex justify-between gap-7 py-8 px-8'>
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
      <section></section>
      <section></section>
    </section>
  )
}
