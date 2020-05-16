import { Nav } from "react-bootstrap";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./footer.module.css";
import Callback from "../Callback";

const Footer = () => (
  <>
    <div className={styles.footer}>
      <Container fluid>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <Callback/>
          </Col>
          <Col md={2} />
        </Row>
      </Container>
    </div>
  </>
);

export default Footer;
