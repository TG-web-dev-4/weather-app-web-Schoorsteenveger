import React, { useState } from 'react';
import Accordion from '../Components/Accordion';


function WeatherDetailsScreen({ weatherDetails }) {

  // console.log("WEATHERDETAILS INSIDE SCREEN", weatherDetails)

  return <div className='dailyItems'>

    {weatherDetails.daily.map((day, i) => {
      // console.log(`DAILY ARRAY ${i}: DAY OBJECT: ${day}`)
      return <Accordion key={i + Math.random()} weatherDataPerDay={day} />

    })
    }
  </div>;
}

export default WeatherDetailsScreen
