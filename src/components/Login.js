import React, { useState ,useEffect} from 'react'
import './allcss/Login.css'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const fetcher =useNavigate();
    const json1={};
    const [credentials,setcredentials]=useState({email:"",password:""})
    const handlesubmit=async(e)=>
    {
     e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
          },
       
      body: JSON.stringify({email:credentials.email,password:credentials.password}) 
    });
    const json =await response.json();
    console.log(json);
     if(json.success)
    {
        //save the auth token and redirect
       localStorage.setItem('token',json.authtoken);
        fetcher("/");
        alert("Logged in sucessfully");


    }
    else      
    {
        alert("invalid credentiWals");

    }

    }
    
    const onChange=(e)=>
{
   setcredentials({...credentials,[e.target.name]:e.target.value})
} 
  return (
    <div className='loginpage'>
     

        <form  className='loginform' onSubmit={handlesubmit} >
      <h2 className='text-center' style={{"marginleft":"10px"}}>Login </h2>
  <div className="">
    <label htmlFor="exampleInputEmail1 mx-2">Email address</label>
    <input type="email" id="email" name="email" className="inputs form-control my-1"  aria-describedby="emailHelp" placeholder="Enter email" value={credentials.email}  onChange={onChange}/>
      </div>
  <div className="">
    <label htmlFor="exampleInputPassword1 mx-2 my-2">Password</label>
    <input type="password"id="password" name="password" className="inputs form-control my-1"  placeholder="Password" value={credentials.password} onChange={onChange}/>
  </div>
  <div className='signupalready'>
    <span>Don't have account ?</span><Link style={{"textDecoration":"none"}} to="/signup">Signup here</Link>
  </div>
  <div className="loginbutton">
  <button type="submit" className="btn btn-primary my-3">Login</button>
  </div>

</form>
   
    </div>
  )
}

export default Login

/*
ahubh@gmail.com
djsidfhuihdi
  
  */