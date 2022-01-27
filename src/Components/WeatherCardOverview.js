import React, { useEffect } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'


function WeatherCardOverview() {
    return (
        <div className='wrapper'>
            <SearchBar />
            <WeatherCard />

        </div>
    )
}

export default WeatherCardOverview

