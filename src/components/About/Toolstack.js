import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDocker, DiJenkins } from "react-icons/di";
import {
  SiTerraform,
  SiPrometheus,
  SiKubernetes,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
      </Col>
    </Row>
  );
}

export default Toolstack;
