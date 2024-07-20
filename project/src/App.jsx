import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full'>
      <Navbar/>
      <Hero/>
    </div> 
    </>
  )
}

export default App
