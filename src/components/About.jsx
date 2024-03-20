import React from 'react'
import reactLogo from '../assets/structure (1).png'
import nextLogo from '../assets/aanext-js.svg'
import javaLogo from '../assets/jsl.png'
import cssLogo from '../assets/css-3.png'
import htmlLogo from '../assets/html.png'
import tailWingLogo from '../assets/Tailwind_CSS_Logo.svg.png'
import typeScriptLogo from '../assets/typescript.png'
import nodeLogo from '../assets/nodejs-logo-FBE122E377-seeklogo.com.png'
const About = () => {
  return (
    <div className='mx-2 '>
        <div className='flex justify-between'>
        <div>
        <h1 className='text-2xl font-extrabold text-cyan-800 my-10'>About Me</h1>
        <p className='text-lg font-semibold text-justify'> 'Hello, I am Sarosh Ahmed, 
            a front end web developer creating visually stunning and user friendly websites in React JS &
             Next JS. I am an electronics engineer while currently persuing a degree in CS-Masters. 
             This is a small look at the journey I started to become a Full Stack Web Developer'
             </p>
        <h3 className='mt-3 text-cyan-800 font-bold'> My Skills: </h3>
        <div className='flex justify-end mt-5 '>
            <img src={reactLogo} alt='react' className='size-10 mx-1 animate-spin-slow'/>
            <img src={nextLogo} alt='next' className='size-10 mx-1'/>
            <img src={javaLogo} alt='JS' className='size-10 mx-1'/>
            <img src={typeScriptLogo} alt='TS' className='size-10 mx-1'/>
            <img src={nodeLogo} alt='nodejs' className='size-10 mx-1'/>
            <img src={htmlLogo} alt='html' className='size-10 mx-1'/>
            <img src={tailWingLogo} alt='tailwind' className='size-10 mx-1'/>
            <img src={cssLogo} alt='css' className='size-10 mx-1'/>
            </div>       
        <h2  className='text-2xl font-extrabold text-cyan-800 my-10'> About Buttonz.cool</h2>
        <p className='text-lg font-semibold text-justify'> 'This is a Front End UI Development for an E-commerce business. I built this
        in React.js using Tailwind Css. All the images are edited in Adobe Photoshop by me and some assets are taken from flaticons.com.
        <br/><br/><span className='text-xl font-extrabold text-cyan-800 py-10 '>Features of Buttonz.cool: </span>
        <ol>
            <li>
                1. Dynamic Components
            </li>
            <li>
                2. Single Page Website
            </li>
            <li>
                3. Login Mechanism
            </li>
            <li>
                4. Dynamic Items with color selection
            </li>
            <li>
                5. Reusable Components
            </li>
            <li>
                6. Responsive UI
            </li>
            <li>
                7. Mobile and all screens friendly
            </li>
            <li>
                8. Cart System
            </li>
            <li>
                9. All original Art and Assets
            </li>
        </ol>
             </p>

            </div>
        </div>
        
    </div>
  )
}

export default About