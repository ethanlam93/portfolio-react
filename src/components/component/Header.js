import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo2.png";
import resume from "../../images/Resume-Ethan.pdf";

function Header () {
    const currentPage = useLocation().pathname;
    console.log(currentPage)
    const [isActive, setActive] = useState(false);
    return (
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <figure>
                            <img className="logo" src={logo} width="200px" height="200px" alt="Ethan Lam">
                            </img>
                        </figure>
                        <span className={`navbar-burger burger ${ isActive ? `is-active` : ``}`} data-target="navbarMenuHeroA" onClick={() => {setActive(!isActive)}}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroA" className={`navbar-menu ${ isActive ? `is-active` : ``}`}>
                        <div className="navbar-end">
                            <Link className={`navbar-item  ${currentPage === "/portfolio-react" ? `page` : ``}`} to="/portfolio-react">
                                Home
                            </Link>
                            <Link className={`navbar-item  ${currentPage === "/portfolio/" ? `page` : ``}`}  to="/portfolio/">
                                Portfolio
                            </Link>
                            <Link className={`navbar-item ${currentPage === "/contact/" ? `page` : ``} `}  to="/contact/">
                                Contact
                            </Link>
                            <a className="navbar-item" href={resume} type="application/pdf"
                                target="_blank">
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header