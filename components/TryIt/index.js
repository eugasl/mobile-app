import { Container, Row, Col, Image } from "react-bootstrap";

import Title from "../Title";
import TitleHint from "../TitleHint";
import Callback from "../Callback";

import styles from "./tryit.module.css";

const TryIt = () => (
  <div className={styles.bg}>
    <Container>
      <Row>
        <Col xs={3} sm={3} />
        <Col xs={6} sm={6}>
          <Image src="/pic8.svg" />
        </Col>
        <Col xs={3} sm={3} />
      </Row>
      <Row>
        <Col xs={2} sm={3} />
        <Col xs={8} sm={6}>
          <Title text="Попробуйте Lumni бесплатно" center size="medium" />
          <TitleHint text="Для оплаты исполнителю понадобится банковская карта" />
        </Col>
        <Col xs={2} sm={3} />
      </Row>
      <Row>
        <Col xs={2} sm={3} />
        <Col xs={8} sm={6}>
          <Callback withoutLabel />
        </Col>
        <Col xs={2} sm={3} />
      </Row>
    </Container>
  </div>
);

export default TryIt;
