import React, { Children } from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto p-4 '>{Children}</div>
  )
}

export default Container