import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className='text-4xl bg-black text-white'>Hello</p>
      </div>        
    </>
  )
}

export default App
