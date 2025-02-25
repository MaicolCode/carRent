import { ArrowRight } from '../icons/MenuIcons'

export function CarInfoComments({ car, layers }) {
  return (
    <section className='text-slate-500 flex flex-col gap-5 bg-white p-8 rounded-lg'>
      <article className='flex gap-3'>
        <h3 className='text-lg font-semibold text-black'>Reviews</h3>
        <span className='px-2 py-1 w-[40px] bg-[#3563E9] text-xs rounded-md font-semibold text-white flex justify-center items-center'>
          {car.reviews_describe.length}
        </span>
      </article>
      {car.reviews_describe.map((review, index) => (
        <article key={index}>
          <div className='flex gap-4'>
            <img
              src={`https://morent-website.vercel.app${review.profile_image}`}
              alt={review.username}
              className='w-[50px] h-[50px] rounded-full'
            />
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <aside className='flex flex-col gap-1'>
                  <strong className='text-black'>{review.username}</strong>
                  <span className='text-xs'>{review.position}</span>
                </aside>
                <aside className='flex flex-col gap-1'>
                  <span className='text-end text-xs'>{review.created_at}</span>
                  <div className='flex gap-2'>{layers}</div>
                </aside>
              </div>
              <p className='text-xs leading-6'>{review.comment}</p>
            </div>
          </div>
        </article>
      ))}
      <div className='w-full flex justify-center my-3'>
        <button className='flex gap-2 justify-center items-center  text-slate-400'>
          <span className='text-sm font-medium'>Show All</span> <ArrowRight />
        </button>
      </div>
    </section>
  )
}
