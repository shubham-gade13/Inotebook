import { useEffect } from "react";
import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./allcss/Navbar.css"

import {
  Link
} from "react-router-dom";
const Navbar = () => {

  const fetcher=useNavigate();

  const handlelogout=()=>
  {
    localStorage.removeItem('token');
    fetcher('/login');

  }

  let location = useLocation();
  useEffect(() => {
   console.log(location);

  }, [location]);

  return (
   
    <nav className="navbar navbar-expand-lg {bg-dark} text-light"  id="navbarid" >
     
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">inotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link style={{"color":"white"}} className={`nav-link  ${location.pathname==='/login'? "text-danger":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link style={{"color":"white"}} className={`nav-link  ${location.pathname==='/about'? "text-danger":""}`}to="/about">About</Link>
        </li>
      </ul>
     
    </div>
  </div>
  {!localStorage.getItem('token')?<form id="buttons" className="d-flex flex-row-reverse"><Link  className="btn btn-dark mx-1" to="/login" role="button" >Login</Link>
        <Link  className="btn btn-dark mx-1" to="/signup" role="button" href="">Signup</Link>
        </form>:  <button onClick={handlelogout}  className="btn btn-dark mx-3" >Logout</button>}
 </nav> 
 
 )
}

export default Navbar