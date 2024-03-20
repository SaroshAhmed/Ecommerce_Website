import React from 'react'
import gitHubLogo from '../assets/github.png'
import linkedInLogo from '../assets/link.png'
import codeWarsLogo from '../assets/codewars.svg'

const Footer = () => {
  return (
    <footer>
    
    <div className='bg-sky-900  pt-8 x-2 mt-2 rounded-t-lg'>
        <div className='text-gray-200 '>
            <h1 className='text-2xl mb-2 font-bold px-2'>Contact Info: </h1>
            <h2 className='px-2 text-sm'>Created by: <span  className='font-bold ml-3 '>Sarosh Ahmed</span></h2>
            <h3 className='px-2 text-sm'>Email: <span className='font-bold ml-12'> saroshahmed.07@gmail.com</span></h3>
            <a href='https://saroshportfolio.vercel.app' target='_blank'>
              <h4 className='px-2 text-sm'>Website: <span className='font-bold ml-7'>saroshportfolio.vercel.app</span></h4></a>
              
              <p className='border-b-gray-400 border-b-2 mb-2 mt-3 mx-2'></p>
        </div>
        <div className='flex justify-end mx-4 pb-2'>
          <a href='https://github.com/SaroshAhmed' target='_blank'><img src={gitHubLogo} alt='buttonz.cool' className='rounded-full size-8 w-auto px-1'/></a>
          <a href='https://www.linkedin.com/in/sarosh-ahmed-48067811b/' target='_blank'><img src={linkedInLogo} alt='buttonz.cool' className='rounded-full size-8 w-auto px-1'/></a>
          <a href='https://www.codewars.com/users/SaroshAhmed' target='_blank'><img src={codeWarsLogo} alt='buttonz.cool' className='rounded-full size-8 w-auto px-1'/></a>
        </div>

        <div className='flex justify-center text-gray-200 text-xs py-2' >
        <p > © Sarosh Ahmed | buttonZ.cool. All Rights Reserved</p>
        </div>
    </div>
    </footer>
  )
}

export default Footer