import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

// import TooltipBox from "./TooltipBox";
import { ImPointRight } from "react-icons/im";

// const techStack = [
//   { name: " HTML, CSS,", extra: "" },
//   { name: "JavaScript,", extra: "ES6" },
//   { name: "TypeScript,", extra: "Zod Schema Validation" },
//   { name: "React,", extra: "Redux,Router,React-Query" },
//   { name: "React Native,", extra: "React Navigation" },
//   { name: "Node.Js,", extra: "Express, JWT" },
//   { name: "NoSQL database,", extra: "MongoDB" },
// ];

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
              Hi Everyone, I am <span className="purple">Feixiang Ren </span>
              from <span className="purple"> Sydney, NSW, Australia.</span>
              <br />
              <br />
              I’m a junior full-stack developer with a strong passion for software, game, and web
              development.
              <br />
              <br />
              I’m dedicated to writing clean, maintainable code and enjoy contributing to projects
              that focus on real-world impact and good user experience.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Playing Games
                </li>
                <li className="about-activity">
                  <ImPointRight /> Drawing
                </li>
                <li className="about-activity">
                  <ImPointRight /> Movies
                </li>
                <li className="about-activity">
                  <ImPointRight /> Traveling
                </li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
