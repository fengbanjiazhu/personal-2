import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import TimeLine from "./TimeLine";
import Home2 from "../Home/Home2";
import Contact from "../Home/Contact";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <Home2 />
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={5} style={{ paddingTop: "120px", textAlign: "right" }} className="about-img">
            <h1 style={{ fontSize: "2em", paddingBottom: "2rem" }}>
              My <strong className="purple">Journey </strong>
            </h1>
            <TimeLine />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2em", paddingBottom: "20px" }}>
              My <strong className="purple">Skillset </strong>
            </h1>
            <Techstack />
          </Col>
        </Row>

        <Github />

        <Contact />
      </Container>
    </Container>
  );
}

export default About;
