import { Link } from 'react-router-dom'
import { FilterIcon, SearchIcon } from '../icons/MenuIcons'

export default function Nav() {
  return (
    <nav className='border h-[100px]'>
      <ul className='flex items-center justify-between h-full px-6'>
        <li className='flex items-center gap-20 ml-6'>
          <Link to={'/'} className='font-bold text-3xl text-[#3563E9]'>
            MORENT
          </Link>
          <div className='flex items-center font-light gap-4 text-gray-600 border border-gray-400 border-opacity-25 rounded-full px-4 py-2 w-[400px]'>
            <button>
              <SearchIcon />
            </button>
            <input
              type='text'
              placeholder='Search someting here'
              className='p-0 outline-none w-full'
            />
            <button>
              <FilterIcon />
            </button>
          </div>
        </li>
        <li className='flex items-center gap-5'>
          <a href='' className='rounded-full border p-2'>
            <img src='heart.png' alt='' width={20} />
          </a>
          <a href='' className='rounded-full border p-2'>
            <img src='notification.png' alt='' width={20} />
          </a>
          <a href='' className='rounded-full border p-2'>
            <img src='setting-2.png' alt='' width={20} />
          </a>
          <a href='' className='rounded-full'>
            <img src='Profil.png' alt='' width={40} height={40} />
          </a>
        </li>
      </ul>
    </nav>
  )
}
