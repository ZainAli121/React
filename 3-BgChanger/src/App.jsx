import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2'>
        <div className='flex flex-wrap gap-3 p-1 rounded-xl font-serif font-bold bg-red-300'>
          <button onClick={() => setColor("red")} className='mr-3 text-black rounded-2xl p-2.5 w-15 shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className='mr-3 text-black rounded-2xl p-2.5 w-15 shadow-lg' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className='mr-3 text-black rounded-2xl p-2.5 w-15 shadow-lg' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("yellow")} className='mr-3 text-black rounded-2xl p-2.5 w-15 shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("orange")} className='mr-3 text-black rounded-2xl p-2.5 w-15 shadow-lg' style={{ backgroundColor: "orange" }}>Orange</button>
          <button onClick={() => setColor("white")} className='mr-3 text-black rounded-2xl p-2.5 w-15 shadow-lg' style={{ backgroundColor: "white" }}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
