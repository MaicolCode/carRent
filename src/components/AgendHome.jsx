import { ArrowRight, Arrows } from '../icons/MenuIcons'

export function AgendHome() {
  return (
    <section className='flex justify-between items-center gap-7 py-10 px-8'>
      <CardAgend title='Pick - Up' primary='#3563E9' secondary='#3563E9' />
      <button className='bg-[#3563E9] w-[60px] h-[60px] flex justify-center items-center rounded-[5px] hover:bg-opacity-90 transition-all duration-500 ease-in-out'>
        <Arrows />
      </button>
      <CardAgend title='Drop - Off' primary='#54A6FF' secondary='#54A6FF' />
    </section>
  )
}

function CardAgend({ title, primary, secondary }) {
  return (
    <section className='bg-white w-auto py-6 px-10 rounded-lg'>
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
          <button className='flex w-[110px] justify-between p-0'>
            <span className='text-xs text-gray-400'>Select your city</span>
            <ArrowRight />
          </button>
        </div>
        <div className='flex flex-col gap-2 border-x border-gray-200 px-5'>
          <h3 className='font-bold text-sm'>Date</h3>
          <button className='flex w-[110px] justify-between'>
            <span className='text-xs text-gray-400'>Select your date</span>
            <ArrowRight />
          </button>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='font-bold text-sm'>Time</h3>
          <button className='flex w-[110px] justify-between'>
            <span className='text-xs text-gray-400'>Select your time</span>
            <ArrowRight />
          </button>
        </div>
      </section>
    </section>
  )
}
