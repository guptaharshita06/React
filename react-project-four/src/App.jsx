import { useState } from 'react'

import './App.css'
import Card from './componenets/Card'
import Button from './componenets/Button'


function App() {
  const [count,setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <Button handleClick={handleClick} text="Click me">
        <h1>{count}</h1>
      </Button>
      {/* <Card name="Love Babbar">
        <h1>Best WEB DEV Course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>
      <Card children="Main ek children hu">
        Hello Jee, Kaise ho saare
      </Card> */}
    </div>
  )
}
