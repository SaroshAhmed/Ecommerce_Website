import React, { useRef,useState } from 'react'
import buttonszLogo from '../assets/ButtonZtwocool.png'
import BackDrop from '../assets/backdrop.jpg'

const SignUp = ({currentUser,userNameData,changeToItem}) => {
    const [message, setMessage] = useState(' ')    
    const userName = useRef(null)
    const userEmail = useRef(null)
    const userPassword = useRef(null)
    const userCPassword = useRef(null)
   
    const submitResponse=()=>{
        console.log(currentUser)
        console.log(userName.current.value)
        if(userName.current.value===currentUser.userName){
            setMessage("user name not available")
        }
        else if(userName.current.value.length<=3){
            setMessage("User name too short")
        }
       
        else if(userCPassword.current.value!==userPassword.current.value){
            setMessage('passwords dont match')
        }
        
        else if(userCPassword.current.value.length<=6||userPassword.current.value.length<=6){
            setMessage('password length is too short')
        }
        
        else if(userEmail.current.value.endsWith('.com')===false){
            setMessage('Enter a valid Email')
        }
        else if(userEmail.current.value===currentUser.email){
            setMessage('Email already exists')
        }
        else{
            
            changeToItem('frontPage')
            userNameData(userName.current.value)
            setMessage('Success')
        }
        
    }
  return (
    <div className='flex justify-center items-center py-8 h-screen' style={{backgroundImage: `url(${BackDrop})`,backgroundSize: 'cover'}} >
             <div className=' bg-gray-100 rounded-lg border-2 border-gray-200 w-80 shadow-md shadow-cyan-400'>
         
             <div className='flex justify-center items-center bg-cyan-700 text-gray-100 font-bold text-xl border-2 rounded-t-lg border-cyan-600 py-2 px-24 '>
                 <h1> Sign Up</h1>
             </div>
             <div className='flex justify-center items-center mt-8'>
             <img src={buttonszLogo} alt='logo' className='size-14 w-auto'/>
             </div>
             <div className='mt-12 px-4'>
                 <h2 className='text-cyan-600 font-semibold text-base'>Enter a user name:</h2>
                 <input type='text'  className=' border-2 rounded-lg w-[280px] my-1 focus:outline-cyan-600 hover:border-cyan-300' ref={userName}/>
                 <h2 className='text-cyan-600 font-semibold text-base'>Enter email:</h2>
                 <input type='text'  className=' border-2 rounded-lg w-[280px] my-1 focus:outline-cyan-600 hover:border-cyan-300' ref={userEmail}/>
                 <h3 className='text-cyan-600 font-semibold text-base'>Enter Password:</h3>
                 <input type='password' className='  border-2 rounded-lg w-[280px] my-1 focus:outline-cyan-600 hover:border-cyan-300 mt-1' ref={userPassword}/>
                 <h3 className='text-cyan-600 font-semibold text-base'>Confirm Password:</h3>
                 <input type='password' className='  border-2 rounded-lg w-[280px] my-1 focus:outline-cyan-600 hover:border-cyan-300 mt-1' ref={userCPassword}/>
             </div>
             <div className='flex justify-center items-center py-2'>
             <button className='bg-cyan-600 text-gray-200 py-2 px-4 rounded-xl font-bold duration-500 hover:bg-cyan-400' onClick={submitResponse}>Register</button>
             </div>
              
             <div className='flex justify-center items-center'>
             <h5 className='text-sm font-semibold text-red-500'>{message}</h5>
             </div>
             </div>
            </div>
  )
}

export default SignUp