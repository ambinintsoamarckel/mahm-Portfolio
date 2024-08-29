import React, { useState, useRef } from "react";
import { Col, Row, Tooltip, Overlay } from "react-bootstrap";
import { SiDocker, SiVirtualbox, SiVmware, SiMicrosoft } from "react-icons/si";

function TechStackVirtualisation() {
  const [show, setShow] = useState(null);
  const targetRefs = {
    virtualbox: useRef(null),
    vmware: useRef(null),
    hyperv: useRef(null),
    docker: useRef(null),
  };

  const icons = [
    { ref: targetRefs.virtualbox, icon: <SiVirtualbox />, tooltip: "VirtualBox" },
    { ref: targetRefs.vmware, icon: <SiVmware />, tooltip: "VMware" },
    { ref: targetRefs.hyperv, icon: <SiMicrosoft />, tooltip: "Hyper-V" },
    { ref: targetRefs.docker, icon: <SiDocker />, tooltip: "Docker" },
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

export default TechStackVirtualisation;
