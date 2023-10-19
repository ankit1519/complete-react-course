import { useState,useCallback } from 'react'
import './App.css'

function App() {

  const [length,setLength]=useState(8)
  const [isNum, setIsNum]=useState(false)
  const [isChar, setIsChar]=useState(false)
  const [password, setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNum) str+="0123456789"
    if(isChar) str+="~`!@#$%^&*(){}][=+-"

    for(let i=1;i<=length;i++){
      let charr=Math.floor(Math.random()*str.length+1)
      pass=str.charAt(charr);
    }
    setPassword(pass)
  },[length,isNum,isChar,setPassword])
  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password generator</h1>
      <div className="w-full max-w-md mx-auto mx"></div>
    </>
  )
}

export default App
