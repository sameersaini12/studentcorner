import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

function Home() {

    function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

    return (
        <div className="home">
            <div className="navbar">
            <a href="#" className="icon">
                    <i class="fa fa-bars"></i>
            </a>
                <div className="nav-logo">
                    <h1>StudentCorner</h1>
                </div>
                
                <div className="nav-right">
                    <h3><a href="#" style={{textDecoration: "none" , color: 'inherit' }}>Home</a></h3>
                    <h3>About </h3>
                    <h3>Our Team</h3>
                    <h3><Link to="/update" style={{textDecoration: "none" , color: 'inherit' }} >Updates</Link></h3>
                    <h3><Link to="/contact" style={{textDecoration: "none" , color: 'inherit' }} >Contact</Link></h3>
                    
                </div>
               
            </div>
        </div>
    )
}

export default Home
