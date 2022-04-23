import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Main from "./components/Main/Main";
import Wind from "./components/Wind/Wind";
import { Fetch } from "./services/openweatherapi";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userLocation, setUserLocation] = useState([]);

  const getMyLocation = (query) => {
    const location = window.navigator && window.navigator.geolocation;
    
    if (location) {
      location.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat);
        console.log(lon);
        setLocation(`weather?lat=${lat}&lon=${lon}`);
      });
    }
  };
  
  const searchLocation = (query) => {
    setLocation(`${query}`);
  };
  
  const setLocation = (query) => {
    Fetch(`${query}`).then((data) => {
      setUserLocation(data);
      console.log(JSON.stringify(data));
    });
  };

  useEffect(() => {
    if (setUserLocation) {
      getMyLocation();
    }
  }, [setUserLocation]);

  return (
    <div className="App">
      <Header title="Weather App" />
      <Location searchLocation={searchLocation} />
      <Main searchLocation={searchLocation} />
      <Wind />
      <header className="App-header"></header>
    </div>
  );
}

export default App;

// Inspiration:
// https://stackoverflow.com/questions/46387375/reactjs-get-latitude-on-click-and-show-it-in-input
