import React, { useState } from 'react';
import { FcExpand } from "react-icons/fc";
import { StyledAccordion } from './styled/Accordion.styled';
import moment from 'moment'


const Accordion = ({ weatherDataPerDay }) => {

    console.log("WEATHER DATA INSIDE ACCORDION", weatherDataPerDay)


    // let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(currentTimestamp)
    // let date = weatherDataPerDay.dt.format("MM/DD/YY");
    const current = new Date();
    const date = `${current.getDate()} /${current.getMonth() + 1}/${current.getFullYear()}`;
    const morn_temp = weatherDataPerDay.temp.morn
    const day_temp = weatherDataPerDay.temp.day
    const day_eve = weatherDataPerDay.temp.eve
    const day_night = weatherDataPerDay.temp.night
    const min_temp = weatherDataPerDay.temp.min
    const max_temp = weatherDataPerDay.temp.max
    // const dailyIcon = weatherDataPerDay.icon

    // console.log('WEATHERDETAILS', weatherDetails)

    // const toggle = (index) => {
    //     if (selected === index)
    //         return setSelected(null)
    // }
    // setSelected(index)

    // console.log(setSelected(index))


    return (

        <StyledAccordion className='weathercardDetail'>
            <StyledAccordion className='accordion'>
                <p>{date}</p>
                {/* <p key={weatherDataPerDay.dt}>ffff</p> */}
                <img className="weatherIcon" alt="weeklyweather" src={`https://openweathermap.org/img/wn/${weatherDataPerDay.weather[0].icon}@4x.png`} />
                <p>{Math.round(min_temp)}C°/{Math.round(max_temp)}C°</p>

                < FcExpand className="iconDropDown" />
            </StyledAccordion>
            <StyledAccordion className='drowpDownContent'>
                <div className='grid-item'>Temp:</div>
                <div className='grid-item'>Morning<div>{Math.round(morn_temp)}C°</div></div>
                <div className='grid-item'>Afternoon<div>{Math.round(day_temp)}C°</div></div>
                <div className='grid-item'>Evening<div>{Math.round(day_eve)}C°</div></div>
                <div className='grid-item'>Night<div>{Math.round(day_night)}C°</div></div>
            </StyledAccordion>
        </StyledAccordion>

    );



}

export default Accordion;
