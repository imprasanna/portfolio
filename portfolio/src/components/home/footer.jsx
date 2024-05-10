import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "../../styles/footer.scss";

function Footer() {
  return (
    <div>
      <div className="footer">
        <FiInstagram className="social-icon" />
        <FaLinkedinIn className="social-icon" />
        <FaGithub className="social-icon" />
        <BsTwitterX className="social-icon" />
      </div>
    </div>
  );
}

export default Footer;
