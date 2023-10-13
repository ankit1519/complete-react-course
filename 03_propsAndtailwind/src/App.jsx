import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
 

  return (
    <>
      <h1 className='bg-green-400 p-4 mb-4' >TT</h1>
     <Card uname="Ankit"  bt="textMe"/>
     <Card uname="Raj" bt="msg"/>

    </>
  )
}

export default App
