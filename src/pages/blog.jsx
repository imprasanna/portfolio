import React from "react";
import Nav from "../components/home/nav";

function Blog() {
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
        }}
      >
        <div>Under development!</div>
      </div>
    </div>
  );
}

export default Blog;
