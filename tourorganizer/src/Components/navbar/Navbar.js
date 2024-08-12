import React from 'react';
import './Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
export default function Navbar(){
    const navigate = useNavigate();
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/"><img src="https://img.freepik.com/free-vector/gradient-gym-page-linkedin-profile-picture_742173-11442.jpg?t=st=1721897230~exp=1721900830~hmac=ccf5482db677e982247255862244e61a146e2156d2a820f092b0112355444862&w=740" alt='travel logo' height={40} width={50}/></a>
                <h3>KineticKraze</h3>
            </div>
            <ul className="navbar-link">
                <li><a href="/">Home</a></li>
                <li><a href="/workout"> Workout</a></li>
                <li><a href="/purchase">Shop</a></li>
                <li><a href="/dietplan"> Diet Plan</a></li>
                <li><a href="/about/about-us">About</a></li>
                <li><a href="/contact">Contact</a></li>
                {/* <li><Button onClick={()=> navigate('/login')}><AccountCircleIcon/></Button></li> */}
                <li><Button onClick={() => navigate('/checkout')} >
        <LocalMallOutlinedIcon style={{color: "white"}}/>
      </Button></li>
            </ul>
        </nav>
  );
}

