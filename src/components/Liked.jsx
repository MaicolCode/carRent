import { useState } from 'react'
import { Like, LikePinted } from '../icons/CardCars'

export function Liked() {
  const [liked, setLiked] = useState(true)
  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <span
      onClick={(e) => {
        e.stopPropagation()
        handleLike()
      }}
      className='flex justify-center items-center h-[20px] w-[20px] cursor-pointer '
    >
      {liked ? <Like /> : <LikePinted />}
    </span>
  )
}
