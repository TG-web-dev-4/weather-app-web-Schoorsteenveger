import React, { useState, useEffect } from 'react'
import { MdEast } from "react-icons/md";


//Laat weatherdata ophalen/zien in card via search on location

const WeatherCard = ({ weatherData, weatherDetails }) => {

    console.log('WEATHERDATA', weatherData)
    console.log('WEATHERDETAILS', weatherDetails)

    // const currentcoord = weatherDetails.coord
    const city = weatherData?.name
    const temp = weatherData?.main?.temp
    const min_temp = weatherData?.main?.temp_min
    const max_temp = weatherData?.main?.temp_max
    const humidity = weatherData?.main?.humidity
    // const weatherDetails = weatherDetails.data

    const current = new Date();
    const date = `${current.getDate()} /${current.getMonth() + 1}/${current.getFullYear()}`;

    // click takes coord and displays weatherdetails on accordion

    // const showWeatherDetails = ({weatherDetails}) => {
    //     const clickHandler();
    // };


    return (

        <div className='cardView'>

            <div className='header'>Weather Forecast</div>
            {typeof weatherData.main === 'undefined' ? (
                <div>
                    <p className="welcome">In for a walk, enter your city</p>

                </div>
            ) : (
                <div className="displayDataResult">

                    <h2 className="name">{city}</h2>
                    <p className="date">{date}</p>
                    {/* <p>{weatherData.weather[0].main}</p> */}
                    <img className="weatherIcon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} />
                    <p className="temp">Temp: {Math.round(temp)}<span>&#8451;</span> </p>
                    <p className="min-temp">Min-temp:{Math.round(min_temp)}<span>&#8451;</span> </p>
                    <p className="max-temp">Max-temp: {Math.round(max_temp)}<span>&#8451;</span> </p>
                    <p className="humidity">Humidity: {humidity}%</p>
                    <div className='containerIconArrow'><p>Weekly Details</p> <MdEast className='iconArrowBtn' onChange={""} onClick={""} />Sayhello</div>
                </div>



            )}
        </div>

    );
}

export default WeatherCard
