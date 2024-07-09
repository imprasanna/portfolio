import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "../../styles/nav.scss";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const handleMouseOver = (itemName) => {
    setHoveredItem(itemName);
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
    setIsHovered(false);
  };

  return (
    <>
      <div className="outer-container">
        <div className="container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="main-logo">
              <img className="logo" src={logo} alt="Logo" />
              <div>OASIS</div>
            </div>
          </Link>
          <div className="nav-menu">
            <Link to="/" className={currentPath === "/" ? "" : "inactive"}>
              <div
                className={hoveredItem === "Home" ? "hovered" : ""}
                onMouseOver={() => handleMouseOver("Home")}
                onMouseOut={handleMouseOut}
              >
                <span>$</span>
                Home
              </div>
            </Link>

            <Link
              to="/resources"
              className={currentPath === "/resources" ? "" : "inactive"}
            >
              <div
                className={hoveredItem === "Resources" ? "hovered" : ""}
                onMouseOver={() => handleMouseOver("Resources")}
                onMouseOut={handleMouseOut}
              >
                <span>$</span>
                Resources
              </div>
            </Link>

            <Link
              to="/blog"
              className={currentPath === "/blog" ? "" : "inactive"}
            >
              <div
                className={hoveredItem === "Blog" ? "hovered" : ""}
                onMouseOver={() => handleMouseOver("Blog")}
                onMouseOut={handleMouseOut}
              >
                <span className={hoveredItem === "Blog" ? "hovered" : ""}>
                  $
                </span>
                Blog
              </div>
            </Link>

            <Link
              to="/whoami"
              className={currentPath === "/whoami" ? "" : "inactive"}
            >
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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
