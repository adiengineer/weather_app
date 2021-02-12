import classes from './Forecast.module.css';
import React, { useState } from 'react';
import Current from './Current';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [unit, setUnit] = useState('imperial');

    function getForecast(e) {
        e.preventDefault();

        fetch(`http://api.openweathermap.org/data/2.5/weather?units=${unit}&q=Milpitas&APPID=2ccb2b4f05ea8b95ded69eac95b7e3bf`)
        .then(response => response.json())
        .then(response => {
            setResponseObj(response);
            //console.log(response);
        })
        .catch(err => {
        console.log(err.message);
        });
    }

   return (
    <div>
        <h2>Current Weather Conditions</h2>
        <form onSubmit={getForecast}> 
            <label className={classes.Radio}> 
                <input
                    type= "radio"
                    name= "units"
                    checked ={unit === "imperial"}
                    value = "imperial"
                    onChange = {(e) => setUnit(e.target.value)} 
                />
                Fahrenheit 
            </label>
            <label className={classes.Radio}> 
                <input
                    type= "radio"
                    name= "units"
                    checked = {unit === "metric"}
                    value = "metric"
                    onChange = {(e) => setUnit(e.target.value)} 
                />
                Celcius 
            </label>
            <button className={classes.Button} type="submit"> Get Current Weather</button>
        </form>
        <Current responseObj = {responseObj}/> 
    </div>
   )
}

export default Forecast;