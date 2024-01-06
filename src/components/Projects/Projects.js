import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import s2s from "../../Assets/Projects/s2s.png";
import vbhttf from "../../Assets/Projects/vb-httf.png";
import ttsgfm from "../../Assets/Projects/tt-sgfm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Üzerinde Çalıştığım <strong className="purple">Projeler </strong>
        </h1>
        <p style={{ color: "white" }}>
          Katıldığım yarışmalar ve geliştirdiğim projeleri buradan
          inceleyebilirsiniz.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              id={3}
              imgPath={s2s}
              isBlog={false}
              title="Sustain2Solve Sustainability Hackathon"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              id={2}
              imgPath={vbhttf}
              isBlog={false}
              title="Vakıfbank - Hack to the Future Hackathon"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              id={1}
              imgPath={ttsgfm}
              isBlog={false}
              title="Türk Telekom - Siber Güvenlik Fikir Maratonu"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
