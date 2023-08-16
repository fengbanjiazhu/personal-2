import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useDarkMode } from "../../ui/darkmodeContext";

function Github() {
  const { isDarkMode } = useDarkMode();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="fengbanjiazhu"
        blockSize={15}
        blockMargin={5}
        color={isDarkMode ? "#649bf5" : "#1655bc"}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
