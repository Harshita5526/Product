import React from 'react'

const Navbar = ({ setToggle }) => {
  return (
    <div className='flex justify-center gap-90 bg-black text-white h-12 items-center'>

<div className='flex justify-center gap-3'>
    <h1 className='text-3xl font-bold rounded-lg p-2 '><i className="ri-shopping-bag-2-line text-lime-400"></i></h1>
    <h1 className='text-4xl font-bold hover:text-lime-400 transition-all duration-300 cursor-pointer'>sky<span className='text-lime-400'>Mart</span></h1>
</div>
<div className='flex justify-center gap-5'>
    <button onClick={() => setToggle(false)} className='text-lg cursor-pointer hover:text-lime-400 hover:scale-110 transition-all duration-300'>Home</button>
    <button onClick={() => setToggle(true)} className='text-lg cursor-pointer hover:text-lime-400 hover:scale-110 transition-all duration-300'>Shop</button>
    <button  className='text-lg cursor-pointer hover:text-lime-400 hover:scale-110 transition-all duration-300'>About</button>
</div>
<div className='flex justify-center gap-5 items-center'>
    <h1 className='text-2xl text-lime-400 hover:text-lime-300 rounded transition-all hover:scale-110 duration-300 cursor-pointer'><i className="ri-seo-line"></i></h1>
<h1 className='text-2xl hover:text-lime-400 rounded transition-all hover:scale-110 duration-300 cursor-pointer'><i className="ri-shopping-cart-line text-white"></i></h1>
<h1 className='text-lg cursor-pointer hover:text-lime-400 transition-all hover:scale-110 duration-300 flex items-center gap-2'><i className="ri-compass-discover-line text-xl"></i></h1>
</div>

    </div>
  )
}

export default Navbar