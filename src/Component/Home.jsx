import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen bg-black p-6'>
    <div className='h-85 w-275 mx-auto mb-6 rounded-2xl bg-black p-8 text-white text-xl border border-white/20 transition hover:border-white'>
      <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
        <div className='flex flex-col items-start gap-4 text-left'>
          <h3 className='text-xl font-medium text-amber-200'>Good evening 👋!</h3>
          <h1 className='text-5xl font-semibold leading-tight'>Welcome back,<br/><span className='text-lime-400'>harshita!!</span></h1>
          <p className='max-w-2xl text-base leading-relaxed text-amber-200'>Discover today's picks — hand-curated products across <br></br>electronics, fashion, and more.</p>
          <div className='flex flex-wrap gap-4'>
            <button className='rounded-2xl bg-lime-400 px-10 py-2 text-base font-semibold text-black transition hover:bg-lime-300 hover:border hover:border-white/40 flex items-center gap-2'>Shop Now <i className="ri-arrow-right-line text-black font-bold"></i></button>
            <button className='rounded-2xl border border-white/40 bg-transparent px-9 py-2 text-base font-semibold transition hover:border-white hover:text-lime-400'>View all products</button>
          </div>
        </div>
        <div className='flex flex-col gap-7'>
          <button className='rounded-2xl bg-lime-400/20 px-6 py-5 text-left text-base font-semibold border border-lime-400/30 text-lime-200 transition hover:bg-lime-400/30 hover:border-lime-400 hover:text-white'>+20<br/>Products available</button>
          <button className='rounded-2xl bg-black px-6 py-5 text-left text-base font-semibold border border-white/20 transition hover:border-white hover:bg-white/10'>Free<br/>delivery on $999</button>
        </div>
      </div>
    </div>
    <div className='flex justify-center gap-8'>
    <div className='h-30 w-60 flex-row gap-4  bg-black rounded-2xl border border-white/20 flex items-center justify-center text-white transition hover:border hover:border-white/40'>
    <div className='h-15 w-15 rounded-full  bg-lime-500/20 flex items-center justify-center'>
      <i className="ri-boxing-line text-white text-2xl"></i>
    </div>
 <h1 className='text-left text-zinc-400'><span className='text-white font-bold text-2xl'>0</span><br></br>
     <span className='text-sm text-zinc-500'>Cart Item</span><br></br>
     <span className='text-xs text-zinc-600'>in your bag</span></h1>
    </div>
  
    <div className='h-30 w-60 flex-row gap-4 rounded-2xl border border-white/20 flex items-center justify-center text-white transition hover:border hover:border-white/40'>
     <div className='h-15 w-15 rounded-full bg-blue-500/20 flex items-center justify-center'>
       <i className="ri-funds-box-line text-white text-2xl"></i>
     </div>
   <h1 className='text-left text-zinc-400'><span className='text-white font-bold text-2xl'>$0.00</span><br></br>
     <span className='text-sm text-zinc-500'>Cart Values</span><br></br>
     <span className='text-xs text-zinc-600'>ready to Checkout</span></h1></div>
    <div className='h-30 w-60 flex-row gap-4 bg-black rounded-2xl border border-white/20 flex items-center justify-center text-white transition hover:border hover:border-white/40'>
     <div className='h-15 w-15 rounded-full bg-yellow-300/10 flex items-center justify-center'>
       <i className="ri-shield-star-line text-white text-2xl"></i>
     </div><h1 className='text-left text-zinc-400'><span className='text-white font-bold text-2xl'>5</span><br></br>
     <span className='text-sm text-zinc-500'>Top Product</span><br></br>
     <span className='text-xs text-zinc-600'>Highly rated</span></h1>
   </div>
    <div className='h-30 w-60 flex-row gap-4 bg-black rounded-2xl border border-white/20 flex items-center justify-center text-white transition hover:border hover:border-white/40'>
     <div className='h-15 w-15 rounded-full bg-purple-500/20 flex items-center justify-center'>
       <i className="ri-price-tag-3-line text-white text-2xl"></i>
     </div>
     
    <h1 className='text-left text-zinc-400'><span className='text-white font-bold text-2xl'>6</span><br></br>
     <span className='text-sm text-zinc-500'>Categories</span><br></br>
     <span className='text-xs text-zinc-600'>to explore</span></h1></div>
    </div>

 <h1  className='font-bold text-4xl text-white text-left mt-5 ml-6'>Shop by category</h1>
    <div className='flex w-full flex-wrap bg-black  items-center justify-center gap-4 ' >
      <div  className='h-25 w-60 bg-white rounded-2xl mt-7 border-white/20 flex items-center justify-center hover:border hover:border-white/40'><h1 className='text-black'>
        Electronics<br></br>17 items</h1></div>
      <div className='h-25 w-65 bg-white rounded-2xl mt-7 border-white/20 flex items-center justify-center hover:border hover:border-white/40'><h1 className='text-black'>Clothing <br></br>25 items</h1></div>
      <div className='h-25 w-65 bg-white rounded-2xl  mt-7 border border-white/20 flex items-center justify-center text-white transition hover:border hover:border-white/40'><h1 className='text-black'>Books <br></br>12 items</h1></div>
      <div className='h-25 w-65 bg-white  rounded-2xl mt-7 border-white/20 flex items-center justify-center hover:border hover:border-white/40'><h1 className='text-black'>Home  <br></br>20 items</h1></div>
      <div className='h-25 w-65 bg-white rounded-2xl border-white/20 flex items-center justify-center hover:border hover:border-white/40'><h1 className='text-black'>Sports <br></br>15 items</h1></div>
      <div className='h-25 w-65 bg-white rounded-2xl border-white/20 flex items-center justify-center hover:border hover:border-white/40'><h1 className='text-black'>Toys <br></br>18 items</h1></div>
      <div className='h-25 w-65 bg-white rounded-2xl border-white/20 flex items-center justify-center hover:border hover:border-white/40'><h1 className='text-black'>furniture <br></br>22 items</h1></div>
      <div className='h-25 w-65 bg-white rounded-2xl border-white/20 flex items-center justify-center hover:border hover:border-white/40'><h1 className='text-black'>Accessories <br></br>14 items</h1></div>
   </div>
  <div className='flex justify-center items-center bg-white border-gray-300  w-48 gap-6 mt-10'>
    <div className='flex flex-col border-black rounded-2xl justify-between items-center'><h1> ⭐Top Rated</h1>
       <div className='flex justify-between h-10 w-5 object-center overflow-hidden'><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D" alt=""  /> <h1 className='text-black text-2xl'>$599.9</h1> <h1><i class="ri-shopping-bag-3-line"></i></h1></div>
       <div className='flex justify-between h-10 w-5 object-center overflow-hidden'><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D" alt=""  /> <h1 className='text-black text-2xl'>$599.9</h1> <h1><i class="ri-shopping-bag-3-line"></i></h1></div>
       <div className='flex justify-between h-10 w-5 object-center overflow-hidden'><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D" alt=""  /> <h1 className='text-black text-2xl'>$599.9</h1> <h1><i class="ri-shopping-bag-3-line"></i></h1></div>
       <div className='flex justify-between h-10 w-5 object-center overflow-hidden'><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D" alt=""  /> <h1 className='text-black text-2xl'>$599.9</h1> <h1><i class="ri-shopping-bag-3-line"></i></h1></div>
       <div className='flex justify-between h-10 w-5 object-center overflow-hidden'><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D" alt=""  /> <h1 className='text-black text-2xl'>$599.9</h1> <h1><i class="ri-shopping-bag-3-line"></i></h1></div>
    </div>

  
     <div className='flex justify-center items-center bg-white border-gray-300  w-48 gap-6 mt-10'>
    <div  className='flex flex-col border-black rounded-2xl justify-between items-center'><h1> ⭐Top Rated</h1>
      <div className='h-10 w-5 object-center overflow-hidden flex justify-between'><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D" alt=""  /> <h1 className='text-black text-2xl'>$599.9</h1> <h1><i class="ri-shopping-bag-3-line"></i></h1></div>
       <div className='h-10 w-5 object-center overflow-hidden flex justify-between '><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D" alt=""  /> <h1 className='text-black text-2xl'>$599.9</h1> <h1><i class="ri-shopping-bag-3-line"></i></h1></div>
      <div className='h-10 w-5 object-center overflow-hidden flex justify-between '><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D" alt=""  /> <h1 className='text-black text-2xl'>$599.9</h1> <h1><i class="ri-shopping-bag-3-line"></i></h1></div>
     <div className='h-10 w-5 object-center overflow-hidden flex justify-between '><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D" alt=""  /> <h1 className='text-black text-2xl'>$599.9</h1> <h1><i class="ri-shopping-bag-3-line"></i></h1></div>
     <div className='h-10 w-5 object-center overflow-hidden flex justify-between '><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmV8ZW58MHx8MHx8fDA%3D" alt=""  /> <h1 className='text-black text-2xl'>$599.9</h1> <h1><i class="ri-shopping-bag-3-line"></i></h1></div>
   </div>
      </div>
   </div></div>
  )
}

export default Home