export default function Footer() {
  return (
    <footer className='p-16'>
      <section className='flex justify-between py-14'>
        <div>
          <a href='/' className='font-bold text-3xl text-[#3563E9]'>
            MORENT
          </a>
          <p className='text-gray-500 w-3/5 mt-5'>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className='flex gap-20'>
          <div>
            <h3 className='font-semibold text-xl'>About</h3>
            <ul className='mt-10 flex flex-col gap-7 text-gray-500'>
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
          <div>
            <h3 className='font-semibold text-xl'>Community</h3>
            <ul className='mt-10 flex flex-col gap-7 text-gray-500'>
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
          <div>
            <h3 className='font-semibold text-xl'>Socials</h3>
            <ul className='mt-10 flex flex-col gap-7 text-gray-500'>
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
      <section className='flex justify-between py-14 text-sm font-semibold'>
        <p>&copy; 2022 MORENT. All rights reserved.</p>
        <div className='flex gap-20'>
          <a href='#privacy'>Privacy & Policy</a>
          <a href='#terms'>Terms & Condition</a>
        </div>
      </section>
    </footer>
  )
}
