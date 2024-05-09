import React from "react";
import logo from "../assets/logo.png";
import "../styles/nav.scss";

function Nav() {
  return (
    <div className="main">
      <div className="outer-container">
        <div className="container">
          <div className="main-logo">
            <img className="logo" src={logo}></img>
            <div>OASIS</div>
          </div>
          <div className="nav-menu">
            <div>Home</div>
            <div>Resources</div>
            <div>Blog</div>
            <div>Whoami</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
