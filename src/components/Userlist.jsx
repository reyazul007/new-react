import React from 'react'
import { useNavigate } from "react-router-dom";

const Userlist = () => {
    const navigate= useNavigate()
    const users = [
        { id: 1, name: 'jhon' },
        { id: 2, name: 'alex' },
        { id: 3, name: 'ram' },
        { id: 4, name: 'shyam' }
    ]
    const handleUser= (userId, userName)=>{
        navigate(`/user/${userId}/${userName}`)
    }
    return (
        <div className='container mt-5'>
            <h4>User List</h4>
            <ul>
                {users.map((user) => (
                    <li key={user.id} onClick={() => handleUser(user.id, user.name)}>{user.name}</li>
                )
                )}

            </ul>
        </div>
    )
}

export default Userlist
