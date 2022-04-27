import React, { useEffect, useState, setState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Main from "./components/Main/Main";
import Wind from "./components/Wind/Wind";
import { Fetch } from "./services/openweatherapi";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userLocation, setUserLocation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [units, setUnits] = useState({
    unit: "metric",
    deg: "C",
    speed: "m/s",
  });

  const getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation(`weather?lat=${lat}&lon=${lon}&units=${units.unit}`);
      });
    }
  };

  const setLocation = (query) => {
    Fetch(`${query}`).then((data) => {
      setData(data);
      console.log(data);
    });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (userLocation) {
        getMyLocation(units);
      }
    }, 1000);
    setLoading(false);
  }, [units]);

  if (!loading && data) {
    return (
      <div className="App">
        <Header
          title="Weather App"
          setUnits={setUnits}
          // clickShowCurrPos={getPosition}
        />
        <Location
          data={data}
          sys={data.sys}
          current={setUserLocation}
          // location={data.filter((data) => data.data.toLowerCase())}
        />
        <Main
          main={data.main}
          weather={data.weather}
          clouds={data.clouds.all}
          visibility={data.visibility}
          sys={data.sys}
          timezone={data.timezone}

          // units={data.units}
        />
        <Wind 
          wind={data.wind}
          units={units}
        />
      </div>
    );
  } else {
    return (
      <div className="loading">
        <span>Weather data is loading...</span>
      </div>
    );
  }
}

export default App;

// Inspiration:
// https://stackoverflow.com/questions/46387375/reactjs-get-latitude-on-click-and-show-it-in-input
