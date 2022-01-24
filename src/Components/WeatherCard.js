import React, { useState, useEffect } from 'react'
import { MdEast } from "react-icons/md";


//Laat weatherdata ophalen/zien in card via search on location

const WeatherCard = ({ weatherData }) => {

    console.log('WEATHERDATA', weatherData)

    const coord = weatherData.coord
    const city = weatherData?.name
    const temp = weatherData?.main?.temp
    const min_temp = weatherData?.main?.temp_min
    const max_temp = weatherData?.main?.temp_max
    const humidity = weatherData?.main?.humidity
    // const weathericon = weatherData?.weather?.icon


    // console.log('LOG OF DATA', coord, weather, temp, main, min_temp, max_temp, humidity)


    // const [errorMessage, setErrorMessage] = useState('')



    const current = new Date();
    const date = `${current.getDate()} /${current.getMonth() + 1}/${current.getFullYear()}`;



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
                        <div className='iconArrow'><p>Weekly Details</p> <MdEast onClick={""} /></div>
                </div>



            )}
        </div>

    );
}

export default WeatherCard
