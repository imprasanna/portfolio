import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "../../styles/nav.scss";

function Nav() {
  // Define hover state for each menu item separately
  const [hoveredItem, setHoveredItem] = useState(null);

  // Function to handle mouseover event
  const handleMouseOver = (itemName) => {
    setHoveredItem(itemName);
  };

  // Function to handle mouseout event
  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  return (
    <div className="main">
      <div className="outer-container">
        <div className="container">
          <div className="main-logo">
            <img className="logo" src={logo} alt="Logo" />
            <div>OASIS</div>
          </div>
          <div className="nav-menu">
            <div
              className={hoveredItem === "Home" ? "hovered" : ""}
              onMouseEnter={() => {
                handleMouseOver("Home");
                console.log("Hovered");
              }}
              onMouseOut={handleMouseOut}
            >
              <span>$</span>Home
            </div>

            <div
              className={hoveredItem === "Resources" ? "hovered" : ""}
              onMouseOver={() => handleMouseOver("Resources")}
              onMouseOut={handleMouseOut}
            >
              <span>$</span>Resources
            </div>

            <div
              className={hoveredItem === "Blog" ? "hovered" : ""}
              onMouseOver={() => handleMouseOver("Blog")}
              onMouseOut={handleMouseOut}
            >
              <span>$</span>Blog
            </div>

            <div
              className={hoveredItem === "Whoami" ? "hovered" : ""}
              onMouseOver={() => handleMouseOver("Whoami")}
              onMouseOut={handleMouseOut}
            >
              <span>$</span>Whoami
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
