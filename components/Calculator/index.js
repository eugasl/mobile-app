import { useState } from "react";
import { Form } from "react-bootstrap";

import TitleText from "../TitleText";

import styles from "./calculator.module.css";

const calculator = () => {
  const [children, setChildren] = useState(1);
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Количество детей</Form.Label>
          <div>
            <span
              className={styles.minus}
              onClick={() => {
                if (children === 1) {
                  setChildren(1);
                } else {
                  setChildren(children - 1);
                }
              }}
            >
              -
            </span>{" "}
            <span className={styles.children}>{children}</span>
            <span
              className={styles.plus}
              onClick={() => setChildren(children + 1)}
            >
              +
            </span>
          </div>
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Телефон</Form.Label>
          <Form.Control type="text" placeholder="+7" />
        </Form.Group>
        <Form.Group controlId="commentaries">
          <Form.Label>Комментарии</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <button className={styles.button}>Узнать цену</button>
      </Form>
      <div className="gap-top gap-bottom">
        <TitleText center>
          Нажимая кнопку, Вы даете согласие на обработку персональных данных и
          соглашаетесь с политикой конфеденциальности.
        </TitleText>
      </div>
    </>
  );
};

export default calculator;
