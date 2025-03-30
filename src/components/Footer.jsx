import { memo } from 'react'

// eslint-disable-next-line react/display-name
const Footer = memo(() => {
  return (
    <footer className='p-4 md:p-16'>
      <section className='flex flex-col md:flex-row justify-between py-8 md:py-14 gap-8 md:gap-0'>
        <div className='text-center md:text-left'>
          <a href='/' className='font-bold text-2xl md:text-3xl text-[#3563E9]'>
            MORENT
          </a>
          <p className='text-gray-500 w-full md:w-3/5 mt-3 md:mt-5 text-sm md:text-base'>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-20'>
          <div className='text-center md:text-left'>
            <h3 className='font-semibold text-lg md:text-xl'>About</h3>
            <ul className='mt-4 md:mt-10 flex flex-col gap-4 md:gap-7 text-gray-500'>
              <li>
                <a href=''>How it works</a>
              </li>
              <li>
                <a href=''>Featured</a>
              </li>
              <li>
                <a href=''>Partnership</a>
              </li>
              <li>
                <a href=''>Bussiness Relation</a>
              </li>
            </ul>
          </div>
          <div className='text-center md:text-left'>
            <h3 className='font-semibold text-lg md:text-xl'>Community</h3>
            <ul className='mt-4 md:mt-10 flex flex-col gap-4 md:gap-7 text-gray-500'>
              <li>
                <a href=''>Events</a>
              </li>
              <li>
                <a href=''>Blog</a>
              </li>
              <li>
                <a href=''>Podcast</a>
              </li>
              <li>
                <a href=''>Invite a friend</a>
              </li>
            </ul>
          </div>
          <div className='text-center md:text-left'>
            <h3 className='font-semibold text-lg md:text-xl'>Socials</h3>
            <ul className='mt-4 md:mt-10 flex flex-col gap-4 md:gap-7 text-gray-500'>
              <li>
                <a href=''>Discord</a>
              </li>
              <li>
                <a href=''>Instagram</a>
              </li>
              <li>
                <a href=''>Twitter</a>
              </li>
              <li>
                <a href=''>Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr />
      <section className='flex flex-col md:flex-row justify-between py-6 md:py-14 text-xs md:text-sm font-semibold gap-4 md:gap-0'>
        <p className='text-center md:text-left'>&copy; 2022 MORENT. All rights reserved.</p>
        <div className='flex flex-col md:flex-row gap-4 md:gap-20 items-center'>
          <a href='#privacy'>Privacy & Policy</a>
          <a href='#terms'>Terms & Condition</a>
        </div>
      </section>
    </footer>
  )
})

export default Footer
