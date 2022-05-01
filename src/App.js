import React, { useEffect, useState, setState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Main from "./components/Main/Main";
import Wind from "./components/Wind/Wind";
import Day from "./components/Day/Day";
import Week from "./components/Week/Week";
import Footer from "./components/Footer/Footer";
import { Fetch } from "./services/openweatherapi";
import "bootstrap/dist/css/bootstrap.min.css";

const unitData = {
  metric: { unit: "metric", deg: "C", speed: "m/s" },
  imperial: { unit: "imperial", deg: "F", speed: "mph" },
};

function App() {
  const [userLocation, setUserLocation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [dataday, setDataDay] = useState(null);
  const [units, setUnits] = useState("metric");
  // const [location, setLocation] = useState('');
  // const [dataweek, setDataWeek] = useState(null);

  const handleSearch = (query) => {
    setLoading(true);
    setLocation(`q=${query}&units=${units}`);
  };

  const handleHereClicked = () => {
    setLoading(true);
    getMyLocation();
  };

  const getMyLocation = () => {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation(`lat=${lat}&lon=${lon}&units=${units}`);
        },
        (error) => {
          console.error(`ERROR (${error.code}): ${error.message}`);
        }
      );
    } else {
      alert("Location not available");
    }
  };

  async function setLocation(query) {
    await Promise.all([
      Fetch(`weather?${query}`),
      Fetch(`forecast?${query}&cnt=8`),
      // Fetch(`onecall?${query}&exclude=minutely,hourly`),
    ]).then(([data, dataday, dataweek]) => {
      setLoading(false);
      setData(data);
      setDataDay(dataday.list);
      // setDataWeek(dataweek.daily);
    });
  }

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
        />
        <Wind wind={data.wind} units={unitData[units]} />

        <Day dataday={dataday} units={unitData[units]} />
        {/* <Week dataweek={dataweek} units={unitData[units]} /> */}
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
// https://stackoverflow.com/questions/46241827/fetch-api-requesting-multiple-get-requests
