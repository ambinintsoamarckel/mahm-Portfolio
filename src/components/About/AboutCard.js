import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, Je suis <span className="purple">Marckel </span>
            je viens de <span className="purple"> Fianarantsoa, Madagascar.</span>
            <br />
            Actuellement je suis en troisième année de licence en parcours Informatique Générale à l'Ecole Nationale d'Informatique  à Fianarantsoa.
            <br />
            Depuis mon enfance je suis fan de tous ce qui est Informatique, j'adore tout apprendre  et maintenant j'ai des solides compétences en developpement et en systèmes et réseau. 
            <br />
            <br />
            Apart les IT activité  j'ai des hobbies comme 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime Japonais
            </li>
            <li className="about-activity">
              <ImPointRight /> la chorale 
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
