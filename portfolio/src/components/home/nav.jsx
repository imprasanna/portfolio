import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "../../styles/nav.scss";

function Nav() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const normalStyle = {
    visibility: "hidden",
  };

  const hoveredStyle = {
    visibility: "visible",
  };

  const handleMouseOver = (itemName) => {
    setHoveredItem(itemName);
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
    setIsHovered(false);
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
              onMouseOver={() => handleMouseOver("Home")}
              onMouseOut={handleMouseOut}
            >
              <span>$</span>
              Home
            </div>

            <div
              className={hoveredItem === "Resources" ? "hovered" : ""}
              onMouseOver={() => handleMouseOver("Resources")}
              onMouseOut={handleMouseOut}
            >
              <span>$</span>
              Resources
            </div>

            <div
              className={hoveredItem === "Blog" ? "hovered" : ""}
              onMouseOver={() => handleMouseOver("Blog")}
              onMouseOut={handleMouseOut}
            >
              <span className={hoveredItem === "Blog" ? "hovered" : ""}>$</span>
              Blog
            </div>

            <div
              className={hoveredItem === "Whoami" ? "hovered" : ""}
              onMouseOver={() => handleMouseOver("Whoami")}
              onMouseOut={handleMouseOut}
            >
              <span className={hoveredItem === "Whoami" ? "hovered" : ""}>
                $
              </span>
              Whoami
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
