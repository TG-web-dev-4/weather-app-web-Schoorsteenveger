import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import Wrapper from "./Components/Wrapper";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`)
        const data = await response.json()
        // console.log(data)
        setWeatherData(data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
    console.log(fetchData())
  }, [input])


  return (
    <div className="App">
      <GlobalStyles />
      <WeatherCard input={input} weatherData={weatherData} />
      
      <WeatherCardOverview />
      <SearchBar input={input} setInput={setInput} />
      {/* <Routes>        
      </Routes> */}
      <Accordion />
    </div>
  );
}

export default App;
