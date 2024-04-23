import { useState } from 'react'
import './App.css'

function App() {
  // this is called hooks, they are used when we want to propagate changes to our UI
  // changing at one part will make changes to all other parts
  let [counter, setCounter] = useState(0);

  const addCounter = () =>{
    counter += 1;
    setCounter(counter)
  }
  
  const removeCounter = () =>{
    counter -= 1;
    setCounter(counter)
  }

  const checkCounter = () =>{
    if (counter >=10) {
      alert("You have reached the limit!")
      setCounter(counter = 0)
    }

    if (counter < 0) {
      alert("Counter cannot add Negative values!")
      setCounter(counter = 0)
    }
  }
  
  return (
    <>
      <h1>Welcome to</h1>
      <h2>Program Counter!</h2>
      <h3>Counter: {counter}</h3>
      {checkCounter()}
      <button onClick={addCounter}>Add</button>
      <button onClick={removeCounter}>Remove</button>
    </>
  )
}

export default App
