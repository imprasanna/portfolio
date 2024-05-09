import React from "react";
import "../styles/home.scss";
import Nav from "../components/nav";
import BodyContent from "../components/bodyContent";

function Home() {
  return (
    <div className="home">
      <Nav />
      <BodyContent />
    </div>
  );
}

export default Home;
