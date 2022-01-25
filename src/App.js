import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import WeatherCard from "./Components/WeatherCard";
import WeatherCardOverview from "./Components/WeatherCardOverview";
import WeatherCardDetail from "./Components/WeatherCardDetail";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import Accordion from './Components/Accordion';


function App() {
  const apikey = process.env.REACT_APP_API_KEY
  const [input, setInput] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDetails, setweatherDetails] = useState([])
  const [coord, setCoord] = useState("");
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);


  //weatherdata for weathercard
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`)

        const data = await response.json()

        setWeatherData(data)
        setCoord(data.coord)
       

      } catch (error) {
        console.log(error)

      }
    }
    if (input) fetchData();
    // console.log(fetchData())
  }, [input])

// weekly Data voor accordion
  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,minutely&appid=${apikey}&units=metric`)

        const data = await response.json()

        console.log(data)
        setweatherDetails(data)
        
      } catch (error) {
        console.log(error)

      }
    }
    if (coord) fetchWeeklyData(); // met if laadt pas als opgevraagd wordt door de user
    // console.log(fetchWeeklyData())
  }, [coord])



  return (
    <div className="App">
      <GlobalStyles />
      <WeatherCard input={input} weatherData={weatherData} weatherDetails={ weatherDetails}/>
      <SearchBar input={input} setInput={setInput} />
      <Accordion weatherDetails={weatherDetails} />
    </div>
  );
}

export default App;
