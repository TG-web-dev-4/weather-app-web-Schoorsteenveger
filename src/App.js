import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import WeatherCard from "./Components/WeatherCard";
import WeatherCardOverview from "./Components/WeatherCardOverview";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import Accordion from './Components/Accordion';
import WeatherDetailsScreen from './Pages/WeatherDetailsScreen';
import { v4 as uuidv4 } from 'uuid';





function App() {
  const apikey = process.env.REACT_APP_API_KEY
  const [input, setInput] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDetails, setweatherDetails] = useState(null)
  const [coord, setCoord] = useState("");


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
    console.log('WEATHER DETAILS USEEFFECT', weatherDetails, weatherData)
    console.log('COORD INSIDE USEFFECT', coord)
    const fetchWeeklyData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,minutely&appid=${apikey}&units=metric`)

        const data = await response.json()

        console.log('DATA INSIDE USEEFFECT', data)
        setweatherDetails(data)

      } catch (error) {
        console.log(error)

      }
    }
    if (coord) fetchWeeklyData(); /*met if laadt pas als opgevraagd wordt door de user
    // console.log(fetchWeeklyData())*/
  }, [coord])



  return (
    <div className="App">
    
      <GlobalStyles />
      <SearchBar input={input} setInput={setInput} />
      <WeatherCard input={input} weatherData={weatherData} />            
      {weatherDetails && <WeatherDetailsScreen weatherDetails={weatherDetails} />}
      
    </div>
  );
}

export default App;
