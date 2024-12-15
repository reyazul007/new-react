import React from 'react'
import Login1 from '../assets/login.jpeg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='login-img' src={Login1} alt='login image'/>
                </div>
                <div className='col-md-6'>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                       
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <Link className="nav-link" to='/signup'>Create accout? </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
