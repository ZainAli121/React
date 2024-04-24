import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind</h1>
      <Nav logoName = "Zain Ali | Props Learning" btnText="Click me"/>
      <Nav logoName="React" btnText = "Click" />
     

    </>
  )
}

export default App
