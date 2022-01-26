import React from 'react';
import Accordion from '../Components/Accordion';

export default function WeatherDetailsScreen({ weatherDetails }) {

  console.log("WEATHERDETAILS INSIDE SCREEN", weatherDetails)


  return <div>
    <p>WEATHER DETAILS</p>
    {weatherDetails.daily.map((day, i) => {
      console.log(`DAILY ARRAY ${i}: DAY OBJECT: ${day}`)

      return <Accordion key={i + Math.random()} weatherDataPerDay={day} />
    })
    }
  </div>;
}

