import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Link to={`/ProjectDetails/${props.id}`}>
          <Button variant="primary">İncele</Button>
        </Link>

        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
