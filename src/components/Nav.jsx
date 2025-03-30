import { Link } from 'react-router-dom'
import { FilterIcon, SearchIcon } from '../icons/MenuIcons'
import { memo, useState } from 'react'
import heartIcon from '/heart.png'
import notificationIcon from '/notification.png'
import settingsIcon from '/setting-2.png'
import profileIcon from '/Profil.png'

// eslint-disable-next-line react/display-name
const Nav = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='border h-auto md:h-[100px]'>
      <ul className='flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-6 py-4 md:py-0'>
        <li className='flex flex-col md:flex-row items-center gap-4 md:gap-20 w-full md:w-auto md:ml-6'>
          <div className='flex items-center justify-between w-full md:w-auto'>
            <Link to={'/'} className='font-bold text-2xl md:text-3xl text-[#3563E9]'>
              MORENT
            </Link>
            {/* Mobile menu toggle */}
            <button 
              className='md:hidden p-2' 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          <div className={`flex items-center font-light gap-4 text-gray-600 border border-gray-400 border-opacity-25 rounded-full px-4 py-2 w-full md:w-[400px] mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
            <button>
              <SearchIcon />
            </button>
            <input
              type='text'
              placeholder='Search something here'
              className='p-0 outline-none w-full'
            />
            <button>
              <FilterIcon />
            </button>
          </div>
        </li>
        <li className={`flex items-center gap-5 mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden md:flex'} w-full md:w-auto justify-center md:justify-start`}>
          <a href='#' className='rounded-full border p-2'>
            <img src={heartIcon} alt='like image' width={20} height={20} loading='lazy' />
          </a>
          <a href='#' className='rounded-full border p-2'>
            <img
              src={notificationIcon}
              alt='notification image'
              width={20}
              height={20}
              loading='lazy'
            />
          </a>
          <a href='#' className='rounded-full border p-2'>
            <img src={settingsIcon} alt='settings image' width={20} height={20} loading='lazy' />
          </a>
          <a href='#' className='rounded-full'>
            <img src={profileIcon} alt='profile image' width={40} height={40} loading='lazy' />
          </a>
        </li>
      </ul>
    </nav>
  )
})

export default Nav
