import React, { useState } from 'react'
import Navbar from '../shared-components/Navbar'
import Shirts from './Shirts'
import Accessories from './Accessories'
import WallArt from './WallArt'
import display1 from '../assets/display1.jpg'
import display2 from '../assets/display2.jpg'
import display3 from '../assets/display3.jpg'
import display4 from '../assets/display4.jpg'
import About from './About'
import Login from './Login'
import UserProfile from './UserProfile'
import Cart from './Cart'


const Hero = () => {
    const [cartCount, setCartCount] = useState(0) //saves count for cart
    const [userName, setUserName] = useState('login')
  
    const [item, setItem] = useState('frontPage') //navigates to pages state
    const changeToItem = (itemName) =>{           //function to change component based on which value is changed to
        setItem(itemName)
    }
    //takes the values sent by child components
    const updateCart=(cartVal)=>{                 
      setCartCount(cartVal)
    }
    //send data and retrieve data from Login of username
    const userNameData=(userNameValue)=>{
      setUserName(userNameValue)
    }
  return (
    <div>
       <Navbar changeToItem={changeToItem} cartValue={cartCount} userName={userName}></Navbar>
        {item==='frontPage' && 
        <div className='mx-1'>
          <img src={display1} alt='Promotional1' className='py-2 hover:cursor-pointer transition duration-1000 hover:opacity-80' onClick={()=>changeToItem('shirts')}/>
          <img src={display2} alt='Promotional2' className='pb-2' />
          <div className='flex justify-between gap-1'>
          <img src={display3} alt='Promotional3' className='size-1/2 hover:cursor-pointer transition duration-1000 hover:opacity-80' onClick={()=>{setItem('shirts')}}/>
          <img src={display4} alt='Promotional4' className='size-1/2 hover:cursor-pointer transition duration-1000 hover:opacity-80'onClick={()=>{setItem('wallArt')}}/>
          </div>
      </div>
        }
        {item==='shirts' && <Shirts updateCart={updateCart}/>}
        {item==='wallArt'&&<WallArt/>}
        {item==='about'&&<About/>}
        {item==='cart'&&<Cart/>}
        {item==='accessories'&&<Accessories/>}
        {item==='login' &&userName==='login'&&<Login userNameData={userNameData} changeToItem={changeToItem}/> }
        {item==='login'&&userName!=='login'&&<UserProfile userName={userName}/>}
       
        
    </div>
  )
}

export default Hero