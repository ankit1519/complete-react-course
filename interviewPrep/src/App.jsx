import { useState } from 'react'
import './App.css'

function App() {
  const [value,setValue]=useState(1);
  let mv=value*5;
  let mulby5=()=>{
    setValue(value+1)
  }
  return (
    <>
      <h1>Main Value:{value}</h1>
      <h2>Multiplied Value: {mv}</h2>
      <button onClick={mulby5}>Click to multiply by 5</button>
    </>
  )
}

export default App
