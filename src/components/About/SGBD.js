import React, { useState, useRef } from "react";
import { Col, Row, Tooltip, Overlay } from "react-bootstrap";
import { SiMongodb, SiMysql, SiPostgresql, SiOracle } from "react-icons/si";

function SGBD() {
  const [show, setShow] = useState(null);
  const targetRefs = {
    mongodb: useRef(null),
    mysql: useRef(null),
    postgresql: useRef(null),
    oracle: useRef(null),
  };

  const icons = [
    { ref: targetRefs.mongodb, icon: <SiMongodb />, tooltip: "MongoDB" },
    { ref: targetRefs.mysql, icon: <SiMysql />, tooltip: "MySQL" },
    { ref: targetRefs.postgresql, icon: <SiPostgresql />, tooltip: "PostgreSQL" },
    { ref: targetRefs.oracle, icon: <SiOracle />, tooltip: "Oracle" },
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

export default SGBD;
