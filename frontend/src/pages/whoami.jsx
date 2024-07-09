import React from "react";
import Nav from "../components/home/nav";

function Whoami() {
  return (
    <div>
      <Nav />
      <div
        style={{
          fontSize: "2rem",
          display: "flex",
          height: "80vh",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>This will be available soon!</div>
      </div>
    </div>
  );
}

export default Whoami;
