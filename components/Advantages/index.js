import { Container, Row, Col, Image } from "react-bootstrap";

import Title from "../Title";
import styles from "./advantages.module.css";

const Advantages = () => (
  <div className={styles.advantages}>
    <Container>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <p className={styles.title}>Няня с почасовой оплатой</p>
          <p className={`${styles.titleHint} center`}>
            Заберет ребенка из садика, отведет на занятия, погуляет, приготовит
            еду, уберет комнату
          </p>
        </Col>
        <Col md={2} />
      </Row>
      <Row>
        <Col md={4}>
          <div className={styles.text}>
            <Image src="/pic5.svg" className="small-image" />
            <Title text="Видеорезюме исполнителей" size="small" />
            <p>
              Для большинства кандидатов достпуно видеорезюме несколько минут.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.text}>
            <Image src="/pic6.svg" className="small-image" />
            <Title text="Ежедневные или еженедельные отчеты" size="small" />
            <p>
              В регулярные отчеты включена информация по сделанному за день или
              по возникшим сложностям.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className={styles.text}>
            <Image src="/pic7.svg" className="small-image" />
            <Title text="Экономия при длительных заказах" size="small" />
            <p>
              Платите только за реально отработанное время, со нарастающей
              скидкой за при увеличении количества часов.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Advantages;
