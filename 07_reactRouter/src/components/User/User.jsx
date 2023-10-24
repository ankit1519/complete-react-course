import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {uid}=useParams()
  return (
    <div className='px-4 py-4 bg-black text-white text-3xl text-center'>User:{uid}</div>
  )
}

export default User