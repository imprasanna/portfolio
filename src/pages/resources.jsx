import React from "react";
import Nav from "../components/home/nav";
import "../styles/resources.scss";
import { tableDocs, tableHuntingRes } from "../assets/resourceTable";

const Resources = () => {
  return (
    <>
      <Nav />
      <div
        className="resources-wrapper"
        style={{ margin: "0 auto", paddingTop: "3rem" }}
      >
        <div>
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
                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {doc.content}
                    </a>
                  </td>
                  <td>{doc.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
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
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.content}
                    </a>
                  </td>
                  <td>{resource.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Resources;
