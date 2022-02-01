import React, { useState } from 'react';
import Accordion from '../Components/Accordion';

function WeatherDetailsScreen({ weatherDetails }) {


  return <div className='containerAccordion'>

    {weatherDetails.daily.map((day, i) => {
      // console.log(`DAILY ARRAY ${i}: DAY OBJECT: ${day}`)
      if ( i === 0 || i >= 8) return
      return <Accordion key={i + Math.random()} weatherDataPerDay={day} />

    })
    }
  </div>;
}

export default WeatherDetailsScreen
