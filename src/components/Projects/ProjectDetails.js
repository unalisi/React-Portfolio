import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useParams } from "react-router-dom";
import projectsData from "./ProjectDetails.json";

function ProjectDetails() {
  const { id } = useParams();
  const projectId = parseInt(id);
    console.log("Project ID: ",id);
  const project = projectsData.projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Proje Detayları <strong className="purple"></strong>
          </h1>
          <p style={{ color: "white" }}>
            Proje bulunamadı.
          </p>
        </Container>
      </Container>
    );
  }else{
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            <strong className="purple">{project.title}</strong>
          </h1>
          <p style={{ color: "white" }}>
            {project.description}
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col>
              <img src={project.image} alt={project.title} />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

  
}

export default ProjectDetails;