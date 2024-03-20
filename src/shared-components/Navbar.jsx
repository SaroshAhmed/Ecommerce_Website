import React from 'react'
import logoImg from '../assets/ButtonZtwocool.png'
import cartImg from '../assets/bag.png'
import search from '../assets/search.png'


const Navbar = ({changeToItem, cartValue, userName}) => {

  return (
  
    <header className='top-0 sticky z-50 opacity-95'> 
        <div className='flex justify-between h-auto bg-cyan-800 items-center w-auto  py-2 px-2 '>                                  
        <img src={logoImg} alt='logo' className='size-10 w-auto hover: cursor-pointer pb-1
        transition duration-200 ease-in-out translate-y-1 hover:scale-105'onClick={()=>changeToItem('frontPage')}/>
                
            <ul className='flex justify-between items-center text-gray-200 lg:text-lg sm:text-lg  font-bold px-2 '>
            <img src={search} alt='search' className='size-5  w-auto mr-4 hover:cursor-pointer'></img>
                <li className='px-2 hover: cursor-pointer hover:text-cyan-200'onClick={()=>changeToItem('about')}>About</li>
                <li className='px-2 hover: cursor-pointer hover:text-cyan-200' onClick={()=>changeToItem('login')}>{userName}</li>
                <img src={cartImg} alt='cart' className='size-5 w-auto ml-4 hover: cursor-pointer'onClick={()=>changeToItem('cart')}/>
                <h2 className='text-sm'>{cartValue}</h2>
            </ul>
        </div>
       
       <div className='bg-cyan-600 h-12 flex justify-center text-gray-200 rounded-b-lg'>
        <ul className='flex justify-center items-center hover:cursor-pointer text-base font-extrabold'>
       <li className='px-2 hover:text-cyan-200' onClick={()=>changeToItem('shirts')}>SHIRTS</li>
        <li className='px-2 hover:text-cyan-200'onClick={()=>changeToItem('wallArt')}>ART</li>
        <li className='px-2 hover:text-cyan-200'onClick={()=>changeToItem('accessories')}>ACCESSORIES</li>
        <li className='px-2 hover:text-cyan-200'onClick={()=>changeToItem('frontPage')}>NEW ARRIVAL!</li>
        </ul>
       </div>
    </header>
  )
}

export default Navbar