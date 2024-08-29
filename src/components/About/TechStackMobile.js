import React, { useState, useRef } from "react";
import { Col, Row, Tooltip, Overlay } from "react-bootstrap";
import { SiFlutter, SiReact } from "react-icons/si";

function TechStackMobile() {
  const [show, setShow] = useState(null);
  const targetRefs = {
    flutter: useRef(null),
    reactnative: useRef(null),
  };

  const icons = [
    { ref: targetRefs.flutter, icon: <SiFlutter />, tooltip: "Flutter" },
    { ref: targetRefs.reactnative, icon: <SiReact />, tooltip: "React Native" },
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

export default TechStackMobile;
