import { Form, Col } from "react-bootstrap";

import styles from "./callback.module.css";

const Callback = () => (
  <div className={styles.callback}>
    <Form>
      <Form.Row>
        <Col>
          <Form.Label className={styles.label}>Телефон</Form.Label>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Control type="text" placeholder="+7" size="sm" />
        </Col>
        <Col xs={4}>
          <button className={styles.button}>Подобрать</button>
        </Col>
      </Form.Row>
    </Form>
  </div>
);

export default Callback;
