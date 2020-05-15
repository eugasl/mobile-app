import { Form, Col } from "react-bootstrap";
import classnames from "classnames";

import styles from "./callback.module.css";

const Callback = ({ withoutLabel }) => (
  <div
    className={classnames("", {
      [styles.callback]: !withoutLabel,
    })}
  >
    <Form>
      {!withoutLabel && (
        <Form.Row>
          <Col>
            <Form.Label className={styles.label}>Телефон</Form.Label>
          </Col>
        </Form.Row>
      )}
      <Form.Row>
        <Col xs={7}>
          <Form.Control type="text" placeholder="+7" size="sm" />
        </Col>
        <Col xs={2}>
          <button className={styles.button}>Подобрать</button>
        </Col>
      </Form.Row>
    </Form>
  </div>
);

export default Callback;
