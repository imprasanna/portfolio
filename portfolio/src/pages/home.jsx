import React from "react";
import "../styles/home.scss";
import Nav from "../components/home/nav";
import BodyContent from "../components/home/bodyContent";

function Home() {
  return (
    <div className="home">
      <Nav />
      <BodyContent />
    </div>
  );
}

export default Home;
