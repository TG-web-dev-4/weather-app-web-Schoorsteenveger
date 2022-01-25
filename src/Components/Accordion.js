import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FcExpand } from "react-icons/fc";
import { IconName } from "react-icons/wi";

const Accordion = ({weatherDetails }) => {

    // let date = new Date(weatherDetails.current.dt).toLocaleDateString("en-US")// expected output "8/30/2017"  
    // const min_temp = weatherDetails.temp.min
    // const max_temp = weatherDetails.temp.max
    // const morning = weatherDetails.temp.morn
    // const afternoon = weatherDetails.temp.day
    // const evening = weatherData.temp.eve
    // const night = weatherData.temp.night


    console.log('WEATHERDEAILS', weatherDetails)
    // const maken

    return <div className='weathercardDetail'>
        <h2>Neem current city weatherdata?</h2>
        <section className='accordion'>
            <p>Date</p>
            <p>icon</p>
            <p>min/max<span>&#8451;</span></p>
            < FcExpand className='iconDropDown' />
        </section>
        <div className="accordionExpand">
            <div className='grid-item'>Temp:</div>
            <div className='grid-item'>Morning<div>3&#8451;</div></div>
            <div className='grid-item'>Afternoon<div>3&#8451;</div></div>
            <div className='grid-item'>Evening<div>3&#8451;</div></div>
            <div className='grid-item'>Night<div>3&#8451;</div></div>           
        </div>
    </div>;
}

export default Accordion;
