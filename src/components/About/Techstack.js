import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiPython,
  DiPostgresql,
} from "react-icons/di";
import {
  SiMysql,
  SiCss3,
  SiPhp,
  SiTypescript,
  SiNextdotjs,
  SiUnrealengine,
  SiUnity,
  SiPostman,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const techDividerStyle = { fontStyle: "italic" };
const rowStyle = { justifyContent: "center", paddingBottom: "10px" };

const ProgammingIcons = {
  JS: <DiJavascript1 />,
  TS: <SiTypescript />,
  Java: <DiJava />,
  Python: <DiPython />,
  Cpp: <TbBrandCpp />,
  PHP: <SiPhp />,
  CSS: <SiCss3 />,
};

const DatabaseIcons = {
  MySQL: <SiMysql />,
  PostgreSQL: <DiPostgresql />,
  MongoDB: <DiMongodb />,
};

const FrameworkIcons = {
  Node: <DiNodejs />,
  React: <DiReact />,
  Next: <SiNextdotjs />,
};

const OtherIcon = {
  Git: <DiGit />,
  Unreal: <SiUnrealengine />,
  Unity: <SiUnity />,
  Postman: <SiPostman />,
};

function Techstack() {
  return (
    <>
      <p style={techDividerStyle}>Programming languages</p>
      <Row style={rowStyle}>
        {Object.entries(ProgammingIcons).map(([key, icon]) => {
          return (
            <Col key={key} xs={4} md={2} className="tech-icons">
              {icon}
            </Col>
          );
        })}
      </Row>

      <p style={techDividerStyle}>Database</p>
      <Row style={rowStyle}>
        {Object.entries(DatabaseIcons).map(([key, icon]) => {
          return (
            <Col key={key} xs={4} md={2} className="tech-icons">
              {icon}
            </Col>
          );
        })}
      </Row>

      <p style={techDividerStyle}>Framework</p>
      <Row style={rowStyle}>
        {Object.entries(FrameworkIcons).map(([key, icon]) => {
          return (
            <Col key={key} xs={4} md={2} className="tech-icons">
              {icon}
            </Col>
          );
        })}
      </Row>

      <p style={techDividerStyle}>Others</p>
      <Row style={rowStyle}>
        {Object.entries(OtherIcon).map(([key, icon]) => {
          return (
            <Col key={key} xs={4} md={2} className="tech-icons">
              {icon}
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Techstack;
