import { Col, Container, Row } from "react-bootstrap";

const DayWeather = ({ temp, date, description, stuts }) => {
  return (
    <Container className="day">
      <Row className="">
        <Col xs={2}>
            <span>temeture:</span>
          <h2> {temp + "°F"}</h2>
        </Col>
        <Col xs={4}>
            <span>Time:</span>
          <h2>{date}</h2>
        </Col>
        <Col xs={4}>
            <span>Stuts:</span>
          <h2> {stuts}</h2>
        </Col>
        <Col>
          <h2>{description}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default DayWeather;
