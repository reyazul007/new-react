import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(1)

  const handleDecrement=()=>{
    setCount((count)=>count-1)
  }
  const handleIncrement=()=>{
    setCount((count)=>count+1)
  }

  return (
    <>
      <Navbar />
      <Banner />
     
      <div className='container'>


        <h1 className='heading'>good evening everyone</h1>
        <div className="card ">
          <h4> count is: {count}</h4>
          <button onClick={handleIncrement}>
           increment
          </button>
          <button onClick={handleDecrement}>
           Decrement
          </button>


        </div>

      </div>
    </>
  )
}

export default App
