import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import "../css/video.css"

import Earth from "../assets/Earth.mp4";
import logo from "../assets/logo192.png"

export default function MyVideo() {
    return (
        <>
            <div className="myvideo">
                <video src={Earth} autoPlay loop muted className="video"></video>
                <NavLink to="/" className="navbar-brand nav-link logo">
                    <img src={logo} alt="logo" />
                </NavLink>
                <div className="label" style={{ textTransform: 'uppercase' }}>
                    {/* <h1>Aerometic</h1> */}
                    <h1>Care</h1>
                </div>
                <Link to="home" className="scroll" smooth={true} spy={true}><img src={process.env.PUBLIC_URL + './scroll_wheel.gif'} alt="logo" /></Link>
                <div className="container-fluid">
                    <span className="ani">
                        <h1><span className="hide">FOR </span>AERO<span className="hide">SOL</span></h1>
                    </span>
                    <span className="ani1">
                        <h1><span className="hide">COS</span>METIC <span className="hide">SERVICES</span></h1>
                    </span>
                </div>
            </div>
        </>
    )
}