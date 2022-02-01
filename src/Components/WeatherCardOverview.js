import React, { useEffect } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'
import WeatherDetailsScreen from '../Pages/WeatherDetailsScreen'



function WeatherCardOverview() {
    return (
        <div className="containerOverview">
            <WeatherCard />
        </div>
    )
}

export default WeatherCardOverview

