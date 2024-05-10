import React from "react";
import Nav from "../components/home/nav";

const Resources = () => {
  return (
    <div>
      <Nav />
      <div style={{ width: "80%", margin: "0 auto", paddingTop: "3rem" }}>
        <h1>My documentations</h1>
        <ul>
          <li>
            <a href="https://app.gitbook.com/o/fxVR21uBKOdqyUExlvsb/s/iz2l2usc8AWKK3DkTrmz/">
              Hacking tools
            </a>
          </li>

          <li>
            <a href="https://app.gitbook.com/o/fxVR21uBKOdqyUExlvsb/s/JPxeRYXcXIfGgY3cEQjH/">
              OSINT
            </a>
          </li>

          <li>
            <a href="https://oasis1x1.notion.site/PortSwigger-Web-Security-Academy-62cd81b07b814bf28e6bb137345b4535">
              PortSwigger labs
            </a>
          </li>

          <li>
            <a href="https://www.notion.so/oasis1x1/eJPTv2-ac2ca5313b4d40cdab867485d6e6cbea">
              eJPTv2 notes
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
