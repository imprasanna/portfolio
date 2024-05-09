import React from "react";
import Nav from "../components/home/nav";
import BodyContent from "../components/home/bodyContent";
import Rand from "./rand";

function Home() {
  return (
    <>
      <Nav />
      <div className="home">
        <BodyContent />
      </div>
    </>
  );
}

export default Home;
