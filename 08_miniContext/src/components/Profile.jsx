import React,{useContext,useState} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    
    const {user}=useContext(UserContext)
    if(!user) return <h2>Please Login</h2>
    return <> Welcome {user.username}</>
}

export default Profile