'use client'
import { useState } from 'react'

 function LikeButton({children}: {children: string}) {
  const [liked, setLiked] = useState(false)
  const [showFloat, setShowFloat] = useState(false)

  const handleClick = () => {
    setLiked(!liked)
    setShowFloat(true)
    setTimeout(() => setShowFloat(false), 500)
  }

  return (
    <div >
      <button onClick={handleClick} className="flex items-center border-solid border-1 bg-[var(--color-button)] gap-2 py-1  px-4 light:bg-[#2563eb] rounded-lg cursor-pointergap-2 group hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transition-all duration-200 ${
            liked ? 'fill-red-500 stroke-red-500 scale-125' : 'stroke-white fill-transparent'
          }`}
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.13 2.44h1.74C14.09 5.01 
            15.76 4 17.5 4 20 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 
            11.54L12 21.35z"/>
        </svg>
        <span className="text-white">{children||'Sponsor'}</span>
      </button>

      {showFloat && (
        <span className="absolute text-red-500 text-2xl animate-float-heart">❤️</span>
      )}
    </div>
  )
}

export default LikeButton;
