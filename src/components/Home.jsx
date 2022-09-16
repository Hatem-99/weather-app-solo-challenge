import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import DayWeather from "./DayWeather";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const baseurl =
    "http://api.openweathermap.org/data/2.5/forecast?id=524901";
const api = '&appid=7dd38fb5158c581774589c248b17d533'
  useEffect(() => {
    fetchWether();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchWether = () => {
    fetch(baseurl + api)
      .then((data) => data.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
        console.log(weather);
      });
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
   
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h1 className="mt-3">
            {weather
              ? "The weather in " + weather.city.name + " is as follow"
              : "City Name"}
          </h1>
        </Col>
      </Row>
      {weather
        ? weather.list.map((day, index) => {
            return (
              <DayWeather
                key={index}
                temp={day.main.temp}
                date={day.dt_txt}
                description={day.weather[0].description}
                stuts={day.weather[0].main}
              />
            );
          })
        : ""}
    </Container>
  );
};

export default Home;
