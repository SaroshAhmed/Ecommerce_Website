import React, { useState, useRef } from 'react'
import buttonszLogo from '../assets/ButtonZtwocool.png'
import SignUp from './SignUp'
import BackDrop from '../assets/backdrop.jpg'

const Login = ({userNameData, changeToItem}) => {
 
    const [display, setDisplay] = useState('')
    const userName = useRef(null)
    const userPassword = useRef(null)
    const [signUpCheck, setsignUpCheck] = useState('login')

    const userData = {
        userName: 'sarosh',
        passWord: 'sarosh123',
        email: 'saroshahmed.07@gmail.com'
    }

    const handleSubmit = ()=>{
        if (userName.current.value===userData.userName&&userPassword.current.value===userData.passWord){
          
            setDisplay(' ')
            userNameData(userName.current.value)
           
            setsignUpCheck('userProfile')
            
        }
        else{
            setDisplay('Incorrect User Name or Password')
        }
      
    }

    //handleSignUp
    const handleLoginState=()=>{
        setsignUpCheck('signup')
    }

 
    if(signUpCheck==='login'){
        return (
            <div className='flex justify-center items-center py-8 h-screen ' style={{backgroundImage: `url(${BackDrop})`,backgroundSize: 'cover'}} >
             <div className=' bg-gray-100 rounded-lg border-2 border-gray-200 w-80 shadow-md shadow-cyan-400'>
         
             <div className='flex justify-center items-center bg-cyan-700 text-gray-100 font-bold text-xl border-2 rounded-t-lg border-cyan-600 py-2 px-24'>
                 <h1> Login</h1>
             </div>
             <div className='flex justify-center items-center mt-8'>
             <img src={buttonszLogo} alt='logo' className='size-14 w-auto'/>
             </div>
             <div className='mt-12 px-4'>
                 <h2 className='text-cyan-600 font-semibold text-lg'>User Name:</h2>
                 <input type='text'  className=' border-2 rounded-lg w-[280px] my-2 focus:outline-cyan-600 hover:border-cyan-300' ref={userName}/>
                 <h3 className='text-cyan-600 font-semibold text-lg'> Password:</h3>
                 <input type='password' className='  border-2 rounded-lg w-[280px] my-2 focus:outline-cyan-600 hover:border-cyan-300 mt-1' ref={userPassword}/>
             </div>
             <div className='flex justify-center items-center'>
             <button className='bg-cyan-600 text-gray-200 py-2 px-4 rounded-xl font-bold duration-500 hover:bg-cyan-400'onClick={handleSubmit}>Login</button>
             </div>
             <div>
                 <h4 className='text-sm text-cyan-600 px-4 py-3'>Not a user? <span className='cursor-pointer font-bold' onClick={handleLoginState}>Sign UP!</span></h4>
             </div>
             <div className='flex justify-center items-center'>
             <h5 className='text-sm font-semibold text-red-500'>{display}</h5>
             </div>
         
         

             </div>
            </div>
           )
    }
    else if(signUpCheck==='signup'){
        return(
            <SignUp currentUser={userData} userNameData={userNameData} changeToItem={changeToItem} handleLoginState={handleLoginState}/>
        )
       
    }
    
  
}
 
export default Login