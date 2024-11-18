import React from "react"
import "../App.css"
import logo from "../img/logo.jpg"


const Navbar = ()=>{
    return(
        <div className="nav">
            <img src={logo} className="logo"/>
            <h1 className="head">Meme Generator</h1>

        </div>
    )
}

export default Navbar;