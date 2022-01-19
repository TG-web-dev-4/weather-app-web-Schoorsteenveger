import * as React from "react"
import { Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import Wrapper from "./Components/Wrapper";
import WeatherCard from "./Components/WeatherCard";
import WeatherCardOverview from "./Components/WeatherCardOverview";
import WeatherCardDetail from "./Components/WeatherCardDetail";
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <WeatherCard />
      <WeatherCardOverview />      
      <SearchBar />
      <Routes>
        {/* <SearchBar type="text" />
        <SubmitButton>Click here/>SubmitButton> */}
        {/* <WeatherCardComponent /> */}
      </Routes>
    </div>
  );
}

export default App;
