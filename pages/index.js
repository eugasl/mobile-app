import { Container, Row, Col, Image } from "react-bootstrap";

import Layout from "../components/Layout";
import Title from "../components/Title";
import TitleHint from "../components/TitleHint";
import Callback from "../components/Callback";
import Calculator from "../components/Calculator";
import Advantages from "../components/Advantages";
import Review from "../components/Review";
import OrderedList from "../components/OrderedList";
import TryIt from "../components/TryIt";
import Footer from "../components/Footer";

const Home = () => (
  <Layout>
    <Container>
      <div className="section-1">
        <Row>
          <Col md={6}>
            <Title
              text="Бесплатный подбор няни за&nbsp;2&nbsp;минуты"
              center
              size="medium"
            />
            <TitleHint text="Проводим личное собеседование, проверяем благонадёжность и отзывы, верифицируем паспортные&nbsp;данные нянь" />
            <Callback />
          </Col>
          <Col md={6}>
            <Image src="/pic1.svg" className="gap-bottom" />
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs={1} sm={1} md={3} lg={3} />
        <Col xs={10} sm={10} md={6} lg={6}>
          <Image src="/pic2.svg" />
        </Col>
        <Col xs={1} sm={1} md={3} lg={3} />
      </Row>
      <Row>
        <Col xs={1} sm={3} />
        <Col xs={10} sm={6}>
          <Title text="Контролируйте ежедневные задания" size="large" />
          <p className="gap-bottom">
            Используйте календарь заданий и геолокацию для ежедневного
            удаленного контроля за работой няни в мобильном приложении.
            Настройте регулярные задачи и с легкостью кносите важные изменения.
          </p>
        </Col>
        <Col xs={1} sm={3} />
      </Row>
      <Row>
        <Col xs={1} sm={3} />
        <Col xs={10} sm={6}>
          <Image src="/pic3.svg" className="gap-top" />
        </Col>
        <Col xs={1} sm={3} />
      </Row>
      <Row>
        <Col xs={1} sm={3} />
        <Col xs={10} sm={6}>
          <Title text="Платите только за отработанные&nbsp;часы" size="large" />
          <p className="gap-bottom">
            Платформа учитывает сколько часов в день проработала няня и
            анализирует, какие задачи были выполнены. Оплата производится с
            банковской карты с уплатой налогов. Можно настроить еженедельную
            оплату в автоматическом режиме или управлять выплатами вручную.
          </p>
        </Col>
        <Col xs={1} sm={3} />
      </Row>
      <Row>
        <Col xs={1} sm={3} />
        <Col xs={10} sm={6}>
          <Image src="/pic4.svg" className="gap-top" />
        </Col>
        <Col xs={1} sm={3} />
      </Row>
      <Row>
        <Col xs={1} sm={3} />
        <Col xs={10} sm={6}>
          <Title text="Удобные коммуникации с няней" size="large" />
          <p className="gap-bottom">
            Встроенный чат и система уведомлений позволит корректировать задания
            и получать необходимые отчеты.
          </p>
        </Col>
        <Col xs={1} sm={3} />
      </Row>
      <Row>
        <Col xs={1} sm={3} />
        <Col xs={10} sm={6}>
          <Title
            text="Рассчитайте цену няни за час работы"
            center
            size="medium"
          />
        </Col>
        <Col xs={1} sm={3} />
      </Row>
      <Row>
        <Col xs={1} sm={3} />
        <Col xs={10} sm={6}>
          <Calculator />
        </Col>
        <Col xs={1} sm={3} />
      </Row>
    </Container>
    <Advantages />
    <Container>
      <Row>
        <Col xs={1} sm={3} />
        <Col xs={10} sm={6}>
          <Review />
        </Col>
        <Col xs={1} sm={3} />
      </Row>
      <Row>
        <Col xs={1} sm={3} />
        <Col xs={10} sm={6}>
          <Title text="Как мы отбираем кандидатов" size="large" center />
          <OrderedList />
        </Col>
        <Col xs={1} sm={3} />
      </Row>
    </Container>
    <TryIt />
    <Footer />
  </Layout>
);

export default Home;
