import React, { useState, useRef } from "react";
import { Col, Row, Tooltip, Overlay } from "react-bootstrap";
import { SiPython, SiCsharp, SiCplusplus, SiJava, SiC } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
function LangagesDeProgrammation() {
  const [show, setShow] = useState(null);
  const targetRefs = {
    python: useRef(null),
    csharp: useRef(null),
    c: useRef(null),
    java: useRef(null),
    cpp: useRef(null),
  };

  const icons = [
    { ref: targetRefs.python, icon: <SiPython />, tooltip: "Python" },
    { ref: targetRefs.csharp, icon: <SiCsharp />, tooltip: "C#" },
    { ref: targetRefs.c, icon: <SiC />, tooltip: "C" },
    { ref: targetRefs.java, icon: <DiJava />, tooltip: "Java" },
    { ref: targetRefs.cpp, icon: <SiCplusplus />, tooltip: "C++" },
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

export default LangagesDeProgrammation;
