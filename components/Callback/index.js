import { useRef, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import classnames from "classnames";
import IMask from "imask";

import styles from "./callback.module.css";

const Callback = ({ withoutLabel, inContent }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    IMask(target.current, {
      mask: "+{7}(000)000-00-00",
    });
    document.addEventListener("click", ({ target }) => {
      if (target.tagName === "INPUT") {
        return false;
      }
      setShow(false);
    });
  });

  return (
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
          ref={target}
          type="text"
          placeholder="+7"
          size="sm"
          className={styles.callbackInput}
        />
        <button className={styles.button}>Подобрать</button>
      </div>
    </div>
  );
};

export default Callback;
