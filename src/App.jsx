import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Shop from './Component/Shop'
import { useState } from 'react'
import About from './Component/About'
const App = () => {
  const [toggle, setToggle] = useState(false)
   
  return (
    <div>
      <Navbar   setToggle={setToggle}/>
    {toggle ?   <Shop />: <Home />}
   
    </div>
   
  )
}

export default App