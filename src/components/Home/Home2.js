import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              JE ME <span className="purple"> PRÉSENTE </span>
            </h1>
            <p className="home-about-body">
              Étudiant en 3ème année de Licence Informatique à l'École Nationale d'Informatique de Fianarantsoa, je suis passionné par le domaine de l'IT et j'ai acquis des compétences solides dans plusieurs domaines, notamment :
              <br />
              <br />
              <i>
                <b className="purple">Programmation : </b> J'ai débuté avec des langages de bas niveau tels que le <b className="purple">C, C++,</b> et le <b className="purple">Java.</b> J'ai ensuite élargi mes compétences à des langages plus avancés comme le <b className="purple">C#</b> et l'<b className="purple">Assembler</b>.
              </i>
              <br />
              <br />
              <i>
                <b className="purple">Développement Web et Mobile : </b> Je me suis spécialisé dans des technologies modernes comme <b className="purple">React.js, Node.js, PHP,</b> et <b className="purple">Flutter.</b> J'ai également travaillé avec <b className="purple">Blockchain</b> et d'autres technologies émergentes.
              </i>
              <br />
              <br />
              En parallèle, j'ai aussi développé des compétences solides en <b className="purple">Systèmes et Réseaux</b>, en utilisant des outils comme <b className="purple">Cisco, Linux,</b> et <b className="purple">Windows Server.</b> J'ai mis en place des serveurs, configuré des réseaux, et travaillé avec des technologies de virtualisation telles que <b className="purple">Docker</b> et <b className="purple">VMware.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contacts</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ambinintsoamarckel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://web.facebook.com/ambinintsoahaja.marckel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marckel-marson-b488a0281/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mahmarckmarson/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
