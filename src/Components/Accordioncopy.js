// import React, { useState } from 'react';
// import { FcExpand } from "react-icons/fc";
// import { StyledAccordion } from './styled/Accordion.styled';
// import moment from 'moment'

// const Accordioncopy = ({ weatherDetails }) => {

//   const [selected, setSelected] = useState(null)

//   // let date expected output "8/30/2017" 
//   let date = moment.unix(weatherDetails.dt).format("MM/DD/YY");
//   // let date = new Date(weatherDetails.current.dt).toLocaleDateString("en-US")
//   const morn_temp = weatherDetails?.temp?.morn
//   const day_temp = weatherDetails?.temp?.day
//   const day_eve = weatherDetails?.temp?.eve
//   const day_night = weatherDetails?.temp?.night
//   const min_temp = weatherDetails?.temp?.min
//   const max_temp = weatherDetails?.temp?.max
  

//   // console.log('WEATHERDETAILS', weatherDetails)

//   // const toggle = (index) => {
//   //   if (selected === index)
//   //     return setSelected(null)
//   // }
//   // setSelected(index)

//   // console.log(setSelected(index))


//   return <div className='weathercardDetail'>
//     {weatherDetails.map((weatherDetails, index) => (
//       <StyledAccordion>


//         <div className='accordion' onClick={() => toggle(i)}>

//           <p>{date}</p>
//           {/* <img className="weatherIcon" alt="weeklyweather" src={`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@4x.png`} /> */}
//           <p>{min_temp}C°/{max_temp}C°</p>

//           <span className='toggleIcon'>{selected === index ? '-' : '+'}</span>

//           <div className={selected === index ? ' show accordionExpand' : 'accordionExpand'}> 
//             <div className='grid-item'>Temp:</div>
//             <div className='grid-item'>Morning<div>{Math.round(morn_temp)}C°</div></div>
//             <div className='grid-item'>Afternoon<div>{Math.round(day_temp)}C°</div></div>
//             <div className='grid-item'>Evening<div>{Math.round(day_eve)}C°</div></div>
//             <div className='grid-item'>Night<div>{Math.round(day_night)}C°</div></div>
//           </div>

//         </div>

//       </StyledAccordion>
//     ))}
//   </div>;
// }

// export default Accordioncopy;
