import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import uptown1 from "../../Assets/Projects/uptown/uptown-1.jpg";
import uptown2 from "../../Assets/Projects/uptown/uptown-2.jpg";
import uptown3 from "../../Assets/Projects/uptown/uptown-3.jpg";
import uptown4 from "../../Assets/Projects/uptown/uptown-4.jpg";
import uptown5 from "../../Assets/Projects/uptown/uptown-5.jpg";

import phpLms1 from "../../Assets/Projects/php-lms/php-lms-1.jpg";
import phpLms2 from "../../Assets/Projects/php-lms/php-lms-2.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              images={[phpLms1, phpLms2]}
              imgPath={phpLms1}
              isBlog={false}
              title="PHP LMS"
              description="PHP library management system"
              ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              images={[uptown1, uptown2, uptown3, uptown4, uptown5]}
              imgPath={uptown1}
              isBlog={false}
              title="Uptown project"
              description="A MERN stack web app. Node.js for backend, protected route, full account system (signup,login ect). Shopping system build with React-Stripe. Email system build with SendGrid. Chatbot build with"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
