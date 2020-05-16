import { Container, Row, Col, Image } from "react-bootstrap";

import Title from "../Title";
import TitleHint from "../TitleHint";

import styles from "./tryit.module.css";

const TryIt = () => (
  <div className={styles.bg}>
    <Container>
      <Row>
        <Col md={6}>
          <Image src="/pic8.svg" className={styles.picture}/>
        </Col>
        <Col md={6}>
          <Title text="Попробуйте Lumni бесплатно" center size="medium" />
          <TitleHint text="Для оплаты исполнителю понадобится банковская карта" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default TryIt;
