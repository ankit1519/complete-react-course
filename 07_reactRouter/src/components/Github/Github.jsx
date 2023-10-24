import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
   /* const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/ankit1519')
        .then(response=>response.json()).then(data=>{
            setData(data)
        })
    },[])*/
    const data=useLoaderData()
  return (
    <>
        <div className='bg-blue-600 text-white p-4 m-2 text-center text-4xl'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt=" github pic" width={200} />
        </div>
    </>
  )
}

export default Github
export const githubLoader=async()=>{
    const response=await fetch('https://api.github.com/users/ankit1519')
    return response.json()
}