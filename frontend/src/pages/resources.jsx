import React from "react";
import Nav from "../components/home/nav";
import "../styles/resources.scss";
import { tableDocs, tableHuntingRes } from "../assets/resourceTable";

const Resources = () => {
  return (
    <div>
      <Nav />
      <div style={{ width: "80%", margin: "0 auto", paddingTop: "3rem" }}>
        <h1>My documentations</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Content</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tableDocs.map((doc) => (
              <tr key={doc.id}>
                <td>
                  <a href={doc.link}>{doc.content}</a>
                </td>
                <td>{doc.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Bug hunting resources</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Content</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {tableHuntingRes.map((resource) => (
              <tr key={resource.id}>
                <td>
                  <a href={resource.link}>{resource.content}</a>
                </td>
                <td>{resource.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resources;
