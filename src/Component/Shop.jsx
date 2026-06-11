import React from 'react'
 import { useState, useEffect } from 'react'
 import axios from 'axios'
const Shop = () => {
  const [products, setProducts] = useState([]);
  
    async function getdata() {
      let res = await axios.get('https://dummyjson.com/products');
      console.log(res.data.products);
      setProducts(res.data.products);
  
    }
    useEffect(() => {
      getdata();
    }, [])
    console.log(products);
  return (
    <div className='bg-black min-h-screen p-6'>
      <h1 className='font-bold text-4xl text-white text-left mt-5 ml-7'>All Products</h1>
     <h3 className='text-gray-400 ml-7'>50 products found</h3>
    <div className="bg-black min-h-screen flex flex-wrap  gap-6 p-6">

      {products.map((item) => (
        <div key={item.id} className="bg-black w-64  border  border-gray-600 rounded-2xl p-4 shadow-md hover:shadow-xl hover:scale-105 transition  duration-300">
<div className='h-50  w-55 bg-white rounded-2xl flex items-center justify-center  overflow-hidden object-contain mb-3 transition-transform duration-300 hover:scale-105'>
          <img
            src={item.thumbnail}
            alt={item.title}
            className="rounded-xl mb-3"
          />
          </div>

          <p className="text-gray-400 text-sm">{item.category}</p>

          <h2 className="font-semibold text-white text-lg">{item.title}</h2>

          <p className="text-yellow-500  text-white text-sm">
            ⭐⭐⭐⭐☆ 
            <span className="text-gray-400">({item.rating})</span>
          </p>

          <hr className="my-3" />
          <div className='h-0.5 w-full bg-white mt-2 mb-2 '></div>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-lime-500">${item.price}</p>

            <button className="bg-lime-500 text-black px-3 py-1 hover:scale-95 rounded-lg text-sm">
              <i className="ri-shopping-cart-line text-black"></i> Add
            </button>
          </div>

        </div>
      ))}
      <div className='h-0.5 w-full bg-white mt-10 '></div>
      <div className='flex justify-center items-center w-full  bg-black flex-col'><h1 className='text-lime-400  text-2xl mb-1'>SkyMart</h1>
      <p className='text-gray-400 text-l'>© 2025 SkyMart • Built with React + Redux + TanStack Query</p></div>

    </div>
    </div>
  );
}

export default Shop