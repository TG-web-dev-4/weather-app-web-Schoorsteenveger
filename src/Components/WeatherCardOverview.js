import React, { useEffect } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'
import WeatherDetailsScreen from '../Pages/WeatherDetailsScreen'
import { Wrapper } from './Wrapper'


function WeatherCardOverview() {
    return (
        <Wrapper>
            <WeatherCard />
        </Wrapper>
    )
}

export default WeatherCardOverview

