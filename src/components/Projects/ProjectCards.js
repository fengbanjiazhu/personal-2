import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProjectCarousel from "./ProjectCarousel";
import StatusTag from "../../ui/StatusTag";

import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  images,
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog,
  hosting = "no-hosting-plan",
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const hostStatus = {
    pending: "yellow",
    hosted: "green",
    "no-hosting-plan": "red",
  };

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Button variant="primary" onClick={handleShow}>
            See Details
          </Button>
        </Card.Body>
      </Card>

      <Modal size="lg" centered={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Detail of {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StatusTag type={hostStatus[hosting]}>{hosting.replaceAll("-", " ")}</StatusTag>
          {images && <ProjectCarousel images={images} />}
          <p style={{ marginTop: "1rem" }}>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>

          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProjectCards;
