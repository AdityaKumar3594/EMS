import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between p-10'>
        <h1 className='font-medium text-2xl text-white'>Hello <br /> <span className='font-semibold text-3xl'>Aditya, 😁</span></h1> 
        <button className='w-fit p-2 text-white rounded-full bg-emerald-300 hover:bg-emerald-500 hover:font-bold hover:cursor-pointer'>Log Out</button>    
    </div>
  )
}

export default Header
