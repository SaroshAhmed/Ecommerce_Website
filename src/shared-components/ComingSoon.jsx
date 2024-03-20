import React from 'react'
import comingSoon from '../assets/cssign.png'
const ComingSoon = () => {
  return (
        
    <div className='h-screen flex justify-center items-center text-3xl text-orange-600 font-extrabold '>
      <h1>Coming</h1> 
      <img src={comingSoon} alt='SOON' className='size-48 animate-bounce '></img>
      </div>

  )
}

export default ComingSoon 