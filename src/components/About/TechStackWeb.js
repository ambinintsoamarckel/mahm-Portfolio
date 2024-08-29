import React, { useState, useRef } from "react";
import { Col, Row, Tooltip, Overlay } from "react-bootstrap";
/*import { DiReact } from "react-icons/di";*/
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiLaravel, SiSymfony, SiSpring, SiNodeDotJs, SiAngular } from "react-icons/si";


function TechStackWeb() {
  const [show, setShow] = useState(null);
  const targetRefs = {
    laravel: useRef(null),
    symfony: useRef(null),
    nodejs: useRef(null),
    spring: useRef(null),
    react: useRef(null),
    angular: useRef(null),
  };

  const icons = [
    { ref: targetRefs.laravel, icon: <SiLaravel />, tooltip: "Laravel" },
    { ref: targetRefs.symfony, icon: <SiSymfony />, tooltip: "Symfony" },
    { ref: targetRefs.nodejs, icon: <DiNodejs />, tooltip: "Node.js" },
    { ref: targetRefs.spring, icon: <SiSpring />, tooltip: "SpringBoot" },
    { ref: targetRefs.react, icon: <DiReact />, tooltip: "React.js" },
    { ref: targetRefs.angular, icon: <SiAngular />, tooltip: "Angular.js" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map(({ ref, icon, tooltip }, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons"
          key={index}
          ref={ref}
          onMouseEnter={() => setShow(index)}
          onMouseLeave={() => setShow(null)}
        >
          {icon}
          <Overlay target={ref.current} show={show === index} placement="top">
            {(props) => (
              <Tooltip id={`overlay-tooltip-${index}`} {...props}>
                {tooltip}
              </Tooltip>
            )}
          </Overlay>
        </Col>
      ))}
    </Row>
  );
}

export default TechStackWeb;
