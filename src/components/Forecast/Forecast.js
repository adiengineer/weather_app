import classes from './Forecast.module.css';
import React, { useState } from 'react';
import Current from './Current';
import DayCard from './DayCard';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [unit, setUnit] = useState('imperial');
    let [weekObj, setWeekObj] = useState(null);
    //let weekObj = null;

    // use a setter function because useState's setter is unexpectedly not working for
    // the second fetch
    function customsetWeekObj(response) {
        weekObj = response;
    }

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

        fetch(`http://api.openweathermap.org/data/2.5/forecast?units=${unit}&q=Milpitas&APPID=2ccb2b4f05ea8b95ded69eac95b7e3bf`)
        .then(response => response.json())
        .then(response => {
            const filteredResponse = response.list.filter(reading => reading.dt_txt.includes("18:00:00"))
            //customsetWeekObj(filteredResponse);
            setWeekObj(filteredResponse);
        })
        .catch(err => {
        console.log(err.message);
        });
    }

    const renderDayCards = () => {
        console.log(weekObj);

        return weekObj !== null ? weekObj.map((reading, index) => <DayCard reading = {reading} key = {index}/>): null
    }
    return (
    <div className="container">
        <h2>Current Conditions and Week's Forecast </h2>
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
            <button className={classes.Button} type="submit"> Get Forecast</button>
        </form>
        <div className="justify-content-center"> 
            <Current responseObj = {responseObj}/> 
        </div>
        <div className="row justify-content-center"> 
            {renderDayCards()}
        </div>
        
    </div>
   )
}

export default Forecast;