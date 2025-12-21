import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [loginForm, setLoginForm] = useState({
        email :'',
        password: '',
        rememberMe : false,
        });

    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Input Validation
    if(!loginForm.email && !loginForm.password){
        setError('Please enter both email and password.');
        return;
    } else if(!loginForm.email){
        setError('Please enter your email.');
        return;
    } else if(!loginForm.password){ 
        setError('Please enter your password.');
        return;
    }
    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(loginForm.email.trim())) {
        setError('Please enter a valid email address.');
        return;
    }
    // Password strength check
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!passwordRegex.test(loginForm.password.trim())){
        setError('Please enter a valid password.');
        return;
    }
    // Backend Call
    const response = await fetch("https://localhost:8000/login", {
        method : 'POST',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify(loginForm)
    });

    // ❗️Check for HTTP errors (like 401, 500, etc.)
    if(!response.ok){
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (data.success) {
        navigate('/predictor')
    }
    else {
        setError('Invalid credentials');
    }}
    return(
        <form onSubmit={handleSubmit}>
        <div className="text_area">
        <input
            type = "email"
            name = "email"
            value = {loginForm.email}
            onChange = {handleChange}
            placeholder = "Email"
        />   
        <input
            type = "password"
            name = "password"
            value = {loginForm.password}
            onChange= {handleChange}
            placeholder= "Password"
        />
           <label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={loginForm.rememberMe}
            onChange={handleChange}
          />
          Remember Me
        </label>
        <button type = "submit">
           Login 
        </button>
        </div>
        
        </form>
    )
};

export default LoginForm;