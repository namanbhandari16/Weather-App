import React from 'react';
const Weather =(props) =>{
return(
    <div className="container">
        <h1> {props.city},{props.country}</h1>
        <h3>{props.temp}&deg;</h3>
        <h3><span style={{padding:'40px'}}>{props.temp_min}&deg;</span><span style={{padding:'40px'}}>{props.temp_max}&deg;</span></h3>
        <h3 style={{paddingLeft:'0%'}}> Wind Speed: {props.wind} Km/hr</h3>
        <h3 style={{textTransform:'capitalize'}}>{props.desc}</h3>
    </div>
);
};
export default Weather;