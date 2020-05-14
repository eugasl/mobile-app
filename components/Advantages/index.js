import { Container, Row, Col, Image } from "react-bootstrap";

import Title from "../Title";
import styles from "./advantages.module.css";

const Advantages = () => (
  <div className={styles.advantages}>
    <Container>
      <Row>
        <Col xs={1} sm={1} />
        <Col xs={10} sm={12}>
          <p className={styles.title}>
            Няня с почасовой
            <br />
            оплатой
          </p>
          <p className="center">
            Заберет ребенка из садика, отведет на занятия, погуляет, приготовит
            еду, уберет комнату
          </p>
          <div className={styles.text}>
            <Image src="/pic5.svg" className="small-image" />
            <Title text="Видеорезюме исполнителей" size="small" />
            <p>
              Для большинства кандидатов достпуно видеорезюме несколько минут.
            </p>
          </div>
          <div className={styles.text}>
            <Image src="/pic6.svg" className="small-image" />
            <Title text="Ежедневные или еженедельные отчеты" size="small" />
            <p>
              В регулярные отчеты включена информация по сделанному за день или
              по возникшим сложностям.
            </p>
          </div>
          <div className={styles.text}>
            <Image src="/pic7.svg" className="small-image" />
            <Title text="Экономия при длительных заказах" size="small" />
            <p>
              Платите только за реально отработанное время, со нарастающей
              скидкой за при увеличении количества часов.
            </p>
          </div>
        </Col>
        <Col xs={1} sm={1} />
      </Row>
    </Container>
  </div>
);

export default Advantages;
