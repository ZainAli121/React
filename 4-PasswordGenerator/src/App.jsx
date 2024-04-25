import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null)

  const copyPassToClipBoard = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '@#!$&(){}'

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password = password + str.charAt(char)
    }
    setPassword(password)
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()

  }, [passwordGenerator, length, numAllowed, charAllowed])

  return (
    <>
      <div className='max-w-lg mx-auto bg-gray-700 text-orange-400 my-8 p-3 rounded shadow-md'>
        <h1 className='text-4xl text-white mb-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            readOnly
            placeholder='Password'
            ref={passwordRef}
            className='w-full px-3 py-1 outline-none'
          />
          <button
            onClick={copyPassToClipBoard}
            className='bg-blue-600 p-2 w-12 text-white'>
            Copy
          </button>
        </div>
        <div className='flex gap-9'>
          <div className=' flex py-1 '>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className='ml-3'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id='numInput'
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              id="charInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
