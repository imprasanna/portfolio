import React from "react";
import illustration from "../../assets/illustration.png";
import "../../styles/bodyContent.scss";

function BodyContent() {
  return (
    <div className="container">
      <img className="illustration" src={illustration}></img>
      <div className="text-block">
        <div className="text-main">
          Hi there! I'm <br /> <strong>Prasanna Acharya</strong>
        </div>
        <div className="text-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          cupiditate soluta iste aperiam ipsam voluptatum ad doloremque dolor
          quia vel commodi, cum omnis assumenda magnam voluptates maxime
          consequatur libero totam animi molestias quasi repellat magni sed.
          Officia quasi, ad nam soluta reiciendis enim, necessitatibus ab
          aspernatur repellendus perferendis commodi quam deserunt beatae eum
          nesciunt!
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
