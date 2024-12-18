import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {userId, userName} = useParams()
  return (
    <div className='container'>
      <h4>User Profile</h4>
      <ul>
        <li>User Id: {userId}</li>
        <li>User Name:{userName}</li>
      </ul>
    </div>
  )
}

export default User
