import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import SendEmail from "./SendEmail";

import pdf from "../../Assets/../Assets/F-R-github-resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FaLinkedinIn } from "react-icons/fa";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/fengbanjiazhu/personal-2/main/src/Assets/F-R-github-resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Particle />
      <Container fluid className="resume-section">
        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <br />
        Find out more info about me through{" "}
        <a
          href="https://www.linkedin.com/in/feixiang-r-10b266261/"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <br />
        <br />
        OR
        <br />
        <br />
        Send me a message
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "1rem" }}>
          <SendEmail />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
