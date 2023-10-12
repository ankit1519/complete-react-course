
import {useState} from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(1)
  
  const addC=function(){
    setCounter(counter+1)
    
  }
  const removeC=function(){
    setCounter(counter-1)
    
  }
  return (
    <>
     <h1>Counter Project</h1>
     <h2>Count: {counter}</h2>
     <button onClick={addC}>Add</button>
     <button onClick={removeC}>remove</button>
    </>
  )
}

export default App
