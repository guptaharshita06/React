import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  //first -> side-effect function
  //second -> clean-up function
  //third -> comma seperated dep list

  //variation: 1
  //runs on every render
  useEffect(() => {
    alert("I will run on each render")
  })
  
  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
      <br/>
      Count is: {count}
    </div>
  )
}

export default App
