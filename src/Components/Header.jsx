import React from "react"
import logo from "../Assets/img/F.png";
import oodi from "../Assets/img/oodi.png";
import { Link } from "react-router-dom";
import "../Assets/styles/Header.css"


export default function Navbar() {
    return (

        <div className="nav">
          <div className="leftSide">
            <img src={logo}  className="logo" />
            <img src={oodi}  alt="" />
          </div>
            
                
          
             <div className="rightSide">
              <Link to="/" className="navLink">Home</Link>
              <Link to="/Recipes" className="navLink">Recipes</Link>
              <Link to="/About" className="navLink">About</Link>
              <Link to="/Contact" className="navLink">Contact</Link>
              
            </div>
           




        </div>

    )
}


