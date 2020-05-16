import { Form } from "react-bootstrap";
import classnames from "classnames";

import styles from "./callback.module.css";

const Callback = ({ withoutLabel, inContent }) => (
  <div
    className={classnames("", {
      [styles.callback]: !withoutLabel,
    })}
  >
    <div
      className={classnames(styles.callbackForm, {
        [styles.callbackFormContent]: inContent,
      })}
    >
      {!withoutLabel && (
        <Form.Label className={styles.callbackLabel}>Телефон</Form.Label>
      )}
      <Form.Control
        type="text"
        placeholder="+7"
        size="sm"
        className={styles.callbackInput}
      />
      <button className={styles.button}>Подобрать</button>
    </div>
  </div>
);

export default Callback;
