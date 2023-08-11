import { useState } from "react";
import { Container } from "./Components/Container.styled";

import { Body } from "./Components/Body.styled";

import WeatherLoader from "./Components/WeatherLoader";

const api = {
  key: "4ff50176f17a1a9eec162b0203a0abad",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [background, setBackground] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchHandler = async () => {
    setIsLoading(true);
    try {
      await fetch(
        `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
      )
        .then((res) => res.json())

        .then((result) => {
          setWeather(result);
          setIsLoading(false);
        });
      fetch(`https://source.unsplash.com/1600x900/?${search}`).then((res) => {
        setBackground(res.url);
      });
    } catch (SpeechSynthesisErrorEvent) {
      SpeechSynthesisErrorEvent({ message: "Not found}" });
    }
  };

  return (
    <Body image={background}>
      <Container>
        {isLoading ? <WeatherLoader /> : null}

        <h1>Weather App</h1>

        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchHandler}>Search</button>
        {weather.main ? (
          <div>
            <p>City: {weather.name}</p>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        ) : null}
      </Container>
    </Body>
  );
}

export default App;
