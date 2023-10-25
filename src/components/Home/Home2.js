import React from "react";
import { Tooltip } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I am a junior full stack web developer with a strong passion in web development
              <br />
              <br />
              My tech stack includes
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, <Tooltip title="ES6,">JavaScript</Tooltip>,{" "}
                  <Tooltip title="Zod Schema Validation">TypeScript</Tooltip>,{" "}
                  <Tooltip title="Redux,Router,React-Query">React</Tooltip>,{" "}
                  <Tooltip title="React Navigation">React Native</Tooltip>,{" "}
                  <Tooltip title="Express, JWT">Node.Js</Tooltip>.{" "}
                </b>
                and{" "}
                <b className="purple">
                  <Tooltip title="MongoDB">NoSQL database</Tooltip>
                </b>
              </i>
              <br />
              <br />I am Familiar with&nbsp;
              <i>
                <b className="purple"> PHP, MySQL database.</b>
              </i>
              <br />
              <br />
              <br />I never stopped self-developing and currently seeking for a{" "}
              <i>
                <b className="purple">new start.</b>
              </i>
              <br />
              Looking forward to have an opportunity that will allow me to work with experienced
              professionals and contribute to the development of&nbsp;
              <i>
                <b className="purple">high-performance website applications.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fengbanjiazhu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Fengbanjiazhu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/feixiang-r-10b266261/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
