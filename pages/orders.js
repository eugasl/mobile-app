import { Container, Row, Col } from "react-bootstrap";

import Layout from "../components/Layout";
import Phone from "../components/Phone";
import Title from "../components/Title";
import TitleHint from "../components/TitleHint";
import Callback from "../components/Callback";
import TitleText from "../components/TitleText";
import Review from "../components/Review";

const Orders = () => (
  <Layout>
    <Container fluid>
      <Row>
        <Col xs={2} sm={1} />
        <Col xs={10} sm={11}>
          <Phone />
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={1} />
        <Col xs={10} sm={11}>
          <Title text="Бесплатный подбор няни за 2 минуты" />
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={1} />
        <Col xs={10} sm={11}>
          <TitleHint
            text="Каждый наш исполнитель прошел лично собеседование, проверку
          благонадежности и паспортных данных"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={1} />
        <Col xs={10} sm={11}>
          <Callback />
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={1} />
        <Col xs={10} sm={11}>
          <TitleText title="Платите только за отработанные часы">
            Платформа учитывает сколько часов в день проработала няня и
            анализирует, какие задачи были выполнены. Оплата производится с
            банковской карты с уплатой всех налогов. Можно настроить
            еженедельную оплату в автоматическом режиме или управлять платежами
            вручную.
          </TitleText>
        </Col>
      </Row>
    </Container>
    <Review />
  </Layout>
);

export default Orders;
