import { useState } from 'react'

function LikeButton({ label }) {
  const [liked, setLiked] = useState(false)

  return (
    <button 
      className={liked ? 'liked' : ''} 
      onClick={() => setLiked(!liked)}
    >
      {liked ? '❤️' : '🤍'} {label}
    </button>
  )
}

export default LikeButton