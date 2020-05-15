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
          <Col xs={1} sm={3} />
          <Col xs={10} sm={6}>
            <Callback />
          </Col>
          <Col xs={1} sm={3} />
        </Row>
      </Container>
    </div>
  </>
);

export default Footer;
