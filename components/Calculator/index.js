import { Form } from "react-bootstrap";

import TitleText from "../TitleText";

import styles from "./calculator.module.css";

const calculator = () => (
  <>
    <Form>
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

export default calculator;
