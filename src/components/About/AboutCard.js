import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, Je suis <span className="purple">Marckel Marson Hajanirina Ambinintsoa </span> 
             de <span className="purple">Fianarantsoa, Madagascar.</span>
            <br />
            Je suis actuellement en troisième année de Licence en Informatique Générale à l'École Nationale d'Informatique à Fianarantsoa.
            <br />
            <br />
            Mon parcours académique comprend :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong>Licence en Informatique Générale</strong> à l'École Nationale d'Informatique, Fianarantsoa, Madagascar (Nov. 2021 - Aujourd'hui)
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Baccalauréat en Technicien de Maintenance Électrotechnique</strong> au Collège Saint François Xavier, Fianarantsoa, Madagascar (Oct. 2017 - Oct. 2020) - Mention Très Bien
            </li>
          </ul>
          <br />
          <p style={{ textAlign: "justify" }}>
            Grâce à ces formations, j'ai acquis des compétences solides dans plusieurs domaines de l'informatique, notamment en programmation, développement web et mobile, ainsi qu'en systèmes et réseaux. J'ai également une forte passion pour le DevOps.
            <br />
            <br />
            Voici quelques-unes de mes expériences professionnelles :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Développement d'une plateforme de commerce pour ANNY MANANTSOA SARLU à Antananarivo, utilisant React.js et Symfony, en collaboration avec deux autres étudiants.
            </li>
            <li className="about-activity">
              <ImPointRight /> Réalisation du backend d'une application pour un cabinet de médecin, utilisant Symfony et Node.js.
            </li>
            <li className="about-activity">
              <ImPointRight /> Développement d'un mini réseau social avec Flutter et Socket.io, intégrant une API Restful sécurisée avec Node.js et Spring Boot.
            </li>
          </ul>
          <br />
          <p>
            En dehors de l'informatique, voici quelques-unes de mes passions :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime Japonais
            </li>
            <li className="about-activity">
              <ImPointRight /> Chant dans une chorale
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "L'échec est le meilleur moyen d'obtenir la victoire!"{" "}
          </p>
          <footer className="blockquote-footer">Marckel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
