import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../../styles/dropDownMenu.scss";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-menu" ref={menuRef}>
      <div className="dropdown-toggle" onClick={toggleMenu}>
        <RxHamburgerMenu className="ham-icon" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/resources">Resources</Link>
          {/* <Link to="/blog">Blog</Link> */}
          <Link to="/whoami">Whoami</Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
