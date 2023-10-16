import React from "react";
import Particle from "../Particle";

import { Container } from "react-bootstrap";
import { Tabs } from "antd";

import WebProjects from "./WebProjects";
import AppProjects from "./AppProjects";

const mainProjects = [
  { name: "Web Projects", children: <WebProjects /> },
  { name: "App Projects", children: <AppProjects /> },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>

      <Tabs
        defaultActiveKey="1"
        type="card"
        centered
        animated={true}
        items={mainProjects.map((item, i) => {
          return {
            label: item.name,
            key: i,
            children: item.children,
          };
        })}
      />

      {/* <WebProjects></WebProjects> */}
    </Container>
  );
}

export default Projects;
