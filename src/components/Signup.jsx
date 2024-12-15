import React, { useState } from 'react'
import Login1 from '../assets/login.jpeg'
import { Link } from 'react-router-dom'
// import Login1 from '../../public/vite.svg'

const Signup = () => {
    const [credential, setCredential] = useState({
        name: 'cresha',
        email: 'c@gmail.com',
        password: 'fdfdsfds'
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form is submitted");
        
    }

    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='login-img' src={Login1} alt='login image' />
                </div>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" name='name' value={credential.name} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" name='email' value={credential.email} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" name='password' value={credential.password} onChange={handleChange} class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                        <Link className="nav-link" to='/login'>Already have accout? login</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
