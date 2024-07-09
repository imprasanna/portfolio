import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "../../styles/footer.scss";

function Footer() {
  return (
    <div>
      <div className="footer-wrapper">
        <div className="footer">
          <a href="https://www.instagram.com/acharya.prasanna1024/">
            <FiInstagram className="social-icon" />
          </a>

          <a href="https://www.linkedin.com/in/prasanna-acharya-30b84b227/">
            <FaLinkedinIn className="social-icon" />
          </a>

          <a href="https://github.com/imprasanna">
            <FaGithub className="social-icon" />
          </a>

          <a href="https://twitter.com/prasanna1024">
            <BsTwitterX className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
