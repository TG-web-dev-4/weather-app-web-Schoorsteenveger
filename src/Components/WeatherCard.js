import React, { useEffect, useState } from 'react'

//Laat weatherdata ophalen/zien in card via search on location

const WeatherCard = ({ city, icon, temp, min, max, humidity }) => {

    const [input, setInput] = useState("Londen")
    const [errorMessage, setErrorMessage] = useState('')
    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);
    const [location, setLocation] = useState([]);
    const apikey = process.env.REACT_APP_API_KEY
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;



    useEffect(() => {
        const fetchData = () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                // setLat(position.coords.latitude);
                // setLong(position.coords.longitude);
            });

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=${apikey}`)
                .then(res => res.json())
                .then(result => {
                    setLocation(result);
                    console.log(result);
                });
        }
        fetchData();
    }, [apikey])

    return (
        <div className='cardView'>
            <div className='header'>Weather Forecast</div>
            <div className="iconWeather">iconweather<img src="" alt="" /></div>
            <div className="displayDataResult">
                <h2 className="name">City{city}</h2>
                {/* <p className="date">10/1/2022{date}</p> */}
                <p className="temp">Temp: {temp}<span>&#8451;</span> </p>
                <p className="min-temp">Min-temp: 15{min}<span>&#8451;</span> </p>
                <p className="max-temp">Max-temp: 5{max}<span>&#8451;</span> </p>
                <p className="humidity">Humidity: 55 {humidity}</p>
            </div>
        </div>

    )
}

export default WeatherCard



// import React, { useState, useEffect, ChangeEvent } from 'react';

// const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
// const suffix = "&units=imperial&appid=12345";

// const App: React.FC = () => {

//     const [city, setCity] = useState('London');

//     const getWeather = async (city: string) => {
//         const response = await fetch(baseUrl + city + suffix);
//         const jsonWeather = await response.json();
//         console.log(jsonWeather);
//     }

//     useEffect({ () => getWeather(city) }, []);  // this line has an issue

// const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setCity(event.target.value);
// }

// return (
//     <div>
//         <form>
//             <input type="text" placeholder="Enter city"
//                 onInput={handleChange} />
//             <button type="submit">Get Weather</button>
//             <h2>City: {city}</h2>
//         </form>
//     </div>
// );
// }

// export default App;