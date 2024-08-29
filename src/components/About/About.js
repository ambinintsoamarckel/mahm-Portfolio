import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import TechStackWeb from "./TechStackWeb";
import TechStackVirtualisation from "./TechStackVirtualisation";
import TechStackSystemReseaux from "./TechStackSystemReseaux";
import TechStackMobile from "./TechStackMobile";
import LangagesDeProgrammation from "./LangagesDeProgrammation";
import SGBD from "./SGBD";
import AutresOutils from "./AutresOutils";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* Adjust the size of the columns to accommodate the longer AboutCard */}
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              À propos de <strong className="purple">Moi</strong>
            </h1>
            <Aboutcard />
          </Col>
          {/* Increase the size of the image to balance the layout */}
          <Col
            md={6}
            style={{ paddingTop: "20%", paddingBottom: "50px",paddingLeft:"10%" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{ maxHeight: "1000px" }} />
          </Col>
        </Row>

        {/* The rest of the sections remain the same, focusing on skills and tools */}
        <h1 className="project-heading">
          <strong className="purple">Langages de </strong> Programmation
        </h1>
        <LangagesDeProgrammation />

        <h1 className="project-heading">
          <strong className="purple">Compétences </strong> Web
        </h1>
        <TechStackWeb />

        <h1 className="project-heading">
          <strong className="purple">Compétences </strong> Mobile
        </h1>
        <TechStackMobile />

        <h1 className="project-heading">
          <strong className="purple">Compétences en </strong> Systèmes et Réseaux
        </h1>
        <TechStackSystemReseaux />

        <h1 className="project-heading">
          <strong className="purple">SGBD</strong> (Systèmes de Gestion de Bases de Données)
        </h1>
        <SGBD />

        <h1 className="project-heading">
          <strong className="purple">Compétences en </strong> Virtualisation
        </h1>
        <TechStackVirtualisation />

        <h1 className="project-heading">
          <strong className="purple">Outils </strong> et Technologies
        </h1>
        <AutresOutils />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
