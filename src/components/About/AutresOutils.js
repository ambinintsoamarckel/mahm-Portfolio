import React, { useState, useRef } from "react";
import { Col, Row, Tooltip, Overlay } from "react-bootstrap";
import asteriskIcon from "../../Assets/asterisk.png";

import { SiGit, SiGitlab, SiWireshark, SiKubernetes, SiAnsible } from "react-icons/si";

function AutresOutils() {
  const [show, setShow] = useState(null);
  const targetRefs = {
    git: useRef(null),
    gitlab: useRef(null),
    wireshark: useRef(null),
    asterisk: useRef(null),
    kubernetes: useRef(null),
    ansible: useRef(null),
  };

  const icons = [
    { ref: targetRefs.git, icon: <SiGit />, tooltip: "Git" },
    { ref: targetRefs.gitlab, icon: <SiGitlab />, tooltip: "GitLab" },
    { ref: targetRefs.wireshark, icon: <SiWireshark />, tooltip: "Wireshark" },
    {
      ref: targetRefs.asterisk,
      icon: <img src={asteriskIcon} alt="Asterisk VoIP" style={{ width: '40px' }} />,  // Remplacez avec la taille voulue
      tooltip: "Asterisk VoIP",
    },
    { ref: targetRefs.kubernetes, icon: <SiKubernetes />, tooltip: "Kubernetes" },
    { ref: targetRefs.ansible, icon: <SiAnsible />, tooltip: "Ansible" },
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

export default AutresOutils;
