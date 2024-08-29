import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Utilisation de require.context pour charger toutes les images dans les dossiers spécifiques
const hoaImages = require.context('../../Assets/hoa', false, /\.(png|jpe?g|svg)$/);
const platImages = require.context('../../Assets/plat', false, /\.(png|jpe?g|svg)$/);
const cabinetImages = require.context('../../Assets/cabinet', false, /\.(png|jpe?g|svg)$/);

// Fonction pour récupérer toutes les images en tant que tableau
const getImages = (img) => {
  return img.keys().map(img);
};

// Récupération des images de chaque projet
const hoaImagesPath = getImages(hoaImages);
const platImagesPath = getImages(platImages);
const cabinetImagesPath = getImages(cabinetImages);

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">projets </strong> 
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={hoaImagesPath}
              isBlog={false}
              title="Houatsappy"
              description="Houatsappy est un mini réseau social développé avec Node.js pour le backend et Flutter pour le frontend. Il permet la communication en temps réel via Socket.io. Les utilisateurs peuvent envoyer des fichiers, des images, des vidéos, ainsi que des messages vocaux, offrant ainsi une expérience de chat complète et interactive."
              ghLinkFront="https://github.com/ambinintsoamarckel/Tempest_Front"
              ghLinkBack="https://github.com/ambinintsoamarckel/Tempest"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={cabinetImagesPath}
              isBlog={false}
              title="Cabinet Medical"
              description="Cabinet Medical est une application de gestion de cabinet médical, développée avec Symfony pour le backend et Angular pour le frontend. Elle permet aux médecins de gérer efficacement les rendez-vous, les dossiers patients, et d'autres aspects administratifs du cabinet."
              ghLinkFront="https://github.com/RAMTiana/Zafy"
              ghLinkBack="https://github.com/ambinintsoamarckel/API_Cabinet"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={platImagesPath}
              isBlog={false}
              title="Platcom"
              description="Platcom est une plateforme de commerce en ligne qui permet à de nombreux vendeurs de proposer leurs produits et à de nombreux clients de faire des transactions en toute sécurité. L'administrateur gère l'ensemble des opérations, y compris la gestion des vendeurs, la modération des contenus, et la résolution des conflits. Développé avec Symfony pour le backend et React pour le frontend, Platcom assure une expérience utilisateur fluide et efficace."
              ghLinkFront="https://github.com/ambinintsoamarckel/platcom"
              ghLinkBack="https://github.com/ambinintsoamarckel/platcom"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
