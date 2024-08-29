import React from "react";
import illustration from "../../assets/illustration.png";
import "../../styles/bodyContent.scss";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";

function BodyContent() {
  return (
    <div className="content">
      <div className="wrapper">
        <div>
          <img className="illustration" src={illustration}></img>
        </div>

        <div className="text-block">
          <div className="text-main">
            Hi there! I'm <br /> <span>.</span>
          </div>
          <div className="text-description">
            Based on Nepal, I am a passionate cybersecurity enthusiast, inclined
            towards offensive security. I have embarked on a journey of
            self-learning, driving myself with curiosity and thirst for
            knowledge. My fascination with the field ignited when I realized
            that the journey itself is the destination -- a continuous
            exploration of new concepts and strategies. I immerse myself in
            variety of learning experiences to hone my skills and keep up with
            my dream as a cybersecurity researcher.
          </div>
        </div>
      </div>

      <div className="footer-wrapper">
        <div className="footer">
          <a href="https://www.instagram.com/i_m_prasanna__/">
            <FiInstagram className="social-icon" />
          </a>

          <a href="https://www.linkedin.com/in/prasanna-acharya-30b84b227/">
            <FaLinkedinIn className="social-icon" />
          </a>

          <a href="https://github.com/imprasanna">
            <FaGithub className="social-icon" />
          </a>

          <a href="https://x.com/o4s1s_haaacks">
            <BsTwitterX className="social-icon" />
          </a>

          <a href="https://medium.com/@prasanna.acharya">
            <FaMedium className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
