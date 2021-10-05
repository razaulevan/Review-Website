import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center header-bottom">
                    <div className="header">
                        <nav className="d-flex justify-content-start">
                            <Link to="/home">Home</Link>
                            <Link to="/about">ABout</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/contactUs">Contact Us</Link>
                        </nav>
                    </div>
                    <div className="col-md-6">

                        <h1 className="title">
                            Welcome to <br /> <span className="care">SaReGaMaPa</span>
                        </h1>


                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;