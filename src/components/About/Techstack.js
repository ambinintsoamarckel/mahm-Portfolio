import React, { useState, useRef } from "react";
import { Col, Row, Tooltip, Overlay } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const [show, setShow] = useState(null);
  const targetRefs = {
    cpp: useRef(null),
    js: useRef(null),
    go: useRef(null),
    node: useRef(null),
    react: useRef(null),
    solidity: useRef(null),
    mongodb: useRef(null),
    nextjs: useRef(null),
    git: useRef(null),
    firebase: useRef(null),
    redis: useRef(null),
    postgresql: useRef(null),
    python: useRef(null),
    java: useRef(null),
  };

  const icons = [
    { ref: targetRefs.cpp, icon: <CgCPlusPlus />, tooltip: "Langage de programmation C++" },
    { ref: targetRefs.js, icon: <DiJavascript1 />, tooltip: "Langage de programmation JavaScript" },
    { ref: targetRefs.go, icon: <TbBrandGolang />, tooltip: "Langage de programmation Go" },
    { ref: targetRefs.node, icon: <DiNodejs />, tooltip: "Plateforme Node.js" },
    { ref: targetRefs.react, icon: <DiReact />, tooltip: "Bibliothèque React.js" },
    { ref: targetRefs.solidity, icon: <SiSolidity />, tooltip: "Langage Solidity pour contrats intelligents" },
    { ref: targetRefs.mongodb, icon: <DiMongodb />, tooltip: "Base de données MongoDB" },
    { ref: targetRefs.nextjs, icon: <SiNextdotjs />, tooltip: "Framework Next.js" },
    { ref: targetRefs.git, icon: <DiGit />, tooltip: "Système de contrôle de version Git" },
    { ref: targetRefs.firebase, icon: <SiFirebase />, tooltip: "Plateforme Firebase" },
    { ref: targetRefs.redis, icon: <SiRedis />, tooltip: "Système de gestion de base de données Redis" },
    { ref: targetRefs.postgresql, icon: <SiPostgresql />, tooltip: "Système de gestion de base de données PostgreSQL" },
    { ref: targetRefs.python, icon: <DiPython />, tooltip: "Langage de programmation Python" },
    { ref: targetRefs.java, icon: <DiJava />, tooltip: "Langage de programmation Java" },
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

export default Techstack;
