import React, {useState} from 'react'
import gamerBlack from '../assets/gamerblackshirt.png'
import gamerOrange from '../assets/gamerblackorange.png'
import gamerRed from '../assets/gamerblackRED.png'
import ramenBlack from '../assets/ramenblackshirt.png'
import ramenBlue from '../assets/ramenblueshirt.png'
import ramenRed from '../assets/ramenredshirt.png'
import BackDrop from '../assets/buttonzitemback.jpg'
import godzillaGreen from '../assets/godzillagreenshirt.png'
import godzillaPurple from '../assets/godzillapurpleshirt.png'
import godzillaRed from '../assets/godzillaredshirt.png'
import flameRed from '../assets/flameredshirt.png'
import flameBlue from '../assets/flameblueshirt.png'
import flameBlack from '../assets/flameblackshirt.png'
import dsBlack from '../assets/dsblackshirt.png'
import dsBlue from '../assets/dsblueshirt.png'
import dsGreen from '../assets/dsgreenshirt.png'
import bearBlue from '../assets/bluetmg.png'
import bearRed from '../assets/redtmg.png'
import bearOrange from '../assets/orangetmg.png'


const Shirts = ({updateCart}) => {

  //INCREMENT IN CART AND SENDING IT BACK TO HERO COMPONENT IN updateCart(updatedCartVal)
  
    const [cartVal, setCartVal] = useState(0)   
    const handleCartIncrement=()=>{
      const updatedCartVal = cartVal + 1;
      setCartVal(updatedCartVal);
      updateCart(updatedCartVal);
    }

    const [gamerShirt, setGamerShirt] = useState(gamerBlack)
    const [ramenShirt, setRamenShirt] = useState(ramenBlue)
    const [godzillaShirt, setGodzillaShirt] = useState(godzillaGreen)
    const [flameShirt, setFlameShirt] = useState(flameBlack)
    const [dsShirt, setDsShirt] = useState(dsBlue)
    const [bearShirt, setBearShirt]=useState(bearBlue)
    const handleColor=(value)=>{
      setGamerShirt(value)
    }
    const handleColorRamen=(value)=>{
      setRamenShirt(value)
    }
    const handleColorGodzilla=(value)=>{
      setGodzillaShirt(value)
    }
    const handleColorFlame=(value)=>{
      setFlameShirt(value)
    }
    const handleColorDs=(value)=>{
      setDsShirt(value)
    }
    const handleColorBear=(value)=>{
      setBearShirt(value)
    }

    
  return (
    <div className='mx-4 my-4'>
        <div className='grid grid-cols-1 gap-5 place-items-center md:grid-cols-3'>

        {/* START OF ITEM GAMER*/}
        <div className='rounded-lg h-auto bg-slate-200 items-center text-center px-6 
        transition duration-700 ease-in-out hover:bg-cover bg-center  hover:translate-y-1 hover:scale-105'
         style={{backgroundImage: `url(${BackDrop})`}}>
        <img src={gamerShirt} alt='blackshirt' className='size-60 w-auto mb-3
        transition duration-700 ease-in-out hover:translate-y-1 hover:scale-105'/>
        {/* SIZES */}
        <div className='flex justify-center my-2 gap-1 text-white'>
        <button className='bg-purple-950 px-2 '>SM</button>
        <button className='bg-purple-700 px-2'>LG</button>
        <button className='bg-purple-950 px-2 '>XL</button>
        </div>
        {/* COLORS */}
        <div className='flex justify-center '>
        <button className='bg-gray-900 rounded-full text-base px-2 text-gray-900 mx-1' onClick={()=>{handleColor(gamerBlack)}}>B</button>
        <button className='bg-orange-500 rounded-full text-base px-2 text-orange-500 mx-1' onClick={()=>{handleColor(gamerOrange)}}>B</button>
        <button className='bg-red-600 rounded-full text-base px-2 text-red-600 mx-1' onClick={()=>{handleColor(gamerRed)}}>B</button>
        </div>
         {/* DESC, ADD TO CART, PRICE */}
        <h1 className='text-lg font-bold'>GAMER SHIRT</h1>
        <div className='mx-3'>
        <button className='rounded-full bg-indigo-600 py-1 px-3 text-white' onClick={handleCartIncrement}>Add to Cart</button>
        </div>
        <h2 className='text-lg font-bold'><span className='text-sm font-semibold'>PKR</span> 999</h2>
        </div>
        {/* END OF ITEM */}

        {/* START OF ITEM RAMEN*/}
        <div className='rounded-lg h-auto bg-slate-200 items-center text-center px-6 
        transition duration-700 ease-in-out  hover:bg-cover bg-center  hover:translate-y-1 hover:scale-105'
         style={{backgroundImage: `url(${BackDrop})`}}>
        <img src={ramenShirt} alt='blackshirt' className='size-60 w-auto mb-3
        transition duration-700 ease-in-out hover:translate-y-1 hover:scale-105'/>
        {/* SIZES */}
        <div className='flex justify-center my-2 gap-1 text-white'>
        <button className='bg-purple-950 px-2 '>SM</button>
        <button className='bg-purple-700 px-2'>LG</button>
        <button className='bg-purple-950 px-2 '>XL</button>
        </div>
        {/* COLORS */}
        <div className='flex justify-center '>
        <button className='bg-gray-900 rounded-full text-base px-2 text-gray-900 mx-1' onClick={()=>{handleColorRamen(ramenBlack)}}>B</button>
        <button className='bg-blue-600 rounded-full text-base px-2 text-blue-600 mx-1' onClick={()=>{handleColorRamen(ramenBlue)}}>B</button>
        <button className='bg-rose-950 rounded-full text-base px-2 text-rose-950 mx-1' onClick={()=>{handleColorRamen(ramenRed)}}>B</button>
        </div>
         {/* DESC, ADD TO CART, PRICE */}
        <h1 className='text-lg font-bold'>RAMEN XOXO</h1>
        <div className='mx-3'>
        <button className='rounded-full bg-indigo-600 py-1 px-3 text-white' onClick={handleCartIncrement}>Add to Cart</button>
        </div>
        <h2 className='text-lg font-bold'><span className='text-sm font-semibold'>PKR</span> 1200</h2>
        </div>
        {/* END OF ITEM */}

         {/* START OF ITEM GODZILLA*/}
         <div className='rounded-lg h-auto bg-slate-200 items-center text-center px-6 
        transition duration-700 ease-in-out hover:bg-cover bg-center  hover:translate-y-1 hover:scale-105' 
        style={{backgroundImage: `url(${BackDrop})`}}>
        <img src={godzillaShirt} alt='blackshirt' className='size-60 w-auto mb-3
        transition duration-700 ease-in-out hover:translate-y-1 hover:scale-105'/>
        {/* SIZES */}
        <div className='flex justify-center my-2 gap-1 text-white'>
        <button className='bg-purple-950 px-2 '>SM</button>
        <button className='bg-purple-700 px-2'>LG</button>
        <button className='bg-purple-950 px-2 '>XL</button>
        </div>
        {/* COLORS */}
        <div className='flex justify-center '>
        <button className='bg-purple-700 rounded-full text-base px-2 text-purple-700 mx-1' onClick={()=>{handleColorGodzilla(godzillaPurple)}}>B</button>
        <button className='bg-green-700 rounded-full text-base px-2 text-green-700 mx-1' onClick={()=>{handleColorGodzilla(godzillaGreen)}}>B</button>
        <button className='bg-red-700 rounded-full text-base px-2 text-red-700 mx-1' onClick={()=>{handleColorGodzilla(godzillaRed)}}>B</button>
        </div>
         {/* DESC, ADD TO CART, PRICE */}
        <h1 className='text-lg font-bold'>GOJIRA</h1>
        <div className='mx-3'>
        <button className='rounded-full bg-indigo-600 py-1 px-3 text-white' onClick={handleCartIncrement}>Add to Cart</button>
        </div>
        <h2 className='text-lg font-bold'><span className='text-sm font-semibold'>PKR</span> 999</h2>
        </div>
        {/* END OF ITEM */}

        {/* START OF ITEM FLAME SKULL*/}
        <div className='rounded-lg h-auto bg-slate-200 items-center text-center px-6 
        transition duration-700 ease-in-out hover:bg-cover bg-center  hover:translate-y-1 hover:scale-105' 
        style={{backgroundImage: `url(${BackDrop})`}}>
        <img src={flameShirt} alt='blackshirt' className='size-60 w-auto mb-3
        transition duration-700 ease-in-out hover:translate-y-1 hover:scale-105'/>
        {/* SIZES */}
        <div className='flex justify-center my-2 gap-1 text-white'>
        <button className='bg-purple-950 px-2 '>SM</button>
        <button className='bg-purple-700 px-2'>LG</button>
        <button className='bg-purple-950 px-2 '>XL</button>
        </div>
        {/* COLORS */}
        <div className='flex justify-center '>
        <button className='bg-gray-900 rounded-full text-base px-2 text-gray-900 mx-1' onClick={()=>{handleColorFlame(flameBlack)}}>B</button>
        <button className='bg-teal-700 rounded-full text-base px-2 text-teal-700 mx-1' onClick={()=>{handleColorFlame(flameBlue)}}>B</button>
        <button className='bg-red-700 rounded-full text-base px-2 text-red-700 mx-1' onClick={()=>{handleColorFlame(flameRed)}}>B</button>
        </div>
         {/* DESC, ADD TO CART, PRICE */}
        <h1 className='text-lg font-bold'>FLAME ON</h1>
        <div className='mx-3'>
        <button className='rounded-full bg-indigo-600 py-1 px-3 text-white' onClick={handleCartIncrement}>Add to Cart</button>
        </div>
        <h2 className='text-lg font-bold'><span className='text-sm font-semibold'>PKR</span> 700</h2>
        </div>
        {/* END OF ITEM */}

         {/* START OF ITEM DSSKULL*/}
         <div className='rounded-lg h-auto bg-slate-200 items-center text-center px-6 
        transition duration-700 ease-in-out hover:bg-cover bg-center  hover:translate-y-1 hover:scale-105' 
        style={{backgroundImage: `url(${BackDrop})`}}>
        <img src={dsShirt} alt='blackshirt' className='size-60 w-auto mb-3
        transition duration-700 ease-in-out hover:translate-y-1 hover:scale-105'/>
        {/* SIZES */}
        <div className='flex justify-center my-2 gap-1 text-white'>
        <button className='bg-purple-950 px-2 '>SM</button>
        <button className='bg-purple-700 px-2'>LG</button>
        <button className='bg-purple-950 px-2 '>XL</button>
        </div>
        {/* COLORS */}
        <div className='flex justify-center '>
        <button className='bg-gray-900 rounded-full text-base px-2 text-gray-900 mx-1' onClick={()=>{handleColorDs(dsBlack)}}>B</button>
        <button className='bg-blue-900 rounded-full text-base px-2 text-blue-900 mx-1' onClick={()=>{handleColorDs(dsBlue)}}>B</button>
        <button className='bg-green-900 rounded-full text-base px-2 text-green-900 mx-1' onClick={()=>{handleColorDs(dsGreen)}}>B</button>
        </div>
         {/* DESC, ADD TO CART, PRICE */}
        <h1 className='text-lg font-bold'>DARK SIDE</h1>
        <div className='mx-3'>
        <button className='rounded-full bg-indigo-600 py-1 px-3 text-white' onClick={handleCartIncrement}>Add to Cart</button>
        </div>
        <h2 className='text-lg font-bold'><span className='text-sm font-semibold'>PKR</span> 1200</h2>
        </div>
        {/* END OF ITEM */}

        {/* START OF ITEM BEAR SHIRT*/}
        <div className='rounded-lg h-auto bg-slate-200 items-center text-center px-6 
        transition duration-700 ease-in-out hover:bg-cover bg-center  hover:translate-y-1 hover:scale-105' 
        style={{backgroundImage: `url(${BackDrop})`}}>
        <img src={bearShirt} alt='blackshirt' className='size-60 w-auto mb-3
        transition duration-700 ease-in-out hover:translate-y-1 hover:scale-105'/>
        {/* SIZES */}
        <div className='flex justify-center my-2 gap-1 text-white'>
        <button className='bg-purple-950 px-2 '>SM</button>
        <button className='bg-purple-700 px-2'>LG</button>
        <button className='bg-purple-950 px-2 '>XL</button>
        </div>
        {/* COLORS */}
        <div className='flex justify-center '>
        <button className='bg-cyan-700 rounded-full text-base px-2 text-cyan-700 mx-1' onClick={()=>{handleColorBear(bearBlue)}}>B</button>
        <button className='bg-orange-600 rounded-full text-base px-2 text-orange-600 mx-1' onClick={()=>{handleColorBear(bearOrange)}}>B</button>
        <button className='bg-rose-950 rounded-full text-base px-2 text-rose-950 mx-1' onClick={()=>{handleColorBear(bearRed)}}>B</button>
        </div>
         {/* DESC, ADD TO CART, PRICE */}
        <h1 className='text-lg font-bold'>BEAR BRO</h1>
        <div className='mx-3'>
        <button className='rounded-full bg-indigo-600 py-1 px-3 text-white' onClick={handleCartIncrement}>Add to Cart</button>
        </div>
        <h2 className='text-lg font-bold'><span className='text-sm font-semibold'>PKR</span> 999</h2>
        </div>
        {/* END OF ITEM */}
        </div>
    </div>
  )
}

export default Shirts