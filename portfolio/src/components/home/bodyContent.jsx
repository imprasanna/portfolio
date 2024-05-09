import React from "react";
import illustration from "../assets/illustration.png";
import "../styles/bodyContent.scss";

function BodyContent() {
  return (
    <div className="container">
      <img className="illustration" src={illustration}></img>
    </div>
  );
}

export default BodyContent;
