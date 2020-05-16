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
            <Callback inContent />
          </Col>
          <Col md={6}>
            <Image src="/pic1.svg" />
          </Col>
        </Row>
      </div>
      <div className="section-2">
        <Row>
          <Col md={6}>
            <Image src="/pic2.svg" />
          </Col>
          <Col md={6}>
            <Title text="Контролируйте ежедневные задания" size="large" />
            <p>
              Используйте календарь заданий и геолокацию для ежедневного
              удаленного контроля за работой няни в мобильном приложении.
              Настройте регулярные задачи и с легкостью кносите важные
              изменения.
            </p>
          </Col>
        </Row>
      </div>
      <div className="section-3">
        <Row>
          <Col md={6}>
            <Image src="/pic3.svg" />
          </Col>
          <Col md={6}>
            <Title
              text="Платите только за отработанные&nbsp;часы"
              size="large"
            />
            <p>
              Платформа учитывает сколько часов в день проработала няня и
              анализирует, какие задачи были выполнены. Оплата производится с
              банковской карты с уплатой налогов. Можно настроить еженедельную
              оплату в автоматическом режиме или управлять выплатами вручную.
            </p>
          </Col>
        </Row>
      </div>
      <div className="section-4">
        <Row>
          <Col md={6}>
            <Image src="/pic4.svg" />
          </Col>
          <Col md={6}>
            <Title text="Удобные коммуникации с няней" size="large" />
            <p>
              Встроенный чат и система уведомлений позволит корректировать
              задания и получать необходимые отчеты.
            </p>
          </Col>
        </Row>
      </div>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <Title
            text="Рассчитайте цену няни за час работы"
            center
            size="large"
          />
        </Col>
        <Col md={2} />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <Calculator />
        </Col>
        <Col md={2} />
      </Row>
    </Container>
    <Advantages />
    <Container>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <Review />
        </Col>
        <Col md={2} />
      </Row>
      <Row>
        <Col md={2} />
        <Col md={8}>
          <Title text="Как мы отбираем кандидатов" size="large" center />
          <OrderedList />
        </Col>
        <Col md={2} />
      </Row>
    </Container>
    <TryIt />
    <Footer />
  </Layout>
);

export default Home;
