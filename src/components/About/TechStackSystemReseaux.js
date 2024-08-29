import React, { useState, useRef } from "react";
import { Col, Row, Tooltip, Overlay } from "react-bootstrap";
import { SiLinux, SiCisco, SiWindows, SiNginx, SiApache } from "react-icons/si";

function TechStackSystemReseaux() {
  const [show, setShow] = useState(null);
  const targetRefs = {
    cisco: useRef(null),
    linux: useRef(null),
    windows: useRef(null),
    nginx: useRef(null),
    apache: useRef(null),
  };

  const icons = [
    { ref: targetRefs.cisco, icon: <SiCisco />, tooltip: "Cisco (Configuration IP, Routage, ACL)" },
    { ref: targetRefs.linux, icon: <SiLinux />, tooltip: "Linux (Script shell, DNS Bind9, Nginx, Apache)" },
    { ref: targetRefs.windows, icon: <SiWindows />, tooltip: "Windows Server (ISCSI, Cluster)" },
    { ref: targetRefs.nginx, icon: <SiNginx />, tooltip: "Serveur Proxy Nginx" },
    { ref: targetRefs.apache, icon: <SiApache />, tooltip: "Serveur Web Apache" },
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

export default TechStackSystemReseaux;
