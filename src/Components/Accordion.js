import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FcExpand } from "react-icons/fc";
import { IconName } from "react-icons/wi";

const Accordion = ({ weatherDetails }) => {

    console.log('WEATHERDETAILS', weatherDetails)

    const WeekWeather = ({weatherDetails}) => {
        
    }


    return <div className='weathercardDetail'>
        <h2>Neem current city weatherdata?</h2>
        <section className='accordion'>
            <p>Date</p>
            <p>icon</p>
            <p>min/max</p>
            < FcExpand className='iconDropDown' />
        </section>
        <div className="accordionExpand">
            <div>Temp:</div>
            <div>Morning</div><div><span>&#8451;</span></div>
            <div>Morning</div><div><span>&#8451;</span></div>
            <div>Afternoon</div><span>&#8451;</span>
            <div>Evening</div><span>&#8451;</span>
            <div>Night</div><span>&#8451;</span>            
        </div>
    </div>;
}

export default Accordion;
