import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Carousel for multiple images */}
      <Carousel style={{ padding: "1%" }}>
        {props.imgPaths.map((imgPath, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={imgPath}
              alt={`slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLinkFront} target="_blank">
          <BsGithub /> &nbsp;
          { "frontend"}
        </Button>
        {"\n"}
        {"\n"}

        {/* Render demo link if it's available and it's not a blog */}
       
          <Button
            variant="primary"
            href={props.ghLinkBack}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsGithub /> &nbsp;
            {"backend"}
          </Button>
        
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
