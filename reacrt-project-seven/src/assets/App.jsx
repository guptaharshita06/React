import { useState } from 'react'
import './App.css'

function App() {

  function handleClick() {
    alert("I am Clicked");
  }

  function handleMouseOver() {
    alert("Para k upar mouse lekar aaye ho")
  }

  function handleInputChange() {
    // console.log("Input me value change hui h");
    console.log("Value till now: ", e.target,value);
  }

  function handleSubmit() {
    e.preventDefault();
    //i am writing my custom behaviour down
    alert("Form Submit krdu kya");
  }

  return (
    <div>
      <button onClick={alert("Button click hua h")}>
        Click me
      </button>
      {/* <form onSubmt={handleSubmit}>
        <input type='text' onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form> */}
      {/* <p onMouseOver={handleMouseOver} style={{border:"2px solid black"}}>
        I am a Para
      </p>
      <button onClick={handleClick}>
        Click me
      </button> */}
    </div>
  )
}

export default App
