import React, { useState ,useEffect} from 'react'

import { useNavigate } from "react-router-dom";

import "./allcss/Signup.css"
import { Link } from 'react-router-dom';
   
const Signup = () => {
  
  const navigate =useNavigate();
  const [credentials,setcredentials]=useState({name:"", email:"",password:"",cpassword:""})
  
  
  
  const handlesubmit=async(e)=>
  {
    e.preventDefault();
    const {name,email,password}=credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
     
    body: JSON.stringify({name,email,password}) 
  });
  const json =await response.json();
  console.log(json);
if(json.sucess)
 {
      //save the auth token and redirect
     localStorage.setItem('token',json.authtoken);
      navigate("/");

  }
 else      
  {
      alert("invalid credentials");

  }

  }
  
  const onchange=(e)=>
{
 setcredentials({...credentials,[e.target.name]:e.target.value})
} 

  return (
    <div className='signuppage'> 
      <form className='signupform my-4' onSubmit={handlesubmit}>
    <h2 className='text-center'>Signup</h2>
  <div className="mb-3">
    <label HtmlFor="name" className="form-label">Name</label>
    <input type="text" placeholder='Enter your name' className="form-control" id="name" name="name" aria-describedby="emailHelp"  onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label HtmlFor="email" className="form-label">Email address</label>
    <input type="email"  placeholder='Enter your email' className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onchange}/>
      </div>
  <div className="mb-3">
    <label HtmlFor="password" className="form-label">Password</label>
    <input type="password" placeholder='Password' className="form-control" id="password" name="password" onChange={onchange} minLength={4} required/>
  </div>
  <div className="mb-3">
    <label HtmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password"placeholder='Confirm Password' className="form-control" id="cpassword" name="cpassword" onChange={onchange}/>
  </div>
  <div className='signupalready'>
    <span>Already have account ?</span><Link style={{"textDecoration":"none"}} to="/login">Login</Link>
  </div>
 <div className="signupbutton">
  <button type="submit" className="btn btn-primary">Signup</button>

 </div>
</form>
    </div>
  )
}

export default Signup;

