import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login("Amypo");
        navigate("/dashboard");
    }

  return (
    <div>
        <h3>Login Page</h3>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login