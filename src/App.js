import React, { useEffect, useState, setState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Main from "./components/Main/Main";
import Wind from "./components/Wind/Wind";
import Day from "./components/Day/Day";
import Footer from "./components/Footer/Footer";
import { Fetch } from "./services/openweatherapi";
import "bootstrap/dist/css/bootstrap.min.css";

const unitData = {
  metric: { unit: "metric", deg: "C", speed: "m/s" },
  imperial: { unit: "imperial", deg: "F", speed: "mph" },
};

function App() {
  const [userLocation, setUserLocation] = useState([]);
  const [cords, setCords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [dataday, setDataDay] = useState(null);
  const [units, setUnits] = useState("metric");

  const getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation(`lat=${lat}&lon=${lon}&units=${units}`);
      });
    }
  };

  const setLocation = (query) => {
    Fetch(`weather?${query}`).then((data) => {
      setData(data);
      setLoading(false);
    });
    Fetch(`forecast?${query}&cnt=8`).then((dataday) => {
      setDataDay(dataday);
    });
  };

  const handleSearch = (query) => {
    setLocation(`weather?&units=${units}&q=${query}`);
  };

  const handleHereClicked = () => {
    setLoading(true);
    getMyLocation();
  };

  useEffect(() => {
    setLoading(true);
    if (userLocation) {
      getMyLocation(units);
    }
  }, [units, userLocation]);

  if (!loading && data) {
    return (
      <div className="App">
        <Header
          title="Weather App"
          setUnits={setUnits}
          handleSearch={handleSearch}
          handleHereClicked={handleHereClicked}
        />
        <Location data={data} sys={data.sys} />
        <Main
          main={data.main}
          weather={data.weather}
          clouds={data.clouds.all}
          visibility={data.visibility}
          sys={data.sys}
          timezone={data.timezone}
          dt={data.dt}
          // fetchExtendedData={fetchExtendedData}
        />
        <Wind wind={data.wind} units={unitData[units]} />
        <Day dataday={dataday.list} units={unitData[units]} />
        <Footer />
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
