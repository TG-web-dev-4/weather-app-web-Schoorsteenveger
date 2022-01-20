import React, { useState, useEffect } from 'react'

//Laat weatherdata ophalen/zien in card via search on location

const WeatherCard = ({ weatherData }) => {

    // console.log('WEATHERDATA', weatherData)

    // const coord = weatherData.coord
    // const weather = weatherData.weather
    const city = weatherData.name
    const main = weatherData.main
    const temp = weatherData.temp
    // const icon = weatherData.weather.icon
    const min_temp = weatherData.min_temp
    const max_temp = weatherData.max_temp
    const humidity = weatherData.humidity


    // console.log('LOG OF DATA', coord, weather, temp, main, min_temp, max_temp, humidity)


    // const [errorMessage, setErrorMessage] = useState('')
    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);


    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;



    return (
        <div className='cardView'>
            <div className='header'>Weather Forecast</div>
            <div className="iconWeather">iconweather<img src="" alt="" /></div>
            <div className="displayDataResult">
                <h2 className="name">{city}</h2>
                <p className="date">{date}</p>
                <p className="temp">Temp: {temp}<span>&#8451;</span> </p>
                <p className="min-temp">Min-temp:{min_temp}<span>&#8451;</span> </p>
                <p className="max-temp">Max-temp: {max_temp}<span>&#8451;</span> </p>
                <p className="humidity">Humidity: {humidity}</p>
            </div>
        </div>

    )
}

export default WeatherCard
