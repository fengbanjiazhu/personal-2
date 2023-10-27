import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import TooltipBox from "./TooltipBox";

const techStack = [
  { name: " HTML, CSS,", extra: "" },
  { name: "JavaScript,", extra: "ES6" },
  { name: "TypeScript,", extra: "Zod Schema Validation" },
  { name: "React,", extra: "Redux,Router,React-Query" },
  { name: "React Native,", extra: "React Navigation" },
  { name: "Node.Js,", extra: "Express, JWT" },
  { name: "NoSQL database,", extra: "MongoDB" },
];

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
              My tech stack includes{" "}
              {techStack.map((item, index) => {
                return <TooltipBox key={index} text={item.name} tip={item.extra} />;
              })}
              and{" "}
              <TooltipBox
                text="Other Third Party Libraries."
                tip="Google Firebase, Strip, SendGrid"
              />
              <br />
              <br />I am Familiar with&nbsp;
              <b className="purple"> PHP, MySQL database.</b>
              <br />
              <br />
              <br />I never stopped self-developing and currently seeking for a{" "}
              <b className="purple">new start.</b>
              <br />
              Looking forward to have an opportunity that will allow me to work with experienced
              professionals and contribute to the development of&nbsp;
              <b className="purple">high-performance website applications.</b>
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
